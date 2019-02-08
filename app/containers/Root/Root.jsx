import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import HomePage from '../HomePage/HomePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-root">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <ToastContainer position="top-center" autoClose={6000} />
      </div>
    );
  }
}

/*
function mapStateToProps(state) {
  return { isLoggedIn: state.auth.isLoggedIn };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(_.assign({}, authActions, userActions, appActions), dispatch) };
}
*/
//  export default connect(null)(Root);
