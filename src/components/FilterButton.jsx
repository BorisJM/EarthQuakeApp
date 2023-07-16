import Select from "react-select";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import FilterIcon from "@iconscout/react-unicons/icons/uil-filter";

function Filter() {
  const dispatch = useDispatch();
  const { features } = useSelector((state) => state.earthquake.earthquakes);
  const { earthquakesAll } = useSelector((state) => state.earthquake);
  const options = [
    { value: "all", label: "All" },
    { value: "largest", label: "Largest Magnitude First" },
    { value: "smallest", label: "Smallest Magnitude First" },
  ];

  function handleSelect(inputValue) {
    const arrayCopy = [...features];
    const sortedArray = arrayCopy.sort((a, b) =>
      a?.properties?.mag < b?.properties?.mag
        ? -1
        : a?.properties?.mag > b?.properties?.mag
        ? 1
        : 0
    );

    if (inputValue.value === "all") {
      dispatch({
        type: `earthquakeReducer/selectOption`,
        payload: earthquakesAll.features,
      });
    }
    if (inputValue.value === "largest") {
      dispatch({
        type: `earthquakeReducer/selectOption`,
        payload: sortedArray.reverse(),
      });
    }

    if (inputValue.value === "smallest") {
      dispatch({
        type: `earthquakeReducer/selectOption`,
        payload: sortedArray,
      });
    }
  }

  return (
    <div className={styles.selectContainer}>
      <Select
        options={options}
        onChange={handleSelect}
        className={styles.select}
        placeholder={
          <div className={styles.selectPlaceholder}>
            Filter by <FilterIcon />
          </div>
        }
      />
    </div>
  );
}

export default Filter;
