import React from "react";
import { Col, Container, Row } from "reactstrap";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItems";
const CartListing = () => {
  return (
    <Title title="Cars">
      <CommonSection title="Cars Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center  gap-3 mb-4">
                <span className="d-flex align-items-center  gap-2">
                  <i class="ri-sort-asc"></i>Sort By
                </span>
                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to low</option>
                </select>
              </div>
            </Col>
            {carData.map((item, index) => (
              <>
                <CarItem item={item} key={index} />
              </>
            ))}
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default CartListing;
