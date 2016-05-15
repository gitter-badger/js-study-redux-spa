export const login = () => {
  console.log("login action");
  return (dispatch) => {
    console.log("login action start",dispatch);
    setTimeout(() => {
      console.log("will dispatch");
      dispatch({
        type: 'hogehoge',
        data: "dataaaa"
      });
    }, 1000);
  };
};
