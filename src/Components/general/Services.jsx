import { useState } from "react";
import PropTypes from "prop-types";
import RegularList from "../general/RegularList";
import ServiceDetails from "../data-display/ServiceDetails";

import { SERVICE_DATA } from "../../lib/data";

const Services = () => {
  const [services, setServices] = useState(SERVICE_DATA);

  const handleService = (id, condition) => {
    setServices((prev) =>
      prev.map((current) => {
        return current.id === id
          ? { ...current, isOpen: condition }
          : { ...current };
      }),
    );
  };

  return (
    <>
      <div className="mx-auto mt-10">
        <RegularList
          items={services}
          itemComponent={ServiceDetails}
          resourceName="service"
          onToggleService={handleService}
        />
      </div>
    </>
  );
};

Services.propTypes = {
  header: PropTypes.bool,
};

export default Services;
