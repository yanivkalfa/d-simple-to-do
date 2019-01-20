import qs from 'qs';

/**
 * Truncates a string depending the given length.
 * @param {string} text Text to truncate.
 * @param {number} length Maximum length to reach before truncating.
 * @returns Trucated string with '...' at the end.
 */
export function truncate(text, length) {
  const dots = '...';

  if (!text) {
    return;
  }

  if (isNaN(length)) {
    length = 10;
  }

  if (text.length <= length || (text.length - dots.length) <= length) {
    return text;
  } else {
    return text.substring(0, length - dots.length) + dots;
  }
}

export function getParsedQueryString() {
  let { search } = document.location;
  if ( search ) {
    search = search.trim().replace(/^\?/, '');
    return qs.parse(search);
  }
  return false;
}

export function getRedirect() {
  const { pathname, search } = document.location;
  let redirect = pathname + search;

  if ( pathname === '/' ) {
    redirect = '/my-profile';
  }

  return redirect;
}

export function generateRedirectUrl(route, redirect) {
  redirect = redirect || getRedirect();
  return route + '?redirect=' + redirect;
}

export function getRedirectFromQuery() {
  let redirect = '/my-profile';
  const queryObject = getParsedQueryString();
  if ( queryObject && queryObject.redirect ) {
    redirect = queryObject.redirect;
  }
  
  return redirect;
}

export function getCategoryFromUrl() {
  const queryObject = getParsedQueryString();
  if ( queryObject && queryObject.category ) {
    return queryObject.category;
  }

  return false;
}

export function getSearchTermFromUrl() {
  const queryObject = getParsedQueryString();
  if ( queryObject && queryObject.searchTerm ) {
    return queryObject.searchTerm;
  }

  return false;
}