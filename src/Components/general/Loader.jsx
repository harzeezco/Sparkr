import logo from "../../assets/Svg/SparkLogoIcon.svg";
import ImageWrapper from "../data-display/ImageWrapper";

const Loader = () => {
  return (
    <div className="flex min-h-[100vh] w-screen items-center justify-center">
      <div className="loading-bar">
        <ImageWrapper
          src={logo}
          alt="Logo"
          height="34"
          width="40"
          className="relative z-[-3]"
        />
      </div>
    </div>
  );
};

export default Loader;
