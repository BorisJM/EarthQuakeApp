import styles from "./NavBar.module.css";
import logo from "../images-videos/pngegg.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link to={"/"}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="logo" />{" "}
          <span>EarthQuake App</span>
        </div>
      </Link>

      <Link to={"about"}>
        <p className={styles.about}>About us</p>
      </Link>
    </nav>
  );
}

export default NavBar;
