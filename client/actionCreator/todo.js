export const ACTION_ADD_TODO = 'TODO_ACTION.ADD_TODO';

export const addTodo = (text) => {
  return (dispatch) => {

    setTimeout(() => {

      dispatch({
        type: ACTION_ADD_TODO,
        todo: {
          text: text
        }
      });

    }, 100);
  };
}
