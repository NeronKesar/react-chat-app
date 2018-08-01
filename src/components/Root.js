import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { moduleName } from '../ducks/auth';
import Title from './Title';
import NavigationBar from './NavigationBar/index';
import ProtectedRoute from './common/ProtectedRoute';
import Profile from './routes/Profile';
import Contacts from './routes/Contacts';
import SignIn from './routes/sign/SignIn';
import SignUp from './routes/sign/SignUp';
import Dialog from './routes/Dialog';
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
      <div className="Root">

        <Title to={PATH_HOME} text="CHAT-APP" />

        <NavigationBar userData={this.props.user} />

        <ProtectedRoute path={PATH_PROFILE} component={Profile} />
        <ProtectedRoute path={PATH_CONTACTS} component={Contacts} />
        <ProtectedRoute path={PATH_CHATS} component={Dialog} />

        <Route path={PATH_SIGN_IN} component={SignIn} />
        <Route path={PATH_SIGN_UP} component={SignUp} />

      </div>
    )
  }
}

export default connect(state => ({
  user: state[moduleName].user,
}), null, null, { pure: false })(Root);
