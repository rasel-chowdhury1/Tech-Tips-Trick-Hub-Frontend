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
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
