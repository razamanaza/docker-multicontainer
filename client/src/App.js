import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Fibb Calculator</h1>
          </div>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <br></br>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
