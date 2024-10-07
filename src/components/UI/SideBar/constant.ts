import { FaCog, FaHome, FaUser, FaUsers } from "react-icons/fa";
import {
  MdOutlinePayments,
  MdOutlineSignpost,
  MdPostAdd,
} from "react-icons/md";

export const userLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Create Post", path: "/userDashboard/create-post", icon: MdPostAdd },
  { name: "My Post", path: "/userDashboard/my-post", icon: MdOutlineSignpost },
  { name: "Profile", path: "/userDashboard/profile", icon: FaUser },
];

export const AdminLinks = [
  { name: "Home", path: "/", icon: FaHome },
  { name: "Manage Users", path: "/adminDashboard/manage-users", icon: FaUsers },
  { name: "Profile", path: "/adminDashboard/admin-profile", icon: FaUser },
  { name: "Site Settings", path: "/adminDashboard/settings", icon: FaCog },
  {
    name: "Payment History",
    path: "/adminDashboard/payment-history",
    icon: MdOutlinePayments,
  },
];
