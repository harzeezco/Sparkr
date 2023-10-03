const SliderSettings = (ltr, rtl ) => {
  return {
    dots: false,
    infinite: true, // Enable infinite loop
    speed: 1500, // Adjust the speed as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 10, // Adjust the speed as needed
    pauseOnHover: true,
    rtl: rtl,
    ltr: ltr, // For the right-to-left sliding effect
    variableWidth: true, // Set variable width for slides
    initialSlide: 2,
  };
};

export default SliderSettings;
