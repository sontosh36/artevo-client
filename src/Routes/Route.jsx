import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import ExploreArtwork from "./../Pages/ExploreArtwork";
import AddArtwork from "../Pages/AddArtwork";
import MyGallery from "../Pages/MyGallery";
import MyFavorite from "../Pages/MyFavorite";
import NotFoundError from "../Pages/NotFoundError";
import LogIn from "./../Pages/LogIn";
import Register from "./../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ArtworkDetails from "../Components/ArtworkDetails";
import UpdateArrtwork from "../Pages/UpdateArrtwork";

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
        loader: () => fetch("https://artevo-server.vercel.app/artworks"),
      },
      {
        path: "addArtwork",
        element: (
          <PrivateRoute>
            <AddArtwork />
          </PrivateRoute>
        ),
      },
      {
        path: "myGallery",
        element: (
          <PrivateRoute>
            <MyGallery />
          </PrivateRoute>
        ),
      },
      {
        path: "myFavorites",
        element: (
          <PrivateRoute>
            <MyFavorite />
          </PrivateRoute>
        ),
      },
      {
        path: "artworkDetails/:id",
        element: (
          <PrivateRoute>
            <ArtworkDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-artwork/:id",
        Component: UpdateArrtwork,
        loader: ({ params }) =>
          fetch(`https://artevo-server.vercel.app/artwork/${params.id}`),
      },
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundError,
  },
]);
