import { BLOG_NEWS_DETAILS } from "../../lib/data";
import BlogDetails from "../data-display/BlogDetails";
import RegularList from "../general/RegularList";

const BlogNews = () => {
  return (
    <>
      <div className="grid gap-8  md:grid-cols-2 ">
        <RegularList
          items={BLOG_NEWS_DETAILS}
          resourceName="items"
          itemComponent={BlogDetails}
        />
      </div>
    </>
  );
};

export default BlogNews;
