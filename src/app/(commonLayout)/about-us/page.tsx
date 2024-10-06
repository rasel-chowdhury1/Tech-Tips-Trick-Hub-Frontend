import Banner from "@/src/components/module/home/Banner";
import Popular from "@/src/components/module/home/Popular";
import Prepare from "@/src/components/module/home/Prepare";

const page = () => {
  return (
    <div>
      <Banner />
      <Prepare />
      <Popular />
    </div>
  );
};

export default page;
