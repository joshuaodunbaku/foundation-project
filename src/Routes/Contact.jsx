import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import HeroComp from "../Components/HeroComp";
import IMAGES from "../assets/images";

const Contact = () => {
  // Validation Schema
  const schema = yup.object().shape({
    fname: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  // React Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Handle Form Submission
  const onSubmit = (data) => {
    console.log(data);

    const { fname, email, subject, message } = data;
    const mailtoLink = `mailto:kiddies.mecareroot@yahoo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${fname}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <HeroComp $heroImage={IMAGES.children_1}>
        <h1>Contact Us</h1>
      </HeroComp>
      <div className="container py-5">
        <Row className="align-items-center">
          {/* Contact Form */}
          <Col md={7}>
            <h2 className="mb-4">Get in Touch</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter Message"
                  {...register("message")}
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      {...register("fname")}
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      {...register("email")}
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control
                  {...register("subject")}
                  type="text"
                  placeholder="Enter Subject"
                />
              </Form.Group>
              <Button
                onClick={onSubmit}
                variant="outline-success"
                className="px-4"
              >
                SEND
              </Button>
            </Form>
          </Col>

          {/* Contact Info */}
          <Col md={5} className="mt-4 mt-md-0">
            <div className="d-flex align-items-center mb-3">
              <FaHome size={20} className="me-3 text-secondary" />
              <div>
                <strong>Buttonwood, California.</strong>
                <p className="mb-0 text-muted">Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaPhoneAlt size={20} className="me-3 text-secondary" />
              <div>
                <strong>+1 253 565 2365</strong>
                <p className="mb-0 text-muted">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaEnvelope size={20} className="me-3 text-secondary" />
              <div>
                <strong>support@yourdomain.com</strong>
                <p className="mb-0 text-muted">Send us your query anytime!</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
