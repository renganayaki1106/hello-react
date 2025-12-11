import React from "react";
import { useParams, useLocation } from "react-router-dom";

const DynamicRoute = () => {
  const { id } = useParams();
  const {state} = useLocation();
  console.log(useLocation(), "use locations");
  return (
    <div>
      <h1>Dynamic Route</h1>
      <p>Dynamic Route: {id}</p>
      <p>From Navigate : {state?.userId}</p>
    </div>
  );
};

export default DynamicRoute;
