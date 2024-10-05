import { Navbar } from "@/src/components/navbar";
import Footer from "@/src/components/UI/Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
