import React from "react";
import { Wrapper } from "../Styles/Home";
import IMAGES from "../assets/images";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CiSettings } from "react-icons/ci";
import HeroComp from "../Components/HeroComp";
import AnimatedCard from "../Components/AnimatedCard";

const Home = () => {
  return (
    <Wrapper>
      <HeroComp heroImage={IMAGES.preg_2}>
        <h3 className="display-3 fw-bold">Our Helping To The World</h3>
        <p className="lead">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
        <div className="btn-div d-inline-block">
          <Button className="donate-btn btn-lg px-5 py-3 rounded-1">
            Donate
          </Button>
        </div>
      </HeroComp>
      {/*  */}
      <div
        className="d-flex align-items-center justify-content-center container mb-5 p-3"
        id="section-2"
      >
        <div className="d-flex flex-column flex-md-row align-items-sm-center justify-content-around gap-3 w-100">
          <p className="p-0 m-0 h3 text-white">
            Please Help them and Donate now
          </p>
          <div className="btn-div">
            <Button variant="outline-light" className="rounded-0 btn-lg">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mx-auto" id="section-3">
        <div className="my-5 py-5 text-center mx-auto child-1">
          <h6 style={{ color: "var(--primary-color)" }}>What we are doing</h6>
          <h1 className="display-5 fw-bold">
            We Are In A Mission To Help The Helpless
          </h1>
        </div>
        <div className="row child-2 g-3">
          {["Header 1", "Header 2", "Header 3"].map((header, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            >
              <div className="p-4 d-flex flex-column justify-content-center gap-4 text-center rounded-3">
                {/* <div> */}
                <div className="p-3 rounded-circle d-inline-block icon-bg d-flex align-items-center justify-content-center mx-auto">
                  <span>
                    <CiSettings size={"50px"} />
                  </span>
                </div>
                {/* </div> */}
                <h4>{header}</h4>
                <p>
                  The sea freight service has grown conside rably in recent
                  years. We spend timetting to know your processes to.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="my-5 text-white" id="section-4">
        <div className="container-fluid">
          <div className="row child-1">
            <div className="col-md-6 p-0 m-0">
              <img
                className=""
                src={IMAGES.image_1}
                width={"100%"}
                height={"100%"}
                alt=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center p-3 p-md-5 py-5">
              <div className="p-md-5">
                <h3 className="display-5 fw-bold mb-4">
                  A very Lovely Welcome <br /> to our company
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, dolorum. Reprehenderit omnis totam esse sunt veniam
                  accusamus, rem placeat fugiat consequatur ducimus voluptas
                  repellendus tenetur, saepe veritatis suscipit quam possimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div id="volunteer-section" className="container py-5">
        <div className="text-center mb-4">
          <h6 style={{ color: "var(--primary-color)" }}>What We Are Doing</h6>
          <h2 className="display-5 fw-bold">
            Our Expert Volunteer Always Ready
          </h2>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ad
            sint voluptatum magni.
          </p>
        </div>
        <Row className="text-center">
          {[
            "Bruce Roberts",
            "Robart Rechard",
            "Brendon Tailor",
            "Walshr Hasgt",
          ].map((volunteer, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={6} className="mb-4">
              <AnimatedCard>
                <div className="volunteer-img-container">
                  <img src={IMAGES.image_2} className="volunteer-img" />
                </div>
                <div>
                  <h4>{"volunteer"}</h4>
                  <p>Volunteer Leader</p>
                </div>
                <div className="btn-div d-inline-block">
                  <Button
                    className="btn-outline px-5 py-3 rounded-1 link-success"
                    variant="link"
                  >
                    Learn more
                  </Button>
                </div>
              </AnimatedCard>
            </Col>
          ))}
        </Row>
      </div>
    </Wrapper>
  );
};

export default Home;
