import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { ms, msr } from 'styles/helpers';
import { scaleFont, scale } from 'styles/common';

import JustTryOn from '../JustTryOn/JustTryOn';

const ADiv = styled.div`
  width: 0.1111%;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <ADiv>Home</ADiv>
        <JustTryOn a="asdasd"/>
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
