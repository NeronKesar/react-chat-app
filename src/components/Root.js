import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Title from './Title';
import NavigationBar from './NavigationBar/index';
import ProtectedRoute from './common/ProtectedRoute';
import Profile from './routes/Profile';
import Contacts from './routes/Contacts';
import SignIn from './routes/sign/SignIn';
import SignUp from './routes/sign/SignUp';
import Chat from './routes/Chat';
import {
  PATH_HOME,
  PATH_PROFILE,
  PATH_CONTACTS,
  PATH_CHATS,
  PATH_SIGN_IN,
  PATH_SIGN_UP,
} from '../constants/paths';

class Root extends Component {
  render() {
    return (
      <div className="app__root">

        <Title to={PATH_HOME} text="CHAT-APP" />

        <NavigationBar />

        <ProtectedRoute path={PATH_PROFILE} component={Profile} />
        <ProtectedRoute path={PATH_CONTACTS} component={Contacts} />
        <ProtectedRoute path={PATH_CHATS} component={Chat} />

        <Route path={PATH_SIGN_IN} component={SignIn} />
        <Route path={PATH_SIGN_UP} component={SignUp} />

      </div>
    )
  }
}

export default Root;
