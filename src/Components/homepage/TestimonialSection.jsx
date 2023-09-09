import { useEffect, useState } from "react";
import BlockQuote from "../../assets/Icons/Union.svg";

const testimoanials = [
  {
    id: 1,
    text: ` Route agency team are just amazing. We have had some personal
            websites and dashboards. The team always delivered on time. The best
            quality with endless iterations. Good Job!`,
    name: "Elizabeth",
    address: "Los Angeles, CA",
  },
  {
    id: 2,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nemo
          enim eaque voluptates ea vero corrupti d.`,
    name: "Ismail",
    address: "USA, CA",
  },
  {
    id: 3,
    text: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          assumenda consectetur, vitae molestiae natus explicabo illo, ipsam
          expedita excepturi quidem `,
    name: "Azeez",
    address: "Lagos, CA",
  },
  {
    id: 4,
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellat distinctio id maxime in accusamus neque officiis officia enim
          iure illo cupiditate quibusdam, saepe`,
    name: "Wakil",
    address: "Nigeria, CA",
  },
  {
    id: 5,
    text: `  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
          magni quibusdam eius odio aliquam voluptatum pariatur nam impedit odit
          voluptatem `,
    name: "Adam",
    address: "Norway, CA",
  },
];

const TestimonialSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const inCreaseActiveTestimonial = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimoanials.length);
    }, 3000);

    return () => {
      clearTimeout(inCreaseActiveTestimonial);
    };
  }, [active]);

  console.log(active);

  return (
    <div
      id="testimonial"
      className="m-auto w-full  px-6 py-14  lg:max-w-[85vw]"
    >
      <blockquote className=" grid md:grid-cols-[120px_1fr]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-colorDark p-2">
          <img
            className="h-6"
            src={BlockQuote}
            alt="Image of the testimonial quote icon"
          />
        </div>

        <article className="">
          {/* <p className="lg:[42px] text-[20px] leading-7 text-white md:text-[30px] md:leading-[50px] lg:text-[2.9vw]">
            Route agency team are just amazing. We have had some personal
            websites and dashboards. The team always delivered on time. The best
            quality with endless iterations. Good Job!
          </p> */}
          <div className="flex justify-between pt-6">
            {/* <div className="">
              <h4 className="text-[20px] font-bold leading-8 text-white md:text-2xl">
                Elizabeth
              </h4>
              <p className="text-white opacity-[70%]">Los Angeles, CA</p>
            </div> */}
            <>
              {testimoanials
                .filter((items, i) => i === active)
                .map((activeItems) => {
                  return (
                    <div key={activeItems.id}>
                      <p className="lg:[42px] text-[20px] leading-7 text-white md:text-[30px] md:leading-[50px] lg:text-[2.9vw]">
                        {activeItems.text}
                      </p>

                      <div className="">
                        <h4 className="text-[20px] font-bold leading-8 text-white md:text-2xl">
                          {activeItems.name}
                        </h4>
                        <p className="text-white opacity-[70%]">
                          {activeItems.address}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </>

            <div className="flex items-center gap-x-1">
              <button
                className="h-3 w-3 rounded-full bg-white opacity-[70%]"
                onClick={() => setActive(1)}
              ></button>
              <button
                className="h-3 w-3 rounded-full bg-white opacity-[70%]"
                onClick={() => setActive(2)}
              ></button>
              <button
                className="h-5 w-3 rounded-full bg-white"
                onClick={() => setActive(3)}
              ></button>
              <button
                className="h-3 w-3 rounded-full bg-white opacity-[70%]"
                onClick={() => setActive(4)}
              ></button>
              <button
                className="h-3 w-3 rounded-full bg-white opacity-[70%]"
                onClick={() => setActive(5)}
              ></button>
            </div>
          </div>
        </article>
      </blockquote>
    </div>
  );
};

export default TestimonialSection;
