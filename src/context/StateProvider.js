import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();
const handleDispatch = (state, action) => {
  switch (action.type) {
    case "Low To High":
      return (state = {
        ...state,
        sortBy: "Low To High",
      });
    case "High to Low":
      return (state = { ...state, sortBy: "High to Low" });
    case "Men Filter":
      return (state = {
        ...state,
        gender:
          state.gender === null
            ? [action.payload]
            : [...state.gender, action.payload],
      });
    case "Women Filter":
      return (state = {
        ...state,
        gender:
          state.gender === null
            ? [action.payload]
            : [...state.gender, action.payload],
      });
    default:
      return state;
  }
};
export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(handleDispatch, {
    sortBy: null,
    gender: [],
    size: [],
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

const useStateProvider = () => useContext(StateContext);

export { useStateProvider };
