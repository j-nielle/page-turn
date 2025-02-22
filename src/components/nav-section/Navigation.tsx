import React from "react";
import NavLink from "./NavLink";

export default function Navigation() {
  return (
    <nav className="px-5 mobile-l:px-10 py-3.5 h-full bg-indigo-600">
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          linkText="bookish."
          className="font-bold text-xl text-white"
        />
        <div className="flex space-x-5 items-center justify-end">
          <NavLink
            to="/dashboard"
            linkText="Dashboard"
            className="text-black bg-white px-2 rounded py-1 uppercase"
          />
          <NavLink to="/login" linkText="Login" className="text-white" />
        </div>
      </div>
    </nav>
  );
}
