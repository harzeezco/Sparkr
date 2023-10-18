import Container from "../layouts/Container";
import Feature1_webp from "../../assets/Images/Feature1.webp";
import Feature1_png from "../../assets/Images/Feature1.png";
import Feature2_webp from "../../assets/Images/Feature2.png";
import Feature2_png from "../../assets/Images/Feature2.png";
import Row from "../layouts/Row";

const FeatureSection = () => {
  return (
    <Container id="feature" pb="[6rem]" pt="20">
      <div className="grid gap-10 md:gap-14">
        <Row
          img_first={true}
          header="A Fresh"
          header_highlight="Perspective"
          defaultSrc={Feature1_webp}
          alternateSrc={Feature1_png}
          first_prgh="Every organization is unique and has different needs. That’s why we approach each project with an open-mind, getting to know each partner and coming up with a tailored way of working together."
          second_prgh="From arts and culture to education, not-for-profit to tech organizations, we bring new and exciting perspectives to every project we work on."
          button={false}
        />

        <Row
          text_first={true}
          header="Working"
          header_highlight="Together"
          defaultSrc={Feature2_webp}
          alternateSrc={Feature2_png}
          first_prgh="We believe that process is just as important as the outcome. We ask questions; we listen; we get to know you and your world. Our team analyze, research and understand. And most importantly, we work closely together to create outstanding design that wins hearts and minds. Providing the best."
          button={false}
        />
      </div>
    </Container>
  );
};

export default FeatureSection;
