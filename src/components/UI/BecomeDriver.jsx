import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../styles/become-driver.css";
import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriver = () => {
  return (
    <section className="become_driver">
      <Container>
        <Row className="">
          <Col lg="6" md="6" sm="12" className="">
            <img src={driverImg} className="w-100" alt="" />
          </Col>
          <Col lg="6" md="6" sm="12" className="mt-3">
            <h2 className="section_title text-white driver_title mb-2">
              Do You Not To Earn With? So Don't Be Late.
            </h2>
            <button className=" become_Driver_btn  mt-4">
              Become a Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriver;
