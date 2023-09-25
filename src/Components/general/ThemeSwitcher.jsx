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
      <button
        className={`${isDark && "translate-x-0"} transition-all`}
        role="button"
        aria-controls="toggle"
        aria-label="light and dark mode"
      >
        {isDark ? (
          <span
            onClick={toggleSwitch}
            className={`text-${theme}`}
            aria-label="Button for Mode Toggle"
          >
            <Moon />
          </span>
        ) : (
          <span onClick={toggleSwitch}>
            <Sun />
          </span>
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
