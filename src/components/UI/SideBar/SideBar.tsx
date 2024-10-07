/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";
import { useState, useEffect, SetStateAction } from "react";
import Link from "next/link";
import { AiOutlineBars } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { Divider } from "@nextui-org/divider";
import { usePathname, useRouter } from "next/navigation";

import SidebarSkeleton from "../Skeleton/SidebarSkeleton";

import { AdminLinks, userLinks } from "./constant";

import { useUser } from "@/src/context/user.provider";
import { logOut } from "@/src/services/AuthServices";
import { protectedRoutes } from "@/src/constant";

const Sidebar = () => {
  const { user, isSetLoading: UserLoading } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [user]);

  const handleLogOut = () => {
    logOut();
    UserLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="h-full relative">
        <div className="bg-[#F7F7F7] w-full text-gray-800 flex justify-between md:hidden">
          <div className="block cursor-pointer p-4 font-bold">iamge</div>
          <button
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <AiOutlineBars className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div
          className={`fixed min-h-screen inset-y-0 left-0 top-0 z-50 w-64 transform bg-default-100 transition-transform lg:static lg:transform-none ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } border-r lg:block`}
        >
          <div className="h-full flex flex-col">
            <div className="rounded-xl p-4">
              <h2 className="text-2xl font-semibold font-sans">
                Gadget Guru Hub
              </h2>
            </div>

            {/* Divider */}
            <Divider className="my-4" />

            {/* Sidebar Links Section */}
            <div className="mt-3 space-y-2 rounded-xl p-2 flex-1">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div>
                    <SidebarSkeleton />
                  </div>
                </div>
              ) : (
                // Render the links once loading is complete
                (user?.role === "user" ? userLinks : AdminLinks).map((link) =>
                  link.path ? (
                    <Link
                      key={link.name}
                      className={`flex items-center p-2 rounded-md font-semibold text-xl ${
                        activeLink === link.name
                          ? "bg-pink-600 text-white"
                          : "hover:bg-pink-400"
                      }`}
                      href={link.path}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      <link.icon className="mr-2 h-5 w-5 text-xl" />
                      <span className="text-xl">{link.name}</span>
                    </Link>
                  ) : null,
                )
              )}
            </div>
          </div>

          {/* Log Out Section */}
          <div className="py-6 absolute w-full bottom-10">
            <Divider className="mb-2 " />
            <div className="flex items-center pl-4 ">
              <span className="mr-2 text-xl">
                <FaSignOutAlt />
              </span>
              <button
                className={`flex items-center p-2 rounded-md font-semibold text-xl  ${
                  activeLink === "Log Out"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-400"
                }`}
                onClick={() => handleLogOut()}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for Small Screens */}
        {isSidebarOpen && (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
