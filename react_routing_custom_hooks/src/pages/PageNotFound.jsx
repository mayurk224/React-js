import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2>Page doesn't exist</h2>
      <Link to={"/recipe-list"}>Go to Home Page</Link>
    </div>
  );
}

export default PageNotFound;
