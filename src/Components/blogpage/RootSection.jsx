import { motion } from "framer-motion";
import { BannerRowTop } from "../general/BannerRowTop";
import Container from "../layouts/Container";
import BlogInsight from "./BlogInsight";
import BlogNews from "./BlogNews";
import BlogTutorial from "./BlogTutorial";

const RootSection = () => {
  return (
    <Container>
      <div className="flex h-[130px] items-center gap-x-4 overflow-hidden">
        <BannerRowTop title="latest" color="text-mode" />
        <BannerRowTop title="blog " color="text-default" />
      </div>
      <motion.div
        initial={{ transform: 0, y: 80 }}
        animate={{ transform: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="mb-12 mt-2 h-[50px] text-lg"
      >
        The latest in security, access control, IT compliance, and other news.
      </motion.div>

      <BlogNews />
      <BlogInsight />
      <BlogTutorial />
    </Container>
  );
};

export default RootSection;
