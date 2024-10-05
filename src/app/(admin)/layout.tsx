import Sidebar from "@/src/components/UI/SideBar/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      {/* Set minimum height for the parent */}
      <div className=" flex flex-col md:flex-row h-full gap-12">
        {/* Sidebar Section */}
        <div className="h-full">
          <Sidebar />
        </div>

        {/* Main Content Section */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
