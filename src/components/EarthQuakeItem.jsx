import { useDispatch, useSelector } from "react-redux";
import styles from "./EarthQuakeItem.module.css";
import { Link, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function EarthQuakeItem({ index }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { features } = useSelector((state) => state.earthquake.earthquakes);
  const currentFeature = features[index];
  const mag = currentFeature.properties.mag.toFixed(2);
  const place = currentFeature.properties.place;
  const coordinatesItem = currentFeature.geometry.coordinates[2].toFixed(2);
  function useClick() {
    dispatch({
      type: "earthquakeReducer/showDetails",
      payload: currentFeature,
    });
  }

  return (
    <Link className={styles.link} to={`${currentFeature.id}`}>
      <li
        onClick={useClick}
        className={`${styles.item} ${
          id === currentFeature.id ? styles.active : ""
        }`}
      >
        <span className={`${styles.mag} ${mag > 3 ? styles.magRed : ""}`}>
          {mag}
        </span>
        <p className={styles.place}>
          {place ? place : "Unable to get location 🤔"}
        </p>
        <span className={styles.coords}>{coordinatesItem} km</span>
      </li>
    </Link>
  );
}

export default EarthQuakeItem;
