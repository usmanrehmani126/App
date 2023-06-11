import { motion } from "framer-motion";
import React from "react";
import { Col } from "reactstrap";
import servicedata from "../../assets/data/serviceData";
import "../../styles/service-list.css";
const ServiceList = () => {
  return (
    <>
      {servicedata.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4 " md="4" sm='6' className="mb-3">
    <motion.div whileHover={{scale:1.1}} className="service_item bg-light p-2">
      <span className="mb-3">
        <i class={item.icon} />
      </span>
      <h6>{item.title}</h6>
      <p>{item.desc}</p>
    </motion.div>
  </Col>
);
export default ServiceList;
