import React, { Fragment } from "react";
import OurRoutes from "../../routers/Routes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <OurRoutes />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
