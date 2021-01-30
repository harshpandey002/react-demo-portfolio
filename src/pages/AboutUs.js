import About from "../components/About";
import Faq from "../components/Faq";
import Service from "../components/Service";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <About />
      <Service />
      <Faq />
    </motion.div>
  );
};

export default AboutUs;
