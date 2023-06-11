import React from "react";

import "../../styles/testomonial.css";
import ava from "../../assets/all-images/ava-1.jpg";
import ava1 from "../../assets/all-images/ava-2.jpg";
import ava2 from "../../assets/all-images/ava-3.jpg";
import ava3 from "../../assets/all-images/ava-4.jpg";
import Slider from "react-slick";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial px-3 py-4">
        <p className="section_description text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id
          tempora reiciendis aliquid doloribus dolorum excepturi magni animi.
          Voluptate, illum tempora perspiciatis explicabo placeat earum ullam
          eius deleniti doloremque saepe!
        </p>
        <div className="mt-3 d-flex align-items-center gap-3">
          <img src={ava} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Usama</h6>
            <p className="section_description  text-secondary">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial px-3 py-4">
        <p className="section_description text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id
          tempora reiciendis aliquid doloribus dolorum excepturi magni animi.
          Voluptate, illum tempora perspiciatis explicabo placeat earum ullam
          eius deleniti doloremque saepe!
        </p>
        <div className="mt-3 d-flex align-items-center gap-3">
          <img src={ava2} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Waqas</h6>
            <p className="section_description  text-secondary">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial px-3 py-4">
        <p className="section_description text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id
          tempora reiciendis aliquid doloribus dolorum excepturi magni animi.
          Voluptate, illum tempora perspiciatis explicabo placeat earum ullam
          eius deleniti doloremque saepe!
        </p>
        <div className="mt-3 d-flex align-items-center gap-3">
          <img src={ava3} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Hubba</h6>
            <p className="section_description  text-secondary">Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial px-3 py-4">
        <p className="section_description text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id
          tempora reiciendis aliquid doloribus dolorum excepturi magni animi.
          Voluptate, illum tempora perspiciatis explicabo placeat earum ullam
          eius deleniti doloremque saepe!
        </p>
        <div className="mt-3 d-flex align-items-center gap-3">
          <img src={ava1} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Noor</h6>
            <p className="section_description  text-secondary">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
