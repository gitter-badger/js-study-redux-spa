export const ACTION_LOGGED_IN_SUCCESS = 'LOGIN_ACTION.ACTION_LOGGED_IN_SUCCESS';
export const ACTION_LOGOUT_SUCCESS = 'LOGIN_ACTION.ACTION_LOGOUT_SUCCESS';

export const login = (username) => {

  return (dispatch) => {

    setTimeout(() => {

      dispatch({
        type: ACTION_LOGGED_IN_SUCCESS,
        username: username
      });

    }, 100);
  };
};

export const logout = () => {
  
  return (dispatch) => {
    
    setTimeout(() => {
      
      dispatch({
        type: ACTION_LOGOUT_SUCCESS
      });
      
    }, 100);
  }
}