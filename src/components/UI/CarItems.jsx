import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/car-items.css";
import { motion } from "framer-motion";
const CarItems = (props) => {
  const { id, imgUrl, model, carName, automatic, speed, price } = props.item;
  return (
    <Col lg="4" md="6" sm="6">
      <div className="car_items bg-light mb-3">
        <div className="car_img text-center">
          <motion.img
            src={imgUrl}
            whileHover={{ scale: 0.9 }}
            alt=""
            className="w-50  mt-2"
          />
        </div>
        <div className="car_items-content mt-4">
          <h4 className="section_title text-center">{carName}</h4>
          <h6 className="rent_price text-center mt-4">
            {price}.00 <span>/ Day</span>
          </h6>
          <div className="car_item-Info d-flex align-items-center justify-content-around mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i class="ri-settings-3-line"></i> {automatic}
            </span>
            <span className="d-flex align-items-center gap-1">
              <i class="ri-timer-line"></i> {speed}
            </span>
          </div>
          <button className="w-50 car_item_btn car_btn_rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>
          <button className="w-50 car_item_btn car_btn_details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItems;
