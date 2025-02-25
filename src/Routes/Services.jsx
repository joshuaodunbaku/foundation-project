import React from "react";
import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";

const Services = () => {
  return (
    <>
      <HeroComp $heroImage={IMAGES.hero_image_1}>
        <h3 className="display-5 fw-bold">Our Services</h3>
      </HeroComp>
    </>
  );
};

export default Services;
