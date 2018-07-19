import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Root from './components/Root';
import history from './history';
import './appStyle.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Root />
      </Router>
    );
  }
}

export default App;
