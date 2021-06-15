import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  currentPage: "home",
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ currentPage: state.currentPage, dispatch }}>
      {children}
    </Context.Provider>
  );
};
