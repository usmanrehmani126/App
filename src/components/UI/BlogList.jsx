import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import BlogData from "../../assets/data/blogData";
import "../../styles/blog.css";
const BlogList = () => {
  return (
    <>
      {BlogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};
const BlogItem = ({ item }) => {
  const { imgUrl, date, title, author, time, description } = item;
  return (
    <Col lg="4" md="6" sm="12">
      <div className="blog_item  mb-5">
        <img src={imgUrl} className="w-100" alt="" />
        <div className="blog_info p-3">
        {/* to={`/blogs/${title}`} */}
          <Link >{title}</Link>
          <p className="section_description text-secondary mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>
          {/* to={`/blogs/${title}`} */}
          <Link  className="read_more">
            Read More
          </Link>
          <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between ">
            <span className="blog_author">
              <i class="ri-user-line"></i>
              {author}
            </span>
            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1 text-secondary ">
                <i class="ri-calendar-event-fill"></i>
                {date}
              </span>
              <span className="d-flex align-items-center gap-1 text-secondary">
                <i class="ri-time-line"></i>
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
