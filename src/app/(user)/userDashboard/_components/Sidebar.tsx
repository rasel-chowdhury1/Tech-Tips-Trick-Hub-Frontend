"use client";
import { useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import { TUser } from "@/src/types";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Icon for menu toggle

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar collapse in mobile
  const user = useAppSelector(useCurrentUser) as TUser;

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dark:bg-dark bg-secondary-700">
      {/* Mobile Menu Toggle Button */}

      <button
        className={`block lg:hidden p-2 focus:outline-none focus:bg-gray-200 ${isOpen ? "hidden" : "block"}`}
        onClick={toggleSidebar}
      >
        <FiMenu size={24} />
      </button>
      {/* Sidebar */}
      <div
        className={`fixed lg:static lg:block w-52 h-full bg-gray-800 text-white lg:translate-x-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="block lg:hidden p-2 focus:outline-none focus:bg-gray-200"
          onClick={toggleSidebar}
        >
          <FiMenu size={24} />
        </button>
        {/* Sidebar content */}
        <div className="p-5">
          <h2 className="text-2xl font-semibold mb-5 text-center text-orange-400">{user?.name || "Admin"}</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/userDashboard" className="block py-2 hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/userDashboard/myPost"
                className="block py-2 hover:bg-gray-700"
              >
                My Post
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block py-2 hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 hover:bg-gray-700">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
