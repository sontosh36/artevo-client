import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const { users, signOutUser } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        setOpen(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome back, Log Out Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const handleClickOutSide = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
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
        </>
      )}
    </>
  );
  return (
    <div className=" bg-base-100 sticky top-0 z-20 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
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
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl ">Artevo</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {users ? (
            <div className="flex items-center gap-3 cursor-pointer">
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                checked={theme === "dark"}
                className="toggle"
              />
              <div
                className="relative"
                ref={dropdownRef}
                onClick={() => setOpen(!open)}
              >
                {/* Avatar */}
                <img
                  src={users?.photoURL}
                  alt={users?.displayName}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer border-2 border-blue-500"
                />
                {/* dropdown */}
                <div
                  className={`absolute p-2 right-0 w-50 md:w-58 bg-base-300 shadow-lg rounded-md z-50  ${open ? "opacity-100 visible " : "opacity-0 invisible "}`}
                >
                  {/* display name */}
                  <div className="px-2 py-2 border-b border-base-100">
                    <p className="text-sm font-medium text-base-400">
                      {users?.displayName || "User"}
                    </p>
                  </div>
                  {/* email*/}
                  <div className="px-2 py-2 w-full border-b border-base-100">
                    <p className="text-sm font-medium text-base-400">
                      {users?.email || "example@gmail.com"}
                    </p>
                  </div>
                  {/* my favorite page */}

                  <Link
                    to={"/myFavorites"}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-2 text-sm font-medium text-base-400"
                  >
                    My Favorite
                  </Link>
                  {/* log out */}
                  <button
                    onClick={handleLogOut}
                    className="w-full flex justify-center gap-2 px-4 py-4 text-sm text-white bg-blue-500 hover:bg-blue-400 rounded-lg"
                  >
                    Log Out
                  </button>
                </div>
              </div>
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
    </div>
  );
};

export default NavBar;
