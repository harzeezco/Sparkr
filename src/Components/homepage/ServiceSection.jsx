import { useState } from "react";
import Service from "../Common/Service";

const service_data = [
  {
    id: 1,
    job: "Graphic design",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 2,
    job: "illustrations",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 3,
    job: "logo & branding",
    work: "UI/UX",
    isOpen: false,
    borderb: true,
  },
  {
    id: 4,
    job: "development",
    work: "UI/UX",
    isOpen: false,
    borderb: false,
  },
];

const ServiceSection = () => {
  const [services, setServices] = useState(service_data);

  const handleService = (id, condition) => {
    setServices((prev) =>
      prev.map((current) => {
        return current.id === id
          ? { ...current, isOpen: condition, borderb: true  }
          : { ...current };
      }),
    );
  };

  return (
    <div className="m-auto w-full px-6  pb-[6rem] lg:max-w-[85vw]" id="service">
      <h1 className="font-weight-lg font-primary text-[30px] font-bold capitalize text-white sm:text-[45px] md:leading-[74px] lg:text-[60px]">
        <span className="text-orangePrimary">services </span> we provide
      </h1>
      <p className="leading-[30px] text-white opacity-[70%] sm:text-[18px] lg:max-w-[60%]">
        Design services We are providing. With best-in-class design and
        engineering, our work maximizes value by putting your customers at the
        center of everything we do.
      </p>

      <div className="mx-auto mt-10">
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
            onToggleService={handleService}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
