export const ACTION_LOGGED_IN = 'LOGIN_ACTION.LOGGED_IN';

export const login = (username) => {

  return (dispatch) => {

    setTimeout(() => {

      dispatch({
        type: ACTION_LOGGED_IN,
        username: username
      });

    }, 1000);
  };
};
