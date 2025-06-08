import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming Button is for potential CTA
import { LogIn, UserPlus, LayoutDashboard } from "lucide-react"; // Added icons

const Navbar: React.FC = () => {
  // Placeholder for authentication status
  // const isAuthenticated = !!localStorage.getItem("authToken");
  const isAuthenticated = true;

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-700 flex items-center"
        >
          <img
            src="/logo.png"
            alt="CVision Logo"
            className="h-10 w-auto mr-2"
          />
          CVision
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          {isAuthenticated ? (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                }`
              }
            >
              <LayoutDashboard size={18} className="mr-1 md:mr-2" />
              Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                  }`
                }
              >
                <LogIn size={18} className="mr-1 md:mr-2" />
                Login
              </NavLink>
              <Button
                asChild
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-['Rubik'] font-medium"
              >
                <Link to="/register" className="flex items-center">
                  <UserPlus size={18} className="mr-1 md:mr-2" />
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
