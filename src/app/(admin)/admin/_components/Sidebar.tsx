"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // Icon for menu toggle

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar collapse in mobile

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
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
          <h2 className="text-xl font-semibold mb-5">Sidebar Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/admin" className="block py-2 hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="block py-2 hover:bg-gray-700"
              >
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                href="/admin/blogs"
                className="block py-2 hover:bg-gray-700"
              >
                Manage Blogs
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
