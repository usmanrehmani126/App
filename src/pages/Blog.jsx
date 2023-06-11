import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Title title="Blogs">
      <CommonSection title="" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default Blog;
