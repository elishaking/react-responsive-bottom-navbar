import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import NavBar from './components/NavBar';
import Home from './components/routes/Home';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route path="/" component={Home} exact></Route>
      </Router>
    </div>
  );
}

export default App;
