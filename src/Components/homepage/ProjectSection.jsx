import Card1 from '../../assets/Images/Card1.png'

const ProjectSection = () => {
  return (
    <div
      id="project"
      className="m-auto w-full px-6  pb-[6rem] pt-16 lg:max-w-[85vw]"
    >
      <h1 className="heading-primary">
        our latest <span className="text-orangePrimary">project</span>
      </h1>

      <article>
        <img src={Card1} alt="image of the project" />
        <div>
          <button className="rounded-2xl border border-solid border-white bg-inherit px-4 py-1 text-sm capitalize text-white opacity-[40%] font-secondary">
            website
          </button>
          <button>design</button>
          <button>development</button>
        </div>
        <h3>Email marketing landing page</h3>
      </article>
    </div>
  );
}

export default ProjectSection