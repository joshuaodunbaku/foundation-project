import React from "react";
import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <HeroComp $heroImage={IMAGES.hero_image_1}>
        {/* <h1 className="fw-bold">Our Services</h1> */}
        <div className="text-center">
          <h1 className="display-4 fw-bold">Programs & Services</h1>
        </div>
      </HeroComp>

      <div className="container mt-5 p-3">
        <div className="text-center">
          <h3 className="display-6 fw-bold word-span">
            Support for Parents in Need
          </h3>
          <p className="lead fw-normal">
            Are You Pregnant or Have Young Children? Struggling Financially?
            We’re Here to Help!
          </p>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="container mx-auto my-5 row g-3">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h3>Healthcare Support</h3>
          <div className="fs-5">
            <p>
              <GiCheckMark className="word-span me-2" />
              Access to affordable prenatal and pediatric care
            </p>
            <p>
              <GiCheckMark className="word-span me-2" />
              Free health check-ups and vaccinations
            </p>
            <p>
              <GiCheckMark className="word-span me-2" />
              Nutritional support and advice
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="align-self-stretch"
            src={IMAGES.preg_4}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="container mx-auto my-5 row g-3">
        <div className="col-12 col-md-6 order-1 order-md-0">
          <img
            className="align-self-stretch"
            src={IMAGES.preg_women_1}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="col-12 col-md-6 order-0 order-md-1 d-flex flex-column justify-content-center align-items-center">
          <h3>Emotional & Mental Health</h3>
          <div className="fs-5">
            <p>
              <GiCheckMark className="word-span me-2" />
              Stress and anxiety management workshops
            </p>
            <p>
              <GiCheckMark className="word-span me-2" />
              Access to counseling and mental health services
            </p>
            <p>
              <GiCheckMark className="word-span me-2" />
              Parenting support groups
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
