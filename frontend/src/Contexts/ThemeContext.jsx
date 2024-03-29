/* eslint-disable react/prop-types */

// REACT ROUTER DOM
import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
