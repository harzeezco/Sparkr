import Meeting from "../../assets/Images/meeting.png";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="m-auto w-full px-4  pb-[6rem] pt-20 lg:max-w-[85vw]"
    >
      <h1 className="font-weight-lg font-primary text-[30px] font-bold capitalize text-white sm:text-[45px] md:leading-[74px] lg:text-[60px] leading-10">
        our <span className="text-orangePrimary">approach </span> is to <br />
        solve problem
      </h1>

      <div className="flex flex-col items-center justify-between gap-x-20 pt-12 md:flex-row gap-y-10">
        <img
          className="w-full max-w-[450px]"
          src={Meeting}
          alt="The image showing our meeting curriculum"
        />

        <article className="order-first md:order-last">
          <p className="leading-[30px] text-white opacity-[70%] sm:text-[18px]">
            Located in Lagos, we are a professional creative design agency that
            has done many projects with various clients across the world.
          </p>
          <p className="mb-8 pt-8 leading-[30px] text-white opacity-[70%] sm:text-[18px]">
            We are a team of creative people who are committed to giving the
            world a little touch of beauty with our designs. We love what we do
            and we do it with passions. We believe in using business to drive
            positive changes in the world & never setting for what worked in the
            past.
          </p>

          <button className="btn-primary">learn more</button>
        </article>
      </div>
    </div>
  );
};

export default AboutSection;
