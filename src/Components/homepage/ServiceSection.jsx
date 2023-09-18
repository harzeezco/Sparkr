import Services from "../general/Services";
import Container from "../layouts/Container";

const ServiceSection = () => {
  return (
    <Container id="service" pt="20">
      <Services header={true} />
    </Container>
  );
};

export default ServiceSection;
