import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../styles/header.css";
import { AiOutlineClose } from 'react-icons/ai';
const navLinkComponents = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Cars" },
  { path: "/blog", display: "Blog" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");
  return (
    <header className="header">
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top-left">
                <span>Need Help?</span>
                <span className="header_top_help">
                  <i class="ri-phone-fill"></i>+93087287168
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center">
                  <i class="ri-login-circle-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center ">
                  <i class="ri-user-fill"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header_middle">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="4">
              <div className="logo ">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>{" "}
                    <span>
                      Rent Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header_location_content">
                  <h4>Pakistan</h4>
                  <h6>BWN City, Pakistan</h6>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-map-pin-time-line"></i>
                </span>
                <div className="header_location_content">
                  <h4>Sunday to Friday</h4>
                  <h6>10:00 am To 7:00 am</h6>
                </div>
              </div>
            </Col>
            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header_btn">
                <Link to="/contact">
                  <i class="ri-phone-fill"></i>
                  Request a Call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu" onClick={toggleMenu}>
              <i class="ri-menu-3-line"></i>
              {/* <span  className="menu_close text-light">
              <AiOutlineClose />
              </span> */}
            </span>
         
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinkComponents.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav_Right">
              <div className="search_box">
                <input type="search" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
