import sectionImg from "@/src/assets/banner/techMaster5.png";
import { Button } from "@nextui-org/button";
import Image from "next/image";
const Prepare = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-x-16">
      <div className="lg:w-[40%]">
        <Image
          src={sectionImg}
          alt="banner"
          height={300}
          width={300}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-[60%] flex flex-col justify-between">
        <h2 className="heading">Helping You Use Technology Better</h2>
        <p>
        We envision a world where everyone feels empowered to harness the full potential of technology. Whether it's fixing everyday tech issues, exploring the latest software, or finding the best tools for your work, Tech Tips & Tricks is here to guide you every step of the way
        </p>
        <div>
          <Button className="custom-btn mt-5" radius="sm">
          Use Technology
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
