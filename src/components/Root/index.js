import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css'

class Root extends Component {
  render() {
    return (
      <div className="Root">

        <Link
          to="/"
          style={style}
        >
          <h1 className="Title">CHAT-APP</h1>
        </Link>

        <div className="Navbar">

          <div className="NavbarContainer">

          </div>

          <div className="SingInButton">
            <Link
              className="SingInText"
              to="/auth"
              style={style}
            >
              Sing In
            </Link>
          </div>

        </div>

      </div>
    )
  }
}

export default Root;

const style = {
  textDecoration: 'none'
};