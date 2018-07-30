import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { moduleName } from '../ducks/auth';
import Title from './Title';
import NavigationBar from './NavigationBar/index';
import ProtectedRoute from './common/ProtectedRoute';
import Profile from './routes/Profile';
import Contacts from './routes/Contacts';
import SignIn from './routes/SignIn';
import Dialog from './routes/Dialog';
import {
  PATH_HOME,
  PATH_PROFILE,
  PATH_CONTACTS,
  PATH_CHATS,
  PATH_SIGN_IN,
} from '../constants/paths';

class Root extends Component {
  render() {
    return (
      <div className="Root">

        <Title to={PATH_HOME} text="CHAT-APP" />

        <NavigationBar userData={this.props.user} />

        <ProtectedRoute path={PATH_PROFILE} component={Profile} />
        <ProtectedRoute path={PATH_CONTACTS} component={Contacts} />
        <ProtectedRoute path={PATH_CHATS} component={Dialog} />
        <Route path={PATH_SIGN_IN} component={SignIn} />

      </div>
    )
  }
}

export default connect(state => ({
  user: state[moduleName].user,
}), null, null, { pure: false })(Root);
