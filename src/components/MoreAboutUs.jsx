import styles from "./MoreAboutUs.module.css";
import Disaster from "../images-videos/Disaster.jpg";
import Sat from "../images-videos/Sat.jpg";
import Workers from "../images-videos/Workers.jpg";
import Gallery from "./Gallery";
import { useDispatch } from "react-redux";

function MoreAboutUs() {
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch({
      type: "earthquakeReducer/showGallery",
      payload: {
        boolean: true,
        index: +e.target.dataset.index,
      },
    });
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.infoContainer}>
          <h2>Our Vision</h2>
          <img
            data-index="0"
            onClick={handleClick}
            src={Sat}
            alt="Sattelitate in space"
          />
          <p>
            Lead the Nation in 21st-century integrated research, assessments,
            and prediction of natural resources and processes to meet society’s
            needs.
          </p>
        </div>
        <div className={styles.infoContainer}>
          <h2>Our Misson</h2>
          <img
            data-index="1"
            onClick={handleClick}
            src={Workers}
            alt="Our employees"
          />
          <p>
            The USGS monitors, analyzes, and predicts current and evolving
            Earth-system interactions and delivers actionable information at
            scales and timeframes relevant to decision makers.
          </p>
        </div>
        <div className={styles.infoContainer}>
          <h2>What We Do</h2>
          <img
            data-index="2"
            onClick={handleClick}
            src={Disaster}
            alt="Natural hazard"
          />
          <p>
            The USGS is a primary Federal source of science-based information on
            ecosystems, land use, energy and mineral resources, natural hazards,
            water use and availability, and updated maps and images of the
            Earth’s features available to the public.
          </p>
        </div>
      </section>
      <Gallery />
    </>
  );
}

export default MoreAboutUs;
