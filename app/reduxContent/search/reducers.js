import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  SET_FILTERS,
  SET_IS_SEARCHING,
  SET_LAST_SEARCH_TERM,
  SET_PAGE,
  SET_PER_PAGE,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TERM,
  SET_TOTAL_PAGES
} from './types';

import { LOGOUT } from '../auth/types';
import { SEARCH_RESULTS_PER_PAGE } from 'config/constants';
import { getSearchTermFromUrl } from 'utilities';

export const initialState = {
  filters: 'boardz',
  isSearching: false,
  lastSearchTerm: '',
  page: 0,
  perPage: SEARCH_RESULTS_PER_PAGE,
  results: [],
  searchedAt: '',
  searchTerm: getSearchTermFromUrl() || '',
  totalPages: 0
};

export default handleActions({
  [ SET_FILTERS ]: (state, action) => {
    return state.set('filters', action.payload);
  },
  [ SET_IS_SEARCHING ]: (state, action) => {
    return state.set('isSearching', action.payload);
  },
  [ SET_LAST_SEARCH_TERM ]: (state, action) => {
    return state
      .set('lastSearchTerm', action.payload)
      .set('searchedAt', Date.now());
  },
  [ SET_PAGE ]: (state, action) => {
    return state.set('page', action.payload);
  },
  [ SET_PER_PAGE ]: (state, action) => {
    return state.set('perPage', action.payload);
  },
  [ SET_SEARCH_RESULTS ]: (state, action) => {
    return state.set('results', action.payload);
  },
  [ SET_SEARCH_TERM ]: (state, action) => {
    return state.set('searchTerm', action.payload);
  },
  [ SET_TOTAL_PAGES ]: (state, action) => {
    return state.set('totalPages', action.payload);
  },
  [ LOGOUT ]: () => {
    return fromJS(initialState);
  }
}, fromJS(initialState));

