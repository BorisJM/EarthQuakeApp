import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coords: [],
  isLoading: false,
  userLocation: [],
  count: 0,
  earthquakes: {},
  earthquakesAll: {},
  isAuth: false,
  currentDetails: {},
  isOpen: false,
  photoIndex: 0,
  selectedOption: "all",
};

const earthquakeReducer = createSlice({
  name: "earthquakeReducer",
  initialState,
  reducers: {
    fetchData(state, action) {
      state.coords = action.payload.coordsData;
      state.isLoading = false;
      state.earthquakes = action.payload.data;
      state.earthquakesAll = action.payload.data;
      state.count = action.payload.count;
    },
    Loading(state) {
      state.isLoading = true;
      state.isAuth = true;
    },
    showDetails(state, action) {
      state.currentDetails = action.payload;
    },

    showGallery(state, action) {
      state.isOpen = action.payload.boolean;
      state.photoIndex = action.payload.index;
    },

    selectOption(state, action) {
      state.earthquakes = { features: action.payload };
    },
  },
});

export function getCoords() {
  return async function (dispatch) {
    dispatch({ type: "earthquakeReducer/Loading" });
    const startTime = new Date(new Date().setDate(new Date().getDate() - 1))
      .toJSON()
      .slice(0, 10);
    const endTime = new Date().toJSON().slice(0, 10);
    const res = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=${endTime}`
    );
    const data = await res.json();
    const { count } = data.metadata;
    const coordsData = data.features.map((el) => el.geometry.coordinates);
    if(!res.ok) throw new Error("Unfortunately we couldn't upload the data. Please try again...")
    dispatch({
      type: "earthquakeReducer/fetchData",
      payload: { coordsData, count, data },
    });

 
  };
}

export default earthquakeReducer.reducer;
