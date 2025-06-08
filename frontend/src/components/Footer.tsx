import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react"; // Example social icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 py-12 mt-auto border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="CVision Logo" className="h-10 w-auto" />
              <h3 className="text-lg font-semibold text-indigo-700">CVision</h3>
            </div>
            <p className="text-sm">
              Revolutionizing the hiring process with AI-powered CV analysis.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-indigo-700 transition-colors"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-indigo-700 transition-colors"
                >
                  Sign Up
                </Link>
              </li>
              {/* Add other relevant links, e.g., About Us, Pricing, if applicable */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-700 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-700 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CVision. All rights reserved.</p>
          <p className="mt-1">
            Designed with <span className="text-indigo-600">&hearts;</span> by
            Your Team/Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
