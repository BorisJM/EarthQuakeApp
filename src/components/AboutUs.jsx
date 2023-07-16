import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import MoreAboutUs from "./MoreAboutUs";
import logo from "../images-videos/pngegg.png";

function AboutUs() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to={"/"}>
            <div>
              <img className={styles.logo} src={logo} alt="logo" />{" "}
              <span>EarthQuake App</span>
            </div>
          </Link>
        </div>
        <div>
          <div className={styles.intro}>
            <h1>Who We Are?</h1>
            <p>
              Created by an act of Congress in 1879, the USGS provides science
              for a changing world, which reflects and responds to society’s
              continuously evolving needs. As the science arm of the Department
              of the Interior, the USGS brings an array of earth, water,
              biological, and mapping data and expertise to bear in support of
              decision-making on environmental, resource, and public safety
              issues.
            </p>
          </div>
          <MoreAboutUs />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
