const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_SIDEBAR_STATE":
      return {
        currentPage: action.payload,
      };

    case "GET_SIDEBAR_STATE":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default Reducer;
