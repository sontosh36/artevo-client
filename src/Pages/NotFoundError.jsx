import React from "react";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router";

const NotFoundError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300">
      <div className="text-center p-10 bg-white shadow-lg rounded-2xl w-11/12 md:w-5/12 lg:w-4/12">
        
        <div className="flex justify-center mb-4">
          <BiSolidError size={80} className="text-red-500" />
        </div>

        <h2 className="text-5xl font-bold text-gray-800">404</h2>
        <h6 className="text-2xl font-semibold text-gray-700 mt-2">Page Not Found</h6>

        <p className="text-gray-500 mt-3">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundError;
