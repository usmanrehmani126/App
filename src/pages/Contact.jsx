import React from "react";
import "../styles/contact.css";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
const Contact = () => {
  const preventRefresh = (e) => {
    e.preventDefault();
  };
  return (
    <Title title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <h2 className="fw-bold text-center mb-1">Get In Touch</h2>
            <h5 className="text-center mb-4">
              Need Help Don't Worry, Contact Us
            </h5>
            <Col lg="6" md="6" className="text-center">
              <Form onSubmit={preventRefresh}>
                <FormGroup className="contact-form">
                  <Input type="text" placeholder="Your Name" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup className="contact-form">
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </FormGroup>
                <button className="butt">Send</button>
              </Form>
            </Col>
            <Col lg="6" md="6" className="py-5">
              <h4 className="text-center">Directly Join Us </h4>
              <h6 className="text-center">Our Social Links</h6>
              <div className="d-flex align-items-center gap-3 py-5 justify-content-center soical_gap">
                <i class="ri-instagram-fill"></i>
                <i class="ri-facebook-circle-fill"></i>
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-whatsapp-fill"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default Contact;
