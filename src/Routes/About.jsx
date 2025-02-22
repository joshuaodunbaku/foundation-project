import React from "react";
import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <HeroComp heroImage={IMAGES.children_2}>
        <div>
          <h3 className="display-4 fw-bold">About the Organization</h3>
        </div>
      </HeroComp>

      <div className="container my-5 p-3">
        <div className="row g-4">
          <div className="col-md-6 order-1 order-md-0">
            <img
              className="align-self-stretch"
              src={IMAGES.image_3}
              style={{ width: "100%", minHeight: "400px", height: "100%" }}
              alt=""
            />
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <h3 className="display-5 fw-bold">Our History</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed
              natus iusto, sequi hic sunt recusandae quis. Sunt eligendi
              assumenda qui impedit. dolorem earum nisi ratione dolor tenetur id
              blanditiis. Eveniet facere magni iste architecto reiciendis minus
              sed vero magnam. Tempora placeat exercitationem magni totam,
              impedit saepe aliquid, veniam facilis vitae ipsam eum officia
              asperiores, aperiam iusto quam odio aspernatur.
            </p>
            <p>
              Eveniet facere magni iste architecto reiciendis minus sed vero
              magnam. Tempora placeat exercitationem magni totam, impedit saepe
              aliquid, veniam facilis vitae ipsam eum officia asperiores,
              aperiam iusto quam odio aspernatur. Eveniet facere magni iste
              architecto reiciendis minus sed vero magnam. Tempora placeat
              exercitationem magni totam, impedit saepe aliquid, veniam facilis
              vitae ipsam eum officia asperiores, aperiam iusto quam odio
              aspernatur.
            </p>
            <p>
              <small>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sint dignissimos necessitatibus eligendi tempore iure facere
                temporibus omnis laboriosam accusantium, nobis dolores voluptate
                a ratione explicabo! Iusto, modi? Enim, molestias!
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <Row className="mb-5">
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower and uplift communities through
              charitable work, providing vital resources and support for those
              in need. We aim to create lasting change through our initiatives,
              fostering a better future for everyone.
            </p>
          </Col>
          <Col md={6}>
            <h2>Our Vision</h2>
            <p>
              We envision a world where every person, regardless of their
              background, has the opportunity to thrive. Through collaboration
              and compassion, we are committed to making the world a better
              place for all.
            </p>
          </Col>
        </Row>
      </div>

      <div className="container">
        <Row className="mb-5">
          <Col>
            <h2>Our Story</h2>
            <p>
              Founded in [Year], our foundation began with the goal of
              addressing the needs of marginalized communities. What started as
              a small grassroots effort has grown into a global movement,
              reaching thousands of people each year. Through partnerships,
              advocacy, and on-the-ground efforts, we continue to expand our
              impact worldwide.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
