import Slider from "react-slick";

import { useInView } from "react-cool-inview";
import { lazy, Suspense } from "react";
import SliderSettings from "../../Utils/SliderSettings";
import { SERVICE_SLIDER2_DATA, SERVICE_SLIDER_DATA } from "../../lib/data";
import ServiceSliderDetails from "../data-display/ServiceSliderDetails";
import Loader from "./Loader";

const ServiceSlider = () => {
  const settings = SliderSettings(true, false);
  const settings2 = SliderSettings(false, true);

   const { inView, observe } = useInView();

   const slider = inView ? lazy(() => import("react-slick")) : null;

  return (
    <div className="slider-container py-8" ref={observe} id="service-slider">
      <Suspense fallback={<Loader />}>
        {slider && (
          <>
            {inView && (
              <>
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
                />
                <link
                  rel="stylesheet"
                  type="text/css"
                  href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
                />
              </>
            )}
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
          </>
        )}
      </Suspense>
    </div>
  );
};

export default ServiceSlider;
