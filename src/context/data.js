import React, { createContext, useReducer, useContext } from "react";

const DataStateContext = createContext();
const DataDispatchContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
        return{
            ...state,
            data: action.payload
        }
    case "SET_SEARCH_RESULT":
        return{
            ...state,
            searchResult: action.payload
        }
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer);

  return (
    <DataDispatchContext.Provider value={dispatch}>
      <DataStateContext.Provider value={state}>
        {children}
      </DataStateContext.Provider>
    </DataDispatchContext.Provider>
  );
};

export const useDataState = () => useContext(DataStateContext);
export const useDataDispatch = () => useContext(DataDispatchContext);
