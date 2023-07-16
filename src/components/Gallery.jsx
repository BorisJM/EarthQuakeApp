import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Disaster from "../images-videos/Disaster.jpg";
import Sat from "../images-videos/Sat.jpg";
import Workers from "../images-videos/Workers.jpg";
import { useDispatch, useSelector } from "react-redux";
function Gallery() {
  const dispatch = useDispatch();
  const { isOpen, photoIndex } = useSelector((state) => state.earthquake);

  function handleClick() {
    dispatch({ type: "earthquakeReducer/showGallery", payload: false });
  }

  return (
    <>
      <Lightbox
        plugins={[Captions]}
        open={isOpen}
        close={handleClick}
        index={photoIndex}
        slides={[
          {
            src: Sat,
            title: "Our Vision",
            description:
              "Lead the Nation in 21st-century integrated research, assessments, and prediction of natural resources and processes to meet society’s needs.",
          },
          {
            src: Workers,
            title: "Our Mission",
            description:
              "The USGS monitors, analyzes, and predicts current and evolving Earth-system interactions and delivers actionable information at scales and timeframes relevant to decision makers.",
          },
          {
            src: Disaster,
            title: "What We Do",
            description:
              "The USGS is a primary Federal source of science-based information on ecosystems, land use, energy and mineral resources, natural hazards, water use and availability, and updated maps and images of the Earth’s features available to the public.",
          },
        ]}
      />
    </>
  );
}

export default Gallery;
