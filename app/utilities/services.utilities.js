import { toast } from 'react-toastify';

/**
 * Shows a toast when an error occurs.
 * @param {object} err Error rejected by the promise.
 */
export function errorHandler(err) {
  toast.error(err.message || err);

  /*eslint no-console: 0*/
  if(process.env.NODE_ENV !== 'production') {
    console.error(err);
  }
}

/**
 * Shows a toast when an success occurs.
 */
export function successHandler(msg) {
  toast.success(msg);
}