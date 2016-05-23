"use strict";

import assert from 'power-assert';

import { ACTION_ADD_TODO } from 'actionCreator/todo';
import { todos } from 'store/todo';

describe('todo Reducer', function() {
  
  context('todos', () => {
    
    it('should concat array', () => {
      
      const state = todos([{text: 'a'}, {text: 'b'}], {
        type: ACTION_ADD_TODO,
        todo: { text : 'c'}
      });
      
      assert(state.length === 3);
    });
  });
});
