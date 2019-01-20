import { createSelector } from 'reselect';

export const getSearch = state => state.search;
export const getSearchFilters = createSelector(getSearch, search => search.get('filters'));
export const getIsSearching = createSelector(getSearch, search => search.get('isSearching'));
export const getLastSearchTerm = createSelector(getSearch, search => search.get('lastSearchTerm'));
export const getSearchedAt = createSelector(getSearch, search => search.get('searchedAt'));
export const getSearchPage = createSelector(getSearch, search => search.get('page'));
export const getSearchPerPage = createSelector(getSearch, search => search.get('perPage'));
export const getSearchResults = createSelector(getSearch, search => search.get('results'));
export const getSearchTerm = createSelector(getSearch, search => search.get('searchTerm'));
export const getSearchTotalPages = createSelector(getSearch, search => search.get('totalPages'));