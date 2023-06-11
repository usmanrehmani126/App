import React from "react";
import {
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  NavLink,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
const quickLinks = [
  { path: "/about", display: "About" },
  { path: "/blog", display: "Blog" },
  { path: "/cars", display: "Car Listing" },
  { path: "#", display: "Privacy Policy" },
  { path: "/contact", display: "Contact" },
];
const Footer = () => {
  const date=new  Date()
  const year=date.getFullYear()
  return (
    <footer className="footer">
    <Container>
      <Row>
        <Col lg="4" md="6" sm="12">
          <div className="logo footer_logo mt-4">
            <h1>
              <Link to="/home" className="d-flex align-items-center gap-2">
                <i class="ri-car-line"></i>
                <span>
                  Rent Car <br /> Service
                </span>
              </Link>
            </h1>
          </div>
          <p className="logo_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            molestiae perspiciatis autem aspernatur architecto modi?
          </p>
        </Col>
        <Col lg="3" md="3" sm="6">
          <div className="mb-4">
            <h5 className="footer_link_title mt-4">Quick Links</h5>
            <ListGroup>
              {quickLinks.map((item, index) => (
                <ListGroupItem key={index} className="p-0 mt-3 border-0 quick_links">
                  <Link to={item.path}>{item.display} </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Col>
        <Col lg="3" md="3" sm="6">
          <div className="mb-4">
            <h5 className="footer_link_title mt-4 mb-4">Head Office</h5>
            <p className="office_info">Phone: +932342526</p>
            <p className="office_info">Email: usmanr@gmail.com</p>
            <p className="office_info">Office Time: 10am - 7pm</p>
          </div>
        </Col>
        <Col lg="3" md="4">
          <div className="mb-4">
            <h5 className="footer-link-title">Newsletter</h5>
            <p className="section_description">Subscribe Our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Email Us" />
              <span>
                <i class="ri-send-plane-fill"></i>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='12'>
          <div className="footer_bottom ">
            <p className="section_description d-flex align-items-center pt-3 justify-content-center"><i class="ri-copyleft-line"></i>
            Copyright {year}, Developed by UsMaN.All right reserved
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </footer>
  );
};

export default Footer;
