import sectionImg from "@/src/assets/banner/b4.png";
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
        <h2 className="heading">Prepare yourself to see the world with us</h2>
        <p>
          Unlock expert travel insights and tips to make your journeys smoother,
          smarter, and unforgettable. From hidden gems to must-know travel
          hacks, our articles will ensure you&apos;re always prepared for the
          road ahead. Benefit from the experiences of fellow travelers and
          elevate your adventures with ease.
        </p>
        <div>
          <Button className="custom-btn mt-5" radius="sm">
            Search Places
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
