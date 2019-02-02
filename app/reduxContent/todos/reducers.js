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
    return state.set('list', action.payload);
  },
  [ ADD_ITEM ]: (state, action) => {
    const list = state.set('list');
    const newItem = action.payload;
    newItem.id = generateUniqueId(list);
    list.push(newItem);
    return state.set('list', list);
  },
  [ UPDATE_ITEM ]: (state, action) => {
    const list = state.set('list');
    const itemToUpdate = action.payload;
    const foundIndex = list.findIndex((item) => item.id === itemToUpdate.id );

    if ( foundIndex > -1 ) {
      list[foundIndex] = itemToUpdate;
      return state.set('list', list);
    }

    return state;
  },
  [ REMOVE_ITEM ]: (state, action) => {
    const list = state.set('list');
    const foundIndex = list.findIndex((item) => item.id === action.payload );

    if ( foundIndex > -1 ) {
      list.splice(foundIndex, 1);
      return state.set('list', list);
    }

    return state;
  },
  [ LOGOUT ]: () => {
    return fromJS(initialState);
  }
}, fromJS(initialState));

