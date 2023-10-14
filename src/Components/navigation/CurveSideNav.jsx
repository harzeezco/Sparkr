import useBtnGsapScrollTrigger from "../../Hooks/useBtnGsapScrollTrigger";
import useTheme from "../../Hooks/useTheme";

const CurveSideNav = () => {
  const { theme } = useTheme();

  const { button, isActive, setIsActive } = useBtnGsapScrollTrigger();

  return (
    <div ref={button} className="headerButtonContainer">
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`toggle-btn`}
      >
        <div
          className={`${theme === "light" && "colorDark"} ${
            theme === "dark" && !isActive ? "colorLight" : ""
          } ${theme === "dark" && isActive && "colorDark"}  burger ${
            isActive ? "burgerActive" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default CurveSideNav;
