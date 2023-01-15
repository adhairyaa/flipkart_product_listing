import { createContext, useContext } from "react";

const stateContext = createContext();
export function StateProvider({ children }) {
  <stateContext.Provider>{children}</stateContext.Provider>;
}

const useStateProvider = () => useContext(stateContext);

export { useStateProvider };
