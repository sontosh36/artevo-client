import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { TbLogout } from "react-icons/tb";

const NavBar = () => {
  const { users, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn-sm ${isActive ? "text-blue-500 font-bold" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exploreArtwork"
          className={({ isActive }) =>
            `btn-sm ${isActive ? "text-blue-500 font-bold" : ""}`
          }
        >
          Explore Artwork
        </NavLink>
      </li>
      {users && (
        <>
          <li>
            <NavLink
              to="/addArtwork"
              className={({ isActive }) =>
                `btn-sm ${isActive ? "text-blue-500 font-bold" : ""}`
              }
            >
              Add Artwork
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myGallery"
              className={({ isActive }) =>
                `btn-sm ${isActive ? "text-blue-500 font-bold" : ""}`
              }
            >
              My Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myFavorites"
              className={({ isActive }) =>
                `btn-sm ${isActive ? "text-blue-500 font-bold" : ""}`
              }
            >
              My Favorite
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="w-11/12 mx-auto navbar sticky top-0 z-20 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h2 className="font-bold text-2xl">Artevo</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {users ? (
          <div className="flex gap-4 items-center">
            <div
              className="tooltip tooltip-bottom"
              data-tip={users?.displayName || "user"}
            >
              <img
                className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                src={users?.photoURL}
                alt={users?.displayName}
              />
            </div>
            <button
              onClick={handleLogOut}
              className="cursor-pointer text-sm md:text-lg text-white bg-linear-to-r btn-primary px-1 py-1 md:px-3 md:py-3 rounded-md flex gap-1 md:gap-2  items-center"
            >
              LogOut <TbLogout size={26} />{" "}
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to={"/login"}
              className="text-white text-xs md:text-md lg:text-lg bg-blue-500 px-2 md:px-4 py-2 cursor-pointer rounded-md"
            >
              Log In
            </Link>
            <Link
              to={"/register"}
              className="text-white text-xs md:text-md lg:text-lg bg-blue-500 px-2 md:px-4 py-2 cursor-pointer rounded-md"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
