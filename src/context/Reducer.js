const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_SIDEBAR_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "GET_SIDEBAR_PAGE":
      return {
        ...state,
      };

    case "SET_SIDEBAR_STATE":
      return {
        ...state,
        isSidebarOpen: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
