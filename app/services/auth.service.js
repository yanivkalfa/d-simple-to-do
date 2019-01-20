/* eslint-disable import/prefer-default-export */

import { BaseService } from './base.service';

/**
 * Service used for any auth related calls.
 */
export class AuthService extends BaseService {
  constructor() {
    super('auth');
  }

  /**
   * Signs up the user into the app.
   * @returns A promise containing the new user data.
   */
  signUpUser(data) {
    return this.post('signup', data);
  }

  /**
   * Signs in the user into the app.
   * @returns A promise containing the logged user data.
   */
  signInUser(data) {
    return this.post('signin', data);
  }

  /**
   * Signs the user out of the application.
   */
  signOut() {
    return this.get('signout');
  }

  /**
   * Starts the forgot password process inside tha app.
   * @returns A promise containing the logged user data.
   */
  forgotPassword(data) {
    return this.post('forgot/password', data);
  }

  /**
   * Starts the reset password process inside tha app.
   * @param token The token provided by the email.
   * @param data Any data passed to the reset password call.
   * @returns A promise containing the logged user data.
   */
  resetPassword(token, data) {
    return this.post(`reset/password/${token}`, data);
  }

  /**
   * Requests a token for the social media user.
   * @returns A promise containing the issued token.
   */
  requestToken() {
    return this.get('request-token');
  }
}