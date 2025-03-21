import { useEffect, useState } from "react";
import { Modal, Carousel, Button } from "react-bootstrap";
import IMAGES from "../assets/images";
import { HiLink } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

const EventPopup = () => {
  const [show, setShow] = useState(false);

  const events = [
    {
      title: "Free Health Check-Up",
      date: "March 15, 2025 - 9 AM",
      location: "Community Center, Medway",
      link: "/events",
      image: IMAGES.image_1,
    },
    {
      title: "Parenting Workshop",
      date: "April 10, 2025 - 2 PM",
      location: "Local Library, London ",
      link: "/events",
      image: IMAGES.image_2,
    },
    {
      title: "Support for Parents in Need",
      date: "Every Saturday, 10 AM - 12 Noon",
      location: "Online Event",
      link: "/events",
      image: IMAGES.image_3,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 50000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>📢 Upcoming Events</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Carousel interval={5000} indicators={false}>
          {events.map((event, index) => (
            <Carousel.Item key={index}>
              <img
                src={event.image}
                className="d-block w-100"
                alt={event.title}
                style={{ maxHeight: "300px" }}
              />
              <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded">
                <h5>{event.title}</h5>
                <p>
                  <FcCalendar className="me-1" /> {event.date}
                </p>
                <p>
                  <MdLocationPin className="me-1" />
                  {event.location}
                </p>
                <p>
                  <Button
                    className="btn btn-success"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiLink /> Learn More
                  </Button>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          <LiaTimesSolid /> Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventPopup;
