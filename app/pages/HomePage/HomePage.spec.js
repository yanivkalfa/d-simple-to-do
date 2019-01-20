import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from './HomePage';

// TODO: fix tests
describe.skip('Home Page', () => {
  let homePage;

  beforeEach(() => {
    let props = {
      showcases: [],
      actions: {}
    };
    homePage = shallow(<HomePage {...props} />);
  });

  describe('Startup', () => {
    it('should render a banner', () => {
      expect(homePage.find('.banner')).toExist();
    });

    it('should have a footer', () => {
      expect(homePage.find('footer')).toExist();
      });

    it('should not be showing any modal', () => {
      expect(homePage.state().showSignUp).toBeFalsy();
      expect(homePage.state().showSignIn).toBeFalsy();
      expect(document.querySelectorAll('.modal').length).toNotExist();
    });
  });

  describe('Sign Up and sign in modals', () => {
    it('should be displayed when clicking the signIn button', () => {
      homePage.instance().showSocialSignIn();
      expect(document.querySelectorAll('.modal')).toExist();
      expect(homePage.state().showSocial).toEqual(true);
      expect(homePage.state().showSignUp).toEqual(false);
    });

    it('should be displayed when clicking the signUp button', () => {
      homePage.instance().showSocialSignUp();
      expect(document.querySelectorAll('.modal')).toExist();
      expect(homePage.state().showSocial).toEqual(true);
      expect(homePage.state().showSignUp).toEqual(true);
    });
  });
});