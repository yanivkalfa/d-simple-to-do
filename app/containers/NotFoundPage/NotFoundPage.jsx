import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';


import notFoundImg from './images/not-found.jpg';
import './NotFoundPage.scss';
class NotFoundPage extends Component {
  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="a-not-found">
        <div className="not-found">
          <img src={notFoundImg} className="not-found--image" />
          <h1 className="not-found--title">Oops! Page not found.</h1>
          <p className="not-found--message">
            It looks like the page you were looking for does not exist or has been removed. Please click the "Back" button below to return to the previous screen.
          </p>

          <button className="back-button" onClick={this.goBack}>Back</button>
        </div>
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(NotFoundPage);

export {NotFoundPage};
  
