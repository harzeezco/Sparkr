import Services from "../general/Services";
import Container from "../layouts/Container";

const ServiceSection = () => {
  return (
    <Container id="service" pb="[6rem]" pt="0">
      <Services header={true} />
    </Container>
  );
};

export default ServiceSection;
