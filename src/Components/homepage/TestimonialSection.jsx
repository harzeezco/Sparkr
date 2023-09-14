// import BlockQuote from "../../assets/Icons/Union.svg";
import TestimonialsCarousel from "../general/Carousel";

const testimoanials = [
  {
    id: 0,
    text: ` Route agency team are just amazing. We have had some personal
            websites and dashboards. The team always delivered on time. The best
            quality with endless iterations. Good Job!`,
    name: "Elizabeth",
    address: "Los Angeles, CA",
  },
  {
    id: 1,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo
          enim eaque voluptates ea vero corrupti d.`,
    name: "Ismail",
    address: "USA, CA",
  },
  {
    id: 2,
    text: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          assumenda consectetur, vitae molestiae natus explicabo illo, ipsam
          expedita excepturi quidem `,
    name: "Azeez",
    address: "Lagos, CA",
  },
  {
    id: 3,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellat distinctio id maxime in accusamus neque officiis officia enim
          iure illo cupiditate quibusdam, saepe`,
    name: "Wakil",
    address: "Nigeria, CA",
  },
  {
    id: 4,
    text: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          magni quibusdam eius odio aliquam voluptatum pariatur nam impedit odit
          voluptatem `,
    name: "Adam",
    address: "Norway, CA",
  },
];

const TestimonialSection = () => {
  return (
    //     <div id="testimonial" className="m-auto w-full px-4 py-14 lg:max-w-[85vw]">
    //       <blockquote className=" grid md:grid-cols-[120px_1fr]">
    //         <div className="flex h-20 w-20 items-center justify-center rounded-full bg-colorDark p-2">
    //           <img
    //             className="h-6"
    //             src={BlockQuote}
    //             alt="Image of the testimonial quote icon"
    //           />
    //         </div>

    //         <article className="">
    //          <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
    //     <ol className="carousel-indicators">
    //         <li data-target="#carousel" data-slide-to="0" className="active"></li>
    //         <li data-target="#carousel" data-slide-to="1"></li>
    //         <li data-target="#carousel" data-slide-to="2"></li>
    //     </ol>
    //     <div className="carousel-inner">
    //         <div className="active item"></div>
    //         <div className="item"></div>
    //         <div className="item"></div>
    //     </div>
    //     <a className="carousel-control left" href="#carousel" data-slide="prev">&lsaquo;</a>
    //     <a className="carousel-control right" href="#carousel" data-slide="next">&rsaquo;</a>
    // </div>

    //         </article>
    //       </blockquote>
    //     </div>

    <TestimonialsCarousel testimonials={testimoanials} />
  );
};

export default TestimonialSection;
