import { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  currentPage: JSON.parse(localStorage.getItem("currentPage")) || "home",
  isSidebarOpen: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(state.currentPage));
  }, [state.currentPage]);

  return (
    <Context.Provider
      value={{
        currentPage: state.currentPage,
        isSidebarOpen: state.isSidebarOpen,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
