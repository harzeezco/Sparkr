import useTheme from "../../Hooks/useTheme";
import Services from "../general/Services";
import Container from "../layouts/Container";
import { motion } from "framer-motion";


const HeroSection = () => {
  const { theme } = useTheme()
  
  return (
    <Container id="hero">
      <section className="pt-12">
        <motion.h1
          className={`whitespace-nowrap font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[95px]`}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 0, delay: 0, ease: "easeInOut" }}
        >
          <span className="text-orangePrimary">guiding </span>companies <br />{" "}
          through moments of <br />
          transformation.
        </motion.h1>

        <div className="pt-10">
          <Services />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
