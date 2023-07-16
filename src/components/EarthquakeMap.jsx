import styles from "./EarthquakeMap.module.css";
import Loader from "./Loader";
import { MapContainer, TileLayer, CircleMarker, useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import { useNavigate, useParams } from "react-router-dom";

function SetView() {
  const { currentDetails } = useSelector((state) => state.earthquake);
  const map = useMap();
  if (Object.keys(currentDetails).length === 0) return null;
  map.setView([
    currentDetails?.geometry?.coordinates[1],
    currentDetails?.geometry?.coordinates[0],
  ]);

  return null;
}

function EarthquakeMap() {
  const { id } = useParams();
  const { coords, isLoading } = useSelector((state) => state.earthquake);
  const { features } = useSelector((state) => state.earthquake.earthquakes);



  const navigate = useNavigate();
  const dispatch = useDispatch();
  const markerStyle = {
    color: "orange",
    opacity: 1,
  };

  const markerActive = {
    color: "blue",
    opacity: 1,
  };

  if (isLoading) return <Loader />;
  return (
    <div className={styles.mapContainer}>
      <SideBar />
      <MapContainer className={styles.map} center={[34.26, 27.19]} zoom={3}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {coords.map((coordinates, i) => {
          return (
            <CircleMarker
              eventHandlers={{
                click: () => {
                  dispatch({
                    type: "earthquakeReducer/showDetails",
                    payload: features[i],
                  });
                  navigate(`${features[i].id}`);
                },
              }}
              key={features[i].id}
              center={[coordinates[1], coordinates[0]]}
              pathOptions={id === features[i].id ? markerActive : markerStyle}
            ></CircleMarker>
          );
        })}
        <SetView />
      </MapContainer>
    </div>
  );
}

export default EarthquakeMap;
