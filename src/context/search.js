import React, { createContext, useReducer, useContext } from "react";

const SearchStateContext = createContext();
const SearchDispatchContext = createContext();

const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
        return{
            ...state,
            searchResults: action.payload
        }
    default:
      throw new Error(`unknown action type: ${action.type}`);
  }
};

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer);

  return (
    <SearchDispatchContext.Provider value={dispatch}>
      <SearchStateContext.Provider value={state}>
        {children}
      </SearchStateContext.Provider>
    </SearchDispatchContext.Provider>
  );
};

export const useSearchState = () => useContext(SearchStateContext);
export const useSearchDispatch = () => useContext(SearchDispatchContext);
