import { useParams } from "react-router-dom";
import Container from "../layouts/Container";
import { PROJECT_DETAILS } from "../../lib/data";

const ProjectDetails = () => {
  const { id } = useParams();

  const findObjectById = () => {
    const foundObject = PROJECT_DETAILS.find((obj) => obj.id === Number(id));
    return foundObject || null;
  };

  const foundObject = findObjectById();

  const {
    poster,
    clients,
    services,
    year,
    job_title,
    about,
    problem,
    process,
    solution,
    firstFooterImg,
    secondFooterImg,
  } = foundObject;


  return (
    <Container pb="[6rem]" pt="10">
      <section>
        <h1 className="mb-10 font-primary text-[35px] font-bold leading-[40px] text-white md:leading-[64px] lg:text-[54px]">
          {job_title}
        </h1>
        <img src={poster} alt="Poster" />

        <article className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
          <div className="order-last md:order-first">
            <div className="border-b-[1px] border-colorwhite-100 pb-4 pt-4">
              <h1
                className="font-primary text-[26px] leading-[36px] text-white
"
              >
                Client
              </h1>
              <p className="text-[18px] capitalize leading-[35px] tracking-wider text-colorwhite-100">
                {clients}
              </p>
            </div>
            <div className="border-b-[1px] border-colorwhite-100 pb-4 pt-4">
              <h1 className="font-primary text-[26px] leading-[36px] text-white">
                Services
              </h1>
              <p className="text-[18px] capitalize leading-[35px] tracking-wider text-colorwhite-100">
                {services}
              </p>
            </div>
            <div className="border-b-[1px] border-colorwhite-100 pb-4 pt-4">
              <h1 className="font-primary text-[26px] leading-[36px] text-white">
                Year
              </h1>
              <p className="text-[18px] capitalize leading-[35px] tracking-wider text-colorwhite-100">
                {year}
              </p>
            </div>
          </div>
          <div>
            <div className="mb-7 text-white">
              <h3 className="pb-3 font-primary text-[36px] leading-[48px]">
                About
              </h3>
              <p className="text-[18px] capitalize leading-[35px] opacity-[70%]">
                {about}
              </p>
            </div>
            <div className="mb-7 text-white">
              <h3 className="pb-3 font-primary text-[36px] leading-[48px]">
                The Problem
              </h3>
              <p className="text-[18px] capitalize leading-[35px] opacity-[70%]">
                {problem}
              </p>
            </div>
            <div className="mb-7 text-white">
              <h3 className="pb-3 font-primary text-[36px] leading-[48px]">
                Process
              </h3>
              <p className="text-[18px] capitalize leading-[35px] opacity-[70%]">
                {process}
              </p>
            </div>
            <div className="mb-7 text-white">
              <h3 className="pb-3 font-primary text-[36px] leading-[48px]">
                Solution
              </h3>
              <p className="text-[18px] capitalize leading-[35px] opacity-[70%]">
                {solution}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-2">
          <img src={firstFooterImg} alt="first project done image" />
          <img src={secondFooterImg} alt="second project done image" />
        </div>
      </section>
    </Container>
  );
};

export default ProjectDetails;
