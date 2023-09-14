import { useState } from "react";
import Container from "../layouts/Container";
import RegularList from "../general/RegularList";
import ServiceDetails from "../data-display/ServiceDetails";

import { SERVICE_DATA } from "../../lib/data";

const ServiceSection = () => {
  const [services, setServices] = useState(SERVICE_DATA);

  const handleService = (id, condition) => {
    setServices((prev) =>
      prev.map((current) => {
        return current.id === id
          ? { ...current, isOpen: condition, borderb: true }
          : { ...current };
      }),
    );
  };

  return (
    <Container id="service" pb="[6rem]" pt="0">
      <h1 className="heading-primary">
        <span className="text-orangePrimary">services </span> we provide
      </h1>
      <p className="leading-[30px] text-white opacity-[70%] sm:text-[18px] lg:max-w-[60%]">
        Design services We are providing. With best-in-class design and
        engineering, our work maximizes value by putting your customers at the
        center of everything we do.
      </p>

      <div className="mx-auto mt-10">
        <RegularList
          items={services}
          itemComponent={ServiceDetails}
          resourceName="service"
          onToggleService={handleService}
        />
      </div>
    </Container>
  );
};

export default ServiceSection;
