import { createContext, useContext, useReducer } from "react";

const stateContext = createContext();
const handleDispatch = (state, action) => {
  switch (action.type) {
    case "Low To High":
      return (state = {
        ...state,
        sortBy: "Low To High",
      });
    case "High to Low":
      return (state = { ...state, sortBy: "High to Low" });
    default:
      return state;
  }
};
export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(handleDispatch, {
    sortBy: null,
    gender: null,
    size: null,
  });

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
}

const useStateProvider = () => useContext(stateContext);

export { useStateProvider };
