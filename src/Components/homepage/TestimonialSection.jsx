import { TESTIMONIALS_DETAILS } from "../../lib/data";
import TestimonialsCarousel from "../general/Carousel";
import Container from "../layouts/Container";



const TestimonialSection = () => {
  return (
    <Container id="testimonial" py="[3rem]">
      <TestimonialsCarousel testimonials={TESTIMONIALS_DETAILS} />
    </Container>
  );
};

export default TestimonialSection;
