import React from "react";
import styled from "styled-components";
import EventPopup from "../Components/EventPopupPage";

const ProgramsContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #28a745;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
`;

const Section = styled.div`
  margin: 40px 0;
  text-align: left;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
  &:before {
    content: "✔";
    color: #28a745;
    position: absolute;
    left: 0;
  }
`;

const ContactSection = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const Button = styled.a`
  display: inline-block;
  background: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 10px;
  &:hover {
    background: #218838;
  }
`;

const Test = () => {
  return (
    <>
      <EventPopup />
      <ProgramsContainer>
        <Title>Programs & Services</Title>
        <Subtitle>Support for Parents in Need</Subtitle>
        <p>
          Are You Pregnant or Have Young Children? Struggling Financially? We’re
          Here to Help!
        </p>

        <Section>
          <h3>Healthcare Support</h3>
          <List>
            <ListItem>
              Access to affordable prenatal and pediatric care
            </ListItem>
            <ListItem>Free health check-ups and vaccinations</ListItem>
            <ListItem>Nutritional support and advice</ListItem>
          </List>
        </Section>

        <Section>
          <h3>Emotional & Mental Health</h3>
          <List>
            <ListItem>Stress and anxiety management workshops</ListItem>
            <ListItem>Access to counseling and mental health services</ListItem>
            <ListItem>Parenting support groups</ListItem>
          </List>
        </Section>

        <ContactSection>
          <h3>Join Us Today</h3>
          <ContactInfo>
            <strong>Date & Time:</strong> Every Saturday, 10 AM - 12 Noon
          </ContactInfo>
          <ContactInfo>
            <strong>Location:</strong> Online
          </ContactInfo>
          <ContactInfo>
            <strong>Phone:</strong> 07460716648
          </ContactInfo>
          <ContactInfo>
            <strong>Email:</strong> kiddies.mecareroot@yahoo.com
          </ContactInfo>
          <Button
            href="https://www.eventbrite.com/e/support-for-parents-in-need-tickets-943741465127"
            target="_blank"
          >
            Register Here
          </Button>
        </ContactSection>
      </ProgramsContainer>
    </>
  );
};

export default Test;
