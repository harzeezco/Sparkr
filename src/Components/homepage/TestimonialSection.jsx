import { TESTIMONIALS_DETAILS } from "../../lib/data";
import TestimonialsCarouselDetails from "../data-display/TestimonialCarouselDetails";
import Container from "../layouts/Container";

const TestimonialSection = () => {
  return (
    <Container id="testimonial">
      <blockquote className="py-[3rem]">
        <TestimonialsCarouselDetails testimonials={TESTIMONIALS_DETAILS} />
      </blockquote>
    </Container>
  );
};

export default TestimonialSection;
