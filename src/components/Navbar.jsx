import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white border-b drop-shadow-sm flex items-center">
      <div className="w-11/12 max-w-5xl mx-auto flex items-center justify-between px-4">
        <NavLink to="/" className="active">
          <h1 className="text-2xl text-teal-600 font-black">Blog News</h1>
        </NavLink>
        <div className="space-x-6">
          <NavLink to="/">
            <button className="text-lg text-black font-medium">Posts</button>
          </NavLink>
          <NavLink to="/utilisateurs">
            <button className="text-lg text-black font-medium">Utilisateurs</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
