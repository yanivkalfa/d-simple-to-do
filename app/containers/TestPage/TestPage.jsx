import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getTodosList } from 'reduxContent/todos/selectors';
import { setList, removeListItem } from 'reduxContent/todos/actions';

class TestPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount');
    const { setToDo } = this.props;
    setToDo([
      {
        id: 'aaaaaaaaa',
        done: false,
        name: 'First Task'
      }
    ]);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  removeToDo(id) {
    const { removeToDo } = this.props;
    removeToDo(id);
  }

  render() {
    const { classes, toDoList } = this.props;

    console.log('toDoList', toDoList);

    return (
      <div onClick={() => this.removeToDo('aaaaaaaaa')}>
        Click Me
      </div>
    );
  }
}

TestPage.propTypes = {
  toDoList: PropTypes.array,
  setToDo: PropTypes.func,
  removeToDo: PropTypes.func
};


function mapStateToProps(state, ownProps) {
  return {
    toDoList: getTodosList(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setToDo: setList,
      removeToDo: removeListItem,

    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);