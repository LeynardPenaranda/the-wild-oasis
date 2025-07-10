import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export function useDarkMode() {
  const darkmodeContext = useContext(DarkModeContext);
  if (darkmodeContext === undefined)
    throw new Error("DarkMode used outside the provider");

  return darkmodeContext;
}
