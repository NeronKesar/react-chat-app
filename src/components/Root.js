import React, { Component } from 'react';
import Title from './Title';
import NavigationBar from './NavigationBar/index';
import ProtectedRoute from './common/ProtectedRoute';
import Profile from './routes/Profile';

class Root extends Component {
  render() {
    return (
      <div className="Root">

        <Title to="/" text="CHAT-APP" />

        <NavigationBar />

        <ProtectedRoute path="/profile" component={Profile}/>

      </div>
    )
  }
}

export default Root;