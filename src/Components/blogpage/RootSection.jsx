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
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          stiffness: 300,
          delay: 1,
          type: "spring",
        }}
        className="mb-12 mt-2 h-[50px] text-lg"
      >
        The latest in security, access control, IT compliance, and other news.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          stiffness: 300,
          delay: 1,
          type: "spring",
        }}
      >
        <BlogNews />
        <BlogInsight />
        <BlogTutorial />
      </motion.div>
    </Container>
  );
};

export default RootSection;
