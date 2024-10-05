import React from "react";

import Contact from "@/src/components/UI/ContactUs/Contact";

const Page = () => {
  return (
    <div>
      <div className=" py-12">
        {/* Main Heading Section */}
        <div className=" mx-auto text-center   light light:bg-[#F9F9F9] dark dark:bg-[#1A1A1A] p-7">
          <h1 className="text-4xl font-semibold mb-8   ">Contact Us</h1>
        </div>

        {/* Subheading Section */}
        <div className="container mx-auto text-center mt-10">
          <h2 className="text-2xl font-bold">Meet Our Publishing Authors</h2>
          <p className="mt-4 text-gray-500">
            Wherever & whenever you need us. We are here for you – contact us
            for all your support needs.
            <br />
            Be it technical, general queries, or information support.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <Contact />
    </div>
  );
};

export default Page;
