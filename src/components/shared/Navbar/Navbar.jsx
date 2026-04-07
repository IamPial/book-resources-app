import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold text-sm  md:text-lg opacity-80  ${isActive ? " border border-[#23BE0A]  text-[#23BE0A] " : " "}}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `font-semibold text-sm  md:text-lg opacity-80   ${isActive ? " border border-[#23BE0A]  text-[#23BE0A] " : " "}}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/page-read"
          className={({ isActive }) =>
            `font-semibold text-sm  md:text-lg opacity-80   ${isActive ? " border border-[#23BE0A]  text-[#23BE0A] " : " "}}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm py-2  sticky top-0 z-1">
      <div className="navbar container mx-auto">
        <div className="navbar-start gap-4 lg:gap-0">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {links}
            </ul>
          </div>
          <a className="text-[28px] font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  opacity-80 space-x-2">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="btn bg-[#23BE0A] rounded-lg font-semibold text-lg text-white">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] rounded-lg font-semibold text-lg text-white ">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
