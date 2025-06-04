import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming Button is for potential CTA
import { LogIn, UserPlus, LayoutDashboard, HomeIcon } from "lucide-react"; // Added icons

const Navbar: React.FC = () => {
  // Placeholder for authentication status
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-primary flex items-center"
        >
          <HomeIcon size={28} className="mr-2" /> {/* Changed to an icon */}
          CV Screener
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-slate-100 text-primary"
                  : "text-slate-700 hover:bg-slate-50 hover:text-primary"
              }`
            }
          >
            Home
          </NavLink>

          {isAuthenticated ? (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-slate-100 text-primary"
                    : "text-slate-700 hover:bg-slate-50 hover:text-primary"
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
                      ? "bg-slate-100 text-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  }`
                }
              >
                <LogIn size={18} className="mr-1 md:mr-2" />
                Login
              </NavLink>
              <Button asChild size="sm">
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
