import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class ProtectedRoute extends Component {
  static propTypes = {
    component: PropTypes.element.isRequired,
  };

  renderProtected = routeProps => {
    const { component: ProtectedComponent } = this.props;
    return <ProtectedComponent {...routeProps} />
  };

  render() {
    const { ...rest } = this.props;
    return <Route {...rest} render={this.renderProtected}/>
  }
}

export default ProtectedRoute;