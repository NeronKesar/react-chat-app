import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css'

class Root extends Component {
  render() {
    return (
      <div>
        <Navbar className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
                activeStyle={{ color: 'red' }}
              >
                <h1 className="Title">CHAT-APP</h1>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Brand>
              <Link to="/profile">Profile</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/auth">Sing In</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        Hello World
      </div>
    )
  }
}

export default Root;