import useTheme from "../../Hooks/useTheme";

import Container from "../layouts/Container";
import RegularList from "../general/RegularList";
import Header from "../general/Header";

import { Puzzle_webp, Puzzle_png } from "../../lib/image-store";
import Row from "../layouts/Row";

const AboutSection = () => {
  const { theme } = useTheme();
  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px]`;

  const ABOUTSECTIONHEADER = [
    {
      id: 1,
      phrase: "Our",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 2,
      phrase: "Unique",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 3,
      phrase: "Approach",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 4,
      phrase: "helps",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 5,
      phrase: "us",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 6,
      phrase: "Spark",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 7,
      phrase: "your",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 8,
      phrase: "Brand",
      className: `${headerText} text-${theme}`,
    },
  ];

  const FIRST_LINE = ABOUTSECTIONHEADER.slice(0, 4);
  const SECOND_LINE = ABOUTSECTIONHEADER.slice(4);

  return (
    <Container id="about" pt="20">
      <div className="flex items-center gap-x-1">
        <RegularList
          resourceName="text"
          itemComponent={Header}
          items={FIRST_LINE}
        />
      </div>

      <div className="mb-7 flex items-center gap-x-1">
        <RegularList
          resourceName="text"
          itemComponent={Header}
          items={SECOND_LINE}
        />
      </div>

      <Row
        img_first={true}
        defaultSrc={Puzzle_webp}
        alternateSrc={Puzzle_png}
        button={true}
        first_prgh="At Sparkr, we understand that every business has its unique dreams and aspirations. Success, to us, means seeing you thrive online, reaching that audience you've always dreamt of, and achieving those milestones that define your brand's growth."
        second_prgh="We're here to listen, truly understand your goals, and handcraft a solution tailored just for you. We start by understanding the root cause of the problem and then we work with you to develop innovative and effective solutions that spark your brand to 100x."
      />
    </Container>
  );
};

export default AboutSection;
