import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddQueries from "../pages/AddQueries";
import Queries from "../pages/Queries";
import MyQueries from "../pages/MyQueries";
import Recommendations from "../pages/Recommendations";
import MyRecommendations from "../pages/MyRecommendations";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateQuery from "../pages/UpdateQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add-queries",
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "queries",
        element: <Queries></Queries>,
      },
      {
        path: "my-queries",
        element: <MyQueries></MyQueries>,
      },
      {
        path: "recommendations",
        element: <Recommendations></Recommendations>,
      },
      {
        path: "my-recommendations",
        element: <MyRecommendations></MyRecommendations>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "update/:id",
        element: <UpdateQuery></UpdateQuery>,
      },
    ],
  },
]);
export default router;
