import { createAction } from 'redux-actions';
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

export const setFilters = createAction(SET_FILTERS);
export const setIsSearching = createAction(SET_IS_SEARCHING);
export const setLastSearchTerm = createAction(SET_LAST_SEARCH_TERM);
export const setPage = createAction(SET_PAGE);
export const setPerPage = createAction(SET_PER_PAGE);
export const setSearchResults = createAction(SET_SEARCH_RESULTS);
export const setSearchTerm = createAction(SET_SEARCH_TERM);
export const setTotalPages = createAction(SET_TOTAL_PAGES);
