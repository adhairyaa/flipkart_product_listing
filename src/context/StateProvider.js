import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

const handleDispatch = (state, action) => {
  switch (action.type) {
    case "Low To High":
      return (state = {
        ...state,
        sortBy: "Low To High",
      });
    case "High To Low":
      return (state = { ...state, sortBy: "High To Low" });
    case "GENDER_FILTER":
      return (state = {
        ...state,
        gender: state.gender.includes(action.payload)
          ? state.gender.filter((gender) => gender !== action.payload)
          : [...state.gender, action.payload],
      });
    case "SIZE_FILTER":
      return (state = {
        ...state,
        size: state.size.includes(action.payload)
          ? state.size.filter((size) => size !== action.payload)
          : [...state.size, action.payload],
      });
    case "CLEAR_FILTER":
      return (state = {
        ...state,
        size: [],
        gender: [],
        sortBy: null,
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
