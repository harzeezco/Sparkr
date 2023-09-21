import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderSettings from "../../Utils/SliderSettings";
import { SERVICE_SLIDER2_DATA, SERVICE_SLIDER_DATA } from "../../lib/data";
import ServiceSliderDetails from "../data-display/ServiceSliderDetails";

const ServiceSlider= () => {
  const settings = SliderSettings(true, false);
  const settings2 = SliderSettings(false, true);

  return (
    <div className="slider-container py-8">
      <Slider {...settings}>
        {SERVICE_SLIDER_DATA.map((company) => (
          <ServiceSliderDetails key={company.id} items={company} />
        ))}
      </Slider>

      <Slider {...settings2}>
        {SERVICE_SLIDER2_DATA.map((company) => (
          <ServiceSliderDetails key={company.id} items={company} />
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
