import useTheme from "../../Hooks/useTheme";

import Jonny from "/videos/Jonny.mp4";
import useCreateCircleText from "../../Hooks/useCreateCircleText";

const CircleContact = () => {
  const { theme } = useTheme();
  const textRef = useCreateCircleText();

  return (
    <div className="fixed bottom-5 right-[40px] z-50 hidden lg:block">
      <a href="/contact" className="circle">
        <div className={`text text-${theme}`}>
          <p ref={textRef}>Contact - Contact - Contact - Contact -</p>
        </div>

        <div className="centered-image">
          <video loop autoPlay muted>
            <source src={Jonny} type="video/mp4" />
            <track
              label="English Captions"
              kind="captions"
              srcLang="en"
              default
            ></track>
          </video>
        </div>
      </a>
    </div>
  );
};

export default CircleContact;
