import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar/index';
import '../index.css'

class Root extends Component {
  render() {
    return (
      <div className="Root">

        <Link
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <h1 className="Title">CHAT-APP</h1>
        </Link>

        <NavigationBar />

      </div>
    )
  }
}

export default Root;