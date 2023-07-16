import { useSelector } from "react-redux";
import styles from "./SideBar.module.css";
import EarthQuakeItem from "./EarthQuakeItem";
import { Outlet, useNavigate } from "react-router-dom";
import Filter from "./FilterButton";

function SideBar() {
  const { count } = useSelector((state) => state?.earthquake);
  const { features } = useSelector((state) => state.earthquake.earthquakes);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <button className={styles.btn} onClick={handleClick}>
        &larr;
      </button>
      <div className={styles.sidebar}>
        <h1 className={styles.heading}>Results</h1>
        <p className={styles.count}>{count} earthquakes</p>
        <Filter />
        <ul className={styles.list}>
          {features?.map((el, i) => (
            <EarthQuakeItem key={el.id} index={i} />
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default SideBar;
