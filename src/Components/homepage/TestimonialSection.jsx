import { TESTIMONIALS_DETAILS } from "../../lib/data";
import TestimonialsCarousel from "../general/Carousel";
import Container from "../layouts/Container";



const TestimonialSection = () => {
  return (
    <Container id="testimonial" py="[5rem]">
      <blockquote className="py-[3rem]">
        <TestimonialsCarousel testimonials={TESTIMONIALS_DETAILS} />
      </blockquote>
    </Container>
  );
};

export default TestimonialSection;
