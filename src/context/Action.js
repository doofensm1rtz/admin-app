export const SetSidebarPage = (currentPage) => ({
  type: "SET_SIDEBAR_PAGE",
  payload: currentPage,
});

export const GetSidebarPage = () => ({
  type: "GET_SIDEBAR_PAGE",
});

export const SetSidebarState = (sidebarState) => ({
  type: "SET_SIDEBAR_STATE",
  payload: sidebarState,
});
