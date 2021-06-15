export const SetSidebarState = (currentPage) => ({
  type: "SET_SIDEBAR_STATE",
  payload: currentPage,
});

export const GetSidebarState = () => ({
  type: "GET_SIDEBAR_STATE",
});
