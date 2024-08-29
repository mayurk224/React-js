import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useWindowResize from "../hooks/useWindowResize";

function RecipeList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  const location = useLocation();
  const windowSize = useWindowResize();
  if (loading) return <h1>Fetching Recipe ! Please wait</h1>;
  console.log(location);
  return (
    <div>
      <h2>Recipe List</h2>
      <h3>
        Current window width {windowSize.width} and height {windowSize.height}
      </h3>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div>
                <img src={recipeItem?.image} alt="" srcset="" />
                <label htmlFor={recipeItem?.name}>{recipeItem.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default RecipeList;
