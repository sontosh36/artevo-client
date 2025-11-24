import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import ExploreArtwork from "./../Pages/ExploreArtwork";
import AddArtwork from "../Pages/AddArtwork";
import MyGallery from "../Pages/MyGallery";
import MyFavorite from "../Pages/MyFavorite";
import NotFoundError from "../Pages/NotFoundError";
import LogIn from './../Pages/LogIn';
import Register from './../Pages/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "exploreArtwork",
        Component: ExploreArtwork,
      },
      {
        path: "addArtwork",
        element: <AddArtwork />
      },
      {
        path: "myGallery",
        element: <MyGallery />
      },
      {
        path: "myFavorites",
        element: <MyFavorite />
      },
      {
        path: 'login',
        Component: LogIn,
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: "*",
        Component: NotFoundError,
      },
    ],
  },
]);
