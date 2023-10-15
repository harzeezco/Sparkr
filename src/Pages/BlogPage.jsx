import RootSection from "../Components/blogpage/RootSection";
import withPageAnimation from "../Components/HOC/withPageAnimation";
import BlogPageSchema from "../Components/SEO/schemas/BlogPageSchema";

const PageWithAnimation = withPageAnimation(RootSection);

const BlogPage = () => {
  return (
    <>
      <PageWithAnimation />
      <BlogPageSchema />
    </>
  );
};

export default BlogPage;
