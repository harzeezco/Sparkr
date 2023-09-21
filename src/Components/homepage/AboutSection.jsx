import useTheme from "../../Hooks/useTheme";
import Meeting from "../../assets/Images/meeting.png";
import ColumnGrid2 from "../layouts/2ColumnGrid";
import Container from "../layouts/Container";

const AboutSection = () => {
  const { theme } = useTheme()
  
  const isLightMode = theme === "light" ? "text-light-primary" : "text-dark"

  return (
    <Container id="about" pt="20">
      <h1
        className={`font-weight-lg theme-transition font-primary text-[30px] font-bold capitalize leading-10 ${isLightMode} sm:text-[45px] md:leading-[74px] lg:text-[60px]`}
      >
        our <span className="text-orangePrimary">approach </span> is to <br />
        solve problem
      </h1>

      <ColumnGrid2
        img_first={true}
        img={Meeting}
        button={true}
        first_prgh=" Located in Lagos, we are a professional creative design agency that
            has done many projects with various clients across the world."
        second_prgh="We are a team of creative people who are committed to giving the
            world a little touch of beauty with our designs. We love what we do
            and we do it with passions. We believe in using business to drive
            positive changes in the world & never setting for what worked in the
            past."
      />
    </Container>
  );
};

export default AboutSection;
