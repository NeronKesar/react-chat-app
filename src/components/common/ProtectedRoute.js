import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { moduleName } from '../../ducks/auth';

class ProtectedRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
  };

  renderProtected = routeProps => {
    const { component: ProtectedComponent, authorized } = this.props;
    return authorized ? <ProtectedComponent {...routeProps} /> : <div style={{ color: 'red' }}>unauthorized</div>
  };

  render() {
    const { component, ...rest } = this.props;
    return <Route {...rest} render={this.renderProtected}/>
  }
}

export default connect(state => ({
  authorized: !!state[moduleName].user
}), null, null, { pure: false })(ProtectedRoute);