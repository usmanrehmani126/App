import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../styles/hero-slider.css";
const HeroSlider = () => {
  const setting = {
    fade: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    pauseOnHover: false,
  };
  return (
    <Slider {...setting} className="hero_slider">
      <div className="slider_item slider_item-01 mt-0">
        <Container>
          <div className="slider_Content">
            <h5 className="text-light mb-3">For Rent $70 Per Day</h5>
            <h1 className="text-light mb-3">Reserve Now and Get 50% Off</h1>
            <button className=" btn-reserve mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider_item slider_item-02 mt-0">
        <Container>
          <div className="slider_Content">
            <h5 className="text-light mb-3">For Rent $70 Per Day</h5>
            <h1 className="text-light mb-3">Reserve Now and Get 50% Off</h1>
            <button className=" btn-reserve mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider_item slider_item-03 mt-0">
        <Container>
          <div className="slider_Content">
            <h5 className="text-light mb-3">For Rent $70 Per Day</h5>
            <h1 className="text-light mb-3">Reserve Now and Get 50% Off</h1>
            <button className=" btn-reserve  mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
