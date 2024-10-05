"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Using React Icons for the close button

const BecomeAmember = () => {
  // State to control the visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  const router = useRouter();

  // Function to handle closing the banner
  const handleClose = () => {
    setIsVisible(false);
  };

  // If the banner is not visible, don't render anything
  if (!isVisible) return null;

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#F9F9F9] dark:bg-[#b4b1b1] shadow-md">
      {/* Banner content */}
      <div className="flex items-center space-x-2 mx-auto">
        <span className="text-yellow-500">✨</span> {/* Yellow sparkle icon */}
        <p className="text-sm text-pink-500 dark:text-black text-center">
          Get unlimited access to the best of Gadget Guru Hub for less than
          $20/month.{" "}
          <button
            className="underline text-black font-semibold hover:text-pink-500 transition-colors dark:text-black"
            onClick={() => handleNavigation("/become-member")}
          >
            Become <span className="text-pink-500">a member</span>
          </button>
        </p>
      </div>

      {/* Close button */}
      <button className="text-gray-500 hover:text-black" onClick={handleClose}>
        <AiOutlineClose size={18} />
      </button>
    </div>
  );
};

export default BecomeAmember;
