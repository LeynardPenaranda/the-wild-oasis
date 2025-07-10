import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/useDarkMode";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkmode } = useDarkMode();
  return (
    <ButtonIcon>
      {isDarkMode ? (
        <HiOutlineSun onClick={toggleDarkmode} />
      ) : (
        <HiOutlineMoon onClick={toggleDarkmode} />
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
