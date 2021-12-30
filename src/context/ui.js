import React, { createContext, useReducer, useContext } from "react";

const UIStateContext = createContext();
const UIDispatchContext = createContext();

const uiReducer = (state, action) => {
  switch (action.type) {
    case "LOADING_UI":
        return {
            ...state,
            loading: true
        }
    case "STOP_LOADING_UI":
        return {
            ...state,
            loading: false
        }
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer);

  return (
    <UIDispatchContext.Provider value={dispatch}>
      <UIStateContext.Provider value={state}>
        {children}
      </UIStateContext.Provider>
    </UIDispatchContext.Provider>
  );
};

export const useUIState = () => useContext(UIStateContext);
export const useUIDispatch = () => useContext(UIDispatchContext);
