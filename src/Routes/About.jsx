import React from "react";
import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";

const About = () => {
  return (
    <>
      <HeroComp heroImage={IMAGES.children_2}>
        <div>
          <h3 className="display-4 fw-bold">About the Organization</h3>
        </div>
      </HeroComp>
    </>
  );
};

export default About;
