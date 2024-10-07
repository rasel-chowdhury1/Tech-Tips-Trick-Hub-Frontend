import CustomNavbar from "@/src/components/shared/CustomNavbar";
import Footer from "@/src/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <CustomNavbar />
      <div className="lg:px-40 px-4">{children}</div>
      <Footer />
    </div>
  );
}
