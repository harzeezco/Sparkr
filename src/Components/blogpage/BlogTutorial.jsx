import useTheme from "../../Hooks/useTheme";
import { BLOG_TUTORIAL_DETAILS } from "../../lib/data";
import BlogDetails from "../data-display/BlogDetails";
import RegularList from "../general/RegularList";

const BlogTutorial = () => {
  const { theme } = useTheme();

  return (
    <>
      <h3
        className={`font-weight-lg mb-7 mt-16 w-3/6 font-primary text-[30px] font-bold capitalize leading-10 text-${theme} sm:text-[45px] md:mb-12  md:mt-24 md:leading-[74px] lg:text-[60px]`}
      >
        tutorial
      </h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        <RegularList
          items={BLOG_TUTORIAL_DETAILS}
          resourceName="items"
          itemComponent={BlogDetails}
        />
      </div>
    </>
  );
};

export default BlogTutorial;
