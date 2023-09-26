import { TESTIMONIALS_DETAILS } from "../../lib/data";
import TestimonialsCarousel from "../general/Carousel";
import Container from "../layouts/Container";



const TestimonialSection = () => {
  return (
    <Container id="testimonial">
      <blockquote className="py-[3rem]">
        <TestimonialsCarousel testimonials={TESTIMONIALS_DETAILS} />
      </blockquote>
    </Container>
  );
};

export default TestimonialSection;
