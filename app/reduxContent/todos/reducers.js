import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { generateUniqueId } from 'utilities';

import {
  SET_LIST,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM
} from './types';

import { LOGOUT } from '../auth/types';

export const initialState = {
  list: [],
};

export default handleActions({
  [ SET_LIST ]: (state, action) => {
    return state.set('list', fromJS(action.payload));
  },
  [ ADD_ITEM ]: (state, action) => {
    const list = state.get('list').toJS();
    const newItem = action.payload;
    newItem.id = generateUniqueId(list);
    newItem.done = false;
    list.push(newItem);
    return state.set('list', fromJS(list));
  },
  [ UPDATE_ITEM ]: (state, action) => {
    const list = state.get('list').toJS();
    const itemToUpdate = action.payload;
    const foundIndex = list.findIndex((item) => item.id === itemToUpdate.id );

    if ( foundIndex > -1 ) {
      list[foundIndex] = itemToUpdate;
      return state.set('list', fromJS(list));
    }

    return state;
  },
  [ REMOVE_ITEM ]: (state, action) => {
    const list = state.get('list').toJS();
    const foundIndex = list.findIndex((item) => item.id === action.payload );

    if ( foundIndex > -1 ) {
      list.splice(foundIndex, 1);
      return state.set('list', fromJS(list));
    }

    return state;
  },
  [ LOGOUT ]: () => {
    return fromJS(initialState);
  }
}, fromJS(initialState));

