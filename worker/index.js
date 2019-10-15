const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

redisClient.on("error", function (err) {
  console.log("Error " + err);
});

redisClient.hgetall('values', (err, values) => {
  console.log(values);
});

const sub = redisClient.duplicate();


function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}
sub.subscribe('insert');
sub.on('message', (channel, message) => {
  console.log('Before calling fib function');
  redisClient.hset('values', message, fib(parseInt(message)));
});

