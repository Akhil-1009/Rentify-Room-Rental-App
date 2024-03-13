import React from "react";
import styles from "./our-member.module.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ansImg from "../../images/ansImg.jpg";
import akhilImg from "../../images/akf.jpg";

const OUR__MEMBERS = [
  {
    name: "Akhil Suryawanshi",
    experience: "Web Developer",
    gitUrl: "https://github.com/Akhil-1009",
    ytUrl: "https://www.youtube.com/channel/UCTr67Z9wVEIJfZVHf0J-QTA",
    twitUrl: "#",
    linkedinUrl: "www.linkedin.com/in/akhil-suryawanshi-7b2a57200",
    imgUrl: akhilImg,
  },
  {
    name: "Anshul Pawar",
    experience: "Web Developer",
    gitUrl: "https://github.com/a-pawar",
    ytUrl: "https://www.youtube.com/@anshulpawar5856",
    twitUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/anshul-pawar-b7104a1bb/",
    imgUrl: ansImg,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className={`mb-4`}>
          <div className={styles.single__member}>
            <div className={styles.single__memberimg}>
              <img src={item.imgUrl} alt="" className={`w-100`} />

              <div className={styles.single__membersocial}>
                <Link to={item.gitUrl}>
                  <i class="fa-brands fa-github"></i>
                </Link>
                <Link to={item.linkedinUrl} target={"_blank"}>
                  <i class="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link to={item.ytUrl}>
                  <i class="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;