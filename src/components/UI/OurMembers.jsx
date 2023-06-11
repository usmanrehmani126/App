import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import "../../styles/our-memeber.css";
const OurMembers = () => {
  const OUR__MEMBERS = [
    {
      name: "Waqas",
      experience: "6 years of experience",
      fbUrl: "#",
      instUrl: "#",
      twitUrl: "#",
      linkedinUrl: "#",
      imgUrl: ava01,
    },

    {
      name: "Hubba Jameel",
      experience: "3.5 years of experience",
      fbUrl: "#",
      instUrl: "#",
      twitUrl: "#",
      linkedinUrl: "#",
      imgUrl: ava02,
    },

    {
      name: "Hilton King",
      experience: "2 years of experience",
      fbUrl: "#",
      instUrl: "#",
      twitUrl: "#",
      linkedinUrl: "#",
      imgUrl: ava04,
    },

    {
      name: "Jhon Doe",
      experience: "3 years of experience",
      fbUrl: "#",
      instUrl: "#",
      twitUrl: "#",
      linkedinUrl: "#",
      imgUrl: ava03,
    },
  ];

  return (
    <>
      {OUR__MEMBERS.map((member, index) => (
        <Col key={index} lg="3" md="3" sm="4" xs="6" className="mb-4">
          <div className="single_member">
            <div className="single_member-img">
              <img src={member.imgUrl} className="w-100 rounded-1" alt="" />
              <div className="single_member-soical d-flex align-items-center gap-3 justify-content-center">
                <Link>
                  <i class="ri-facebook-fill"></i>
                </Link>
                <Link>
                  <i class="ri-twitter-line"></i>
                </Link>
                <Link>
                  <i class="ri-instagram-fill"></i>
                </Link>
                <Link>
                  <i class="ri-linkedin-fill"></i>
                </Link>
              </div>
            </div>
            <h6 className="text-center mb-0 mt-3">{member.name}</h6>
            <p className="section_description text-center text-dark">
              {member.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
