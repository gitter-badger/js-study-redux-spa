"use strict";

import assert from 'power-assert';

import { ACTION_LOGGED_IN_SUCCESS, ACTION_LOGOUT_SUCCESS } from 'actionCreator/login';
import { user } from 'store/common';

describe('Common Reducer', function() {
  
  context('user', () => {
    const usernamem = 'hogehoge';
    
    it('should update username', () => {

      const state = user({}, {
        type: ACTION_LOGGED_IN_SUCCESS,
        username: usernamem
      });
      
      assert(state === usernamem);
    });
  });
});
