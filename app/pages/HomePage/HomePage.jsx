import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        Home
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object,
  actions: PropTypes.object,
  match: PropTypes.object
};

/*

function mapStateToProps(state, ownProps) {
  return {
    showcases: state.boards.showcase,
    isLoggedIn: state.auth.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(assign({}, boardsActions, appActions), dispatch)};
}
*/

export default HomePage; //connect(mapStateToProps, mapDispatchToProps)(HomePage);
export {HomePage};
