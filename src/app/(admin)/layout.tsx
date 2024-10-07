import { ReactNode } from "react";
import Sidebar from "./admin/_components/Sidebar";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark:bg-dark min-h-screen flex">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
