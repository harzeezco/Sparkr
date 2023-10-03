import logo from "../../assets/Svg/LogoLightMode.svg";
import logoDark from "../../assets/Svg/LogoDarkMode.svg";
import ImageWrapper from "../data-display/ImageWrapper";

const Loader = () => {
  return (
    <div className="flex min-h-[100vh] w-screen items-center justify-center">
      <div className="loading-bar">
        <ImageWrapper
          srcForDarkMode={logoDark}
          src={logo}
          alt="Logo"
          height="34"
          width="110"
          className="relative z-[-3]"
        />
      </div>
    </div>
  );
};

export default Loader;
