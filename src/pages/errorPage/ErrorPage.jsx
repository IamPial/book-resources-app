import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="text-center max-w-md w-full">
        {/* Big Code */}
        <h1 className="text-7xl font-bold  mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">Page not found</h2>

        {/* Description */}
        <p className=" mb-6">
          The page you are looking for doesn’t exist or an error occurred.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-5 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
