import { useParams } from "react-router-dom";
import Container from "../layouts/Container";
import { PROJECT_DETAILS } from "../../lib/data";
import useTheme from "../../Hooks/useTheme";

const ProjectDetails = () => {
  const { id } = useParams();
  const {theme} = useTheme()

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

  const minor_heading = `font-primary text-[26px] leading-[36px] text-${theme} theme-transition`;
  const major_heading = `pb-3 font-primary text-[36px] leading-[48px] text-${theme} theme-transition`;

  return (
    <Container>
      <section className="theme-transition pt-12">
        <h1
          className={`mb-10  font-primary  text-[35px] font-bold leading-[40px] text-${theme} theme-transition md:leading-[64px] lg:text-[54px]`}
        >
          {job_title}
        </h1>
        <img src={poster} alt="Poster" />

        <article className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
          <div className="order-last md:order-first">
            <div className="border-b-[1px] border-colorwhite-100 pb-4 pt-4">
              <h3 className={`${minor_heading}`}>Client</h3>
              <p className="text-[18px] capitalize leading-[35px] tracking-wider">
                {clients}
              </p>
            </div>
            <div className="border-b-[1px] border-colorwhite-100 pb-4 pt-4">
              <h3 className={`${minor_heading}`}>Services</h3>
              <p className="text-[18px] capitalize leading-[35px] tracking-wider">
                {services}
              </p>
            </div>
            <div className="border-b-[1px] border-colorwhite-100 pb-4 pt-4">
              <h3 className={`${minor_heading}`}>Year</h3>
              <p className="text-[18px] capitalize leading-[35px] tracking-wider">
                {year}
              </p>
            </div>
          </div>
          <div>
            <div className="mb-7">
              <h3 className={`${major_heading}`}>About</h3>
              <p className="text-[18px] capitalize leading-[35px]">{about}</p>
            </div>
            <div className="mb-7">
              <h3 className={`${major_heading}`}>The Problem</h3>
              <p className="text-[18px] capitalize leading-[35px]">{problem}</p>
            </div>
            <div className="mb-7">
              <h3 className={`${major_heading}`}>Process</h3>
              <p className="text-[18px] capitalize leading-[35px]">{process}</p>
            </div>
            <div className="mb-7">
              <h3 className={`${major_heading}`}>Solution</h3>
              <p className="text-[18px] capitalize leading-[35px]">
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
