import styled from "styled-components";
import { AboutSec } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const Faq = () => {
  return (
    <>
      <FAQ>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <AnimateSharedLayout>
          <Toggle title="How do I start ?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                atque maxime natus.
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                atque maxime natus.
              </p>
            </div>
          </Toggle>
          <Toggle title="Different Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                atque maxime natus.
              </p>
            </div>
          </Toggle>
          <Toggle title="What product do you offer ?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                atque maxime natus.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </FAQ>
    </>
  );
};

const FAQ = styled(AboutSec)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;
