const initaddState = {
  data: [],
};

const addReducer = (state = initaddState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        data: [...action.payload],
      };
    default:
      return state;
  }
};
export default addReducer;
