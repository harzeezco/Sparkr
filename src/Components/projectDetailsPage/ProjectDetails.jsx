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
    about,
    problem,
    process,
    solution,
    firstFooterImg,
    secondFooterImg,
  } = foundObject;
  console.log(
    poster,
    clients,
    services,
    year,
    about,
    problem,
    process,
    solution,
    firstFooterImg,
    secondFooterImg,
  );

  return (
    <Container pb="[6rem]" pt="10">
      <section>
        <h1 className="">Email Marketing Landing Page</h1> <img src={poster} alt="Poster" />
      </section>
    </Container>
  );
};

export default ProjectDetails;
