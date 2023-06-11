import React, { useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import carData from "../assets/data/carData";
import Title from "../components/Title/Title";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();
  const car = carData.find((item) => item.carName === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Title title={car.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={car.imgUrl} alt="" className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car_info">
                {" "}
                <h2>{car.carName}</h2>
                <div className="d-flex align-items-center gap-5 mb-3 mt-3">
                  <h6 className="rent_price fw-bold fs-5">
                    ${car.price}.00 / Day
                  </h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({car.rating} ratings)
                  </span>
                </div>
                <p
                  style={{
                    color: " #7c8a97",
                    fontSize: "0.9rem",
                    lineHeight: " 30px",
                  }}
                >
                  {car.description}
                </p>
                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="d-flex align-items-center gap-1">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {car.model}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <i
                      class="ri-settings-2-fill"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {car.automatic}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <i class="ri-timer-fill" style={{ color: "#f9a826" }}></i>
                    {car.speed}
                  </span>
                </div>
                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className="d-flex align-items-center gap-1">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {car.gps}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {car.seatType}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {car.brand}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="7" className="mt-5">
              <div className="booking_info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
            <Col lg="5" className="mt-5">
              <div className="payment_info mt-5">
                <h5 className="mb-4 fw-bold">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default CarDetails;
