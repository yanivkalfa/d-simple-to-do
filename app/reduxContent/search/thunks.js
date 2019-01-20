import { PublicProfileService } from 'services';
import { errorHandler, canSendSearch } from 'utilities';


import { setSearchTerm, setSearchResults, setIsSearching, setLastSearchTerm } from './actions';
import { getLastSearchTerm, getSearchedAt } from './selectors';
const profileService = new PublicProfileService();

export function sendSearch({ searchTerm, page, perPage }) {
  return async (dispatch, getState) => {
    const state = getState();
    let LastSearchTerm = getLastSearchTerm(state);
    let searchedAt = getSearchedAt(state);
    console.log('lastSearch', LastSearchTerm, searchedAt);
    const canSearch = canSendSearch({ LastSearchTerm, searchedAt, searchTerm });
    console.log('canSearch', canSearch);
    if ( !canSearch ) {
      return;
    }

    dispatch(setLastSearchTerm(searchTerm));
    dispatch(setIsSearching(true));
    
    
    /*
    const results = await profileService.search(term)
      .catch((error) => ({error}));
    */

    setTimeout(() => {

      dispatch(setIsSearching(false));
    }, 100);
    /*
    dispatch(setIsSearching(false));

    if ( results && results.error ) {
      return errorHandler(results.error);
    }

    return dispatch(setSearchResults(results));
    */
  };
}
