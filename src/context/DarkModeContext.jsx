import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DarkModeContext } from "./DarkModeContext";

function DarkModedProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  function toggleDarkmode() {
    setIsDarkMode((d) => !d);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkmode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkModedProvider.propTypes = {
  children: PropTypes.node,
};

export default DarkModedProvider;
