import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import IMAGES from "../assets/images";
import AnimatedCard from "../Components/AnimatedCard";
import { BsCalendarEvent } from "react-icons/bs";
import { FaClock, FaLocationPin } from "react-icons/fa6";

const events = [
  {
    title: "Support for Parents in Need",
    date: "Every Saturday, 10 AM - 12 Noon",
    location:
      " Davis Estate Community Centre (DERAC) Barberry Ave, Chatham. Me5 9te.",
    time: "1.30 pm - 5.30pm",
    link: "/",
    image: IMAGES.image_1,
  },
  {
    title: "Community Mental Health Workshop",
    date: "March 20, 2025, 2 PM - 4 PM",
    location: " Local Community Center",
    time: "1.30 pm - 5.30pm",
    link: "/",
    image: IMAGES.image_2,
  },
  {
    title: "Nutrition & Wellness Seminar",
    date: "April 5, 2025, 10 AM - 1 PM",
    location: " Health Center Hall",
    time: "1.30 pm - 5.30pm",
    link: "/",
    image: IMAGES.image_3,
  },
];

const Events = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Row className="g-4">
        {events.map((event, index) => (
          <Col key={index} md={6} lg={4}>
            <AnimatedCard>
              <Card
                className="shadow-sm border-0"
                style={{ height: "550px", maxHeight: "600px" }}
              >
                <Card.Img
                  height={"270px"}
                  variant="top"
                  src={event.image}
                  alt={event.title}
                />
                <Card.Body className="d-flex flex-column justify-content-around">
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    <strong>
                      <BsCalendarEvent /> {event.date}
                    </strong>
                    <br />
                    <span>
                      <FaLocationPin />
                      {event.location}
                    </span>{" "}
                    <br />
                    <span>
                      <FaClock />
                      {event.time}
                    </span>
                  </Card.Text>
                  <Button variant="success" href={event.link} target="_blank">
                    Learn More
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <small clas>Parking ais available on the street.</small>
                </Card.Footer>
              </Card>
            </AnimatedCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
