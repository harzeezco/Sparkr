import useTheme from "../../Hooks/useTheme";
import { BLOG_INSIGHT_DETAILS } from "../../lib/data";
import BlogDetails from "../data-display/BlogDetails";
import RegularList from "../general/RegularList";

const BlogInsight = () => {
  const { theme } = useTheme();

  return (
    <>
      <h3
        className={`font-weight-lg mb-7 mt-16 w-3/6 font-primary text-[30px] font-bold capitalize leading-10 text-${theme} sm:text-[45px]  md:mb-12  md:mt-24 md:leading-[74px] lg:text-[60px]`}
      >
        insight
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        <RegularList
          items={BLOG_INSIGHT_DETAILS}
          resourceName="items"
          itemComponent={BlogDetails}
        />
      </div>
    </>
  );
};

export default BlogInsight;
