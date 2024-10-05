import { FaCog, FaHome, FaUser } from "react-icons/fa";
import { MdOutlinePayments, MdPostAdd } from "react-icons/md";

export const userLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "My Post", path: "/userDashboard/my-post", icon: MdPostAdd },
  { name: "Settings", path: "/userDashboard/settings", icon: FaCog },
  { name: "Profile", path: "/userDashboard/profile", icon: FaUser },
];

export const AdminLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Manage Users", path: "/adminDashboard/manage-users", icon: FaUser },
  { name: "Site Settings", path: "/adminDashboard/settings", icon: FaCog },
  {
    name: "Payment History",
    path: "/adminDashboard/payment-history",
    icon: MdOutlinePayments,
  },
];
