import { createAction } from 'redux-actions';
import {
  SET_LIST,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM
} from './types';

export const setList = createAction(SET_LIST);
export const addListItem = createAction(ADD_ITEM);
export const updateListItem = createAction(UPDATE_ITEM);
export const removeListItem = createAction(REMOVE_ITEM);