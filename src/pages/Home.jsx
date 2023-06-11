import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title/Title";
import AboutSection from "../components/UI/AboutSection";
import FindCarForm from "../components/UI/FindCarForm";
import HeroSlider from "../components/UI/HeroSlider";
import ServiceList from "../components/UI/ServiceList";
import carData from "../assets/data/carData";
import CarItems from "../components/UI/CarItems";
import BecomeDriver from "../components/UI/BecomeDriver";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
const Home = () => {
  return (
    <Title title="Home">
      <section className="hero_slider-section p-0">
        <HeroSlider />
        <div className="Hero_form">
          <Container>
            <Row className="form_row">
              <Col lg="4" md="4">
                <div className="find-cars-left  my-2">
                  <h4>Find your best cars here</h4>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <AboutSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4">
              <h6 className="section_subtitle">See our</h6>
              <h2 className="section_title">Popular Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h6 className="section_subtitle">Come with</h6>
              <h2 className="section_title ">Hot Offfers</h2>
            </Col>

            {carData.map((item) => (
              <CarItems item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      <BecomeDriver />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h6 className="section_subtitle text-center">Our Clients Says</h6>
              <h2 className="section_title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h6 className="section_subtitle text-center">
                Explore our blogs
              </h6>
              <h2 className="section_title">Latest Blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default Home;
