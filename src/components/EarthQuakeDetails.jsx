import { useSelector } from "react-redux";
import styles from "./EarthQuakeDetails.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EarthQuakeDetails() {
  const navigate = useNavigate();
  const { currentDetails } = useSelector((state) => state.earthquake);
  useEffect(
    function () {
      if (Object.keys(currentDetails).length === 0) navigate("/");
    },
    [currentDetails, navigate]
  );

  const lat = currentDetails?.geometry?.coordinates[0].toFixed(2);
  const lng = currentDetails?.geometry?.coordinates[1].toFixed(2);
  const depth = currentDetails?.geometry?.coordinates[2].toFixed(2);
  const title = currentDetails?.properties?.title;

  function handleClose() {
    navigate("/app");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.location}>
        <span>Location: </span>
        <span>
          {lat} lat, {lng} lng
        </span>
      </div>
      <div className={styles.depth}>
        <span>Depth: </span>
        <span>{depth} km</span>
      </div>
      <button className={styles.btnClose} onClick={handleClose}>
        close
      </button>
    </div>
  );
}

export default EarthQuakeDetails;
