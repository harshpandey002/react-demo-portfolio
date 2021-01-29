import home1 from "../img/home1.png";
import styled from "styled-components";
import { AboutSec, Description, Image, Hide } from "../style";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutSec>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 2 } }}
              initial={{ opacity: 0 }}
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            we are professionals with amazing skills
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </AboutSec>
  );
};

//Styled Components

export default About;
