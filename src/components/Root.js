import React, { Component } from 'react';
import Title from './Title';
import NavigationBar from './NavigationBar/index';
import ProtectedRoute from './common/ProtectedRoute';
import Profile from './routes/Profile';
import Contacts from './routes/Contacts';
import Chats from './routes/Chats';
import Auth from './routes/Auth';
import {
  PATH_HOME,
  PATH_PROFILE,
  PATH_CONTACTS,
  PATH_CHATS,
  PATH_AUTH,
} from '../constants';

class Root extends Component {
  render() {
    return (
      <div className="Root">

        <Title to={PATH_HOME} text="CHAT-APP" />

        <NavigationBar />

        <ProtectedRoute path={PATH_PROFILE} component={Profile} />
        <ProtectedRoute path={PATH_CONTACTS} component={Contacts} />
        <ProtectedRoute path={PATH_CHATS} component={Chats} />
        <ProtectedRoute path={PATH_AUTH} component={Auth} />

      </div>
    )
  }
}

export default Root;