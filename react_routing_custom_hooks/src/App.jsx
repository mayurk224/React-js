import React from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import CommentsList from "./pages/CommentsList";
import RecipeDetails from "./pages/RecipeDetails";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/layout/Layout";
import ReactHookForm from "./pages/ReactHookForm";
import Hooks from "./pages/Hooks";
import UseMemoHook from "./pages/UseMemoHook";
import UseCallback from "./pages/UseCallback";
import ReactQuery from "./pages/ReactQuery";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe-list",
          element: <RecipeList />,
        },
        {
          path: "comments-list",
          element: <CommentsList />,
        },
        {
          path: "recipe-list/:id",
          element: <RecipeDetails />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/reactHook",
      element: <ReactHookForm />,
    },
    {
      path: "/Hooks",
      element: <Hooks />,
    },
    {
      path: "/memo",
      element: <UseMemoHook />,
    },
    {
      path: "/callback",
      element: <UseCallback />,
    },
    {
      path: "/react-query",
      element: <ReactQuery />,
    },
  ]);
  return element;
}
function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1>App</h1> */}
      {/* <div>
        <Link to={"/home/recipe-list"}>ALternative way</Link>
      </div>
      <button onClick={() => navigate("/home/recipe-list")}>
        Navigate to Recipe Page
      </button>
      <button onClick={() => navigate("/home/comments-list")}>
        Navigate to comments Page
      </button> */}
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
      <CustomRoutes />
    </div>
  );
}

export default App;
