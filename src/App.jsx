import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Loader from "./components/Loader";
import RouteProtecter from "./components/RouteProtecter";
import EarthQuakeDetails from "./components/EarthQuakeDetails";
import AboutUs from "./components/AboutUs";

const GetStarted = lazy(() => import("./components/GetStarted"));
const AppLayout = lazy(() => import("./components/AppLayout"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="about" element={<AboutUs />} />
          <Route
            path="app"
            element={
              <RouteProtecter>
                <AppLayout />
              </RouteProtecter>
            }
          >
            <Route path=":id" element={<EarthQuakeDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
