import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RouteProtecter({ children }) {
  const { isAuth } = useSelector((store) => store.earthquake);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuth) navigate("/");
    },
    [isAuth, navigate]
  );

  return <div>{children}</div>;
}

export default RouteProtecter;
