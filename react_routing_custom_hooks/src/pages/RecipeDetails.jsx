import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const params = useParams();
  const { id } = params;
  console.log(params);
  return <div>RecipeDetails {id}</div>;
}

export default RecipeDetails;
