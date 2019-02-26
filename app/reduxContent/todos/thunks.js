import {
  getTodoFromChain,
  addTodoToChain,
  updateTodoInChain,
  removeTodoFromChain,
  confirmTransactionOnChain
} from 'services/todo';

import { setList, addListItem, updateListItem, removeListItem } from './actions'
import { ACTION_REQUESTED, ACTION_SUCCEEDED, ACTION_CONFIRMED } from 'config/todoStatus';

export function getAllTodo() {
  return dispatch => getTodoFromChain()
    .then((res) => {
      dispatch(setList(res.rows.map((item) => {
        item.status = ACTION_CONFIRMED;
        item.done = !!item.done;
        return item;
      })));
  });
}

export function addTodo({ id, name }) {
  return dispatch => {
    const todo = {
      id,
      name,
      status: ACTION_REQUESTED,
      done: false
    };

    dispatch(addListItem(todo));

    return addTodoToChain({ id, name })
      .then((res) => {
        todo.transaction =  {
          transactionId: res.transaction_id,
          blockId: res.processed.block_num,
        };
        todo.status = ACTION_SUCCEEDED;

        dispatch(updateListItem(todo));
      }).catch((error) => {
        dispatch(removeListItem(todo.id));
        throw error;
      });
  };
}

export function updateTodo(oldTodo, newTodo) {
  return dispatch => {
    newTodo.status = ACTION_REQUESTED;
    dispatch(updateListItem(newTodo));
    return updateTodoInChain(newTodo)
      .then((res) => {
        newTodo.transaction =  {
          transactionId: res.transaction_id,
          blockId: res.processed.block_num,
        };
        newTodo.status = ACTION_SUCCEEDED;
        dispatch(updateListItem(newTodo));
      }).catch((error) => {
        dispatch(updateListItem(oldTodo));
        throw error;
      });
  };
}

export function removeTodo(oldTodo) {
  return dispatch => {
    const newTodo = {
      ...oldTodo,
      deleteInProgress: true,
      status: ACTION_REQUESTED
    };
    dispatch(updateListItem(newTodo));
    return removeTodoFromChain(newTodo.id)
      .then((res) => {
        newTodo.transaction =  {
          transactionId: res.transaction_id,
          blockId: res.processed.block_num,
        };
        newTodo.status = ACTION_SUCCEEDED;
        dispatch(updateListItem(newTodo));
      }).catch((error) => {
        dispatch(updateListItem(oldTodo));
        throw error;
      });
  };
}

export function confirmTransaction(todo) {
  return dispatch => confirmTransactionOnChain(todo.transaction)
    .then((res) => {
      if ( todo.deleteInProgress ) {
        dispatch(removeListItem(todo.id));
      } else {
        todo.status = ACTION_CONFIRMED;
        todo.transaction = null;
        dispatch(updateListItem(todo));
      }
    });
}