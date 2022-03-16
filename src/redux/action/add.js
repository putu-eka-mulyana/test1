export const addData = (data, dispatch) => {
  dispatch({
    type: 'ADD',
    payload: data,
  });
};
