import useTheme from "../../Hooks/useTheme";
import Moon from "../../assets/Svg/Moon";
import Sun from "../../assets/Svg/Sun";

function ThemeSwitcher() {
  const { toggleTheme, theme } = useTheme();

  const isDark = theme === "dark";

  const toggleSwitch = () => {
    toggleTheme();
  };

  return (
    <div
      className={`
        flex h-10 w-10 items-center justify-center overflow-hidden bg-inherit transition  focus:hover:border-white`}
    >
      <span
        className={`${isDark && "translate-x-0"} transition-all text-${theme}`}
        role="button"
        aria-controls="toggle"
        aria-label="Dark Mode"
        onClick={toggleSwitch}
      >
        {isDark ? <Moon /> : <Sun />}
      </span>
    </div>
  );
}

export default ThemeSwitcher;
