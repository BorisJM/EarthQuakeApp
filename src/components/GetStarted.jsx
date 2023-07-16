import styles from "./GetStarted.module.css";
import video from "../images-videos/earth.mp4";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCoords } from "./earthquakeReducer";
import NavBar from "./NavBar";
function GetStarted() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate("app");
    dispatch(getCoords());
  }

  return (
    <div className={styles.container}>
      <NavBar />
      <video className={styles.backgroundVideo} autoPlay muted loop>
        <source src={video} />
      </video>
      <div className={styles.introContainer}>
        <h1 className={styles.heading}>Welcome to EarthQuake App</h1>

        <button className={styles.btn} onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
