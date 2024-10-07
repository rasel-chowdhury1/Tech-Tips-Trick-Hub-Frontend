"use client";
import React from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { TechInput } from "../../form/TechInput";
import { TechTextArea } from "../../form/TechTextAera";
import TechForm from "../../form/TechForm";

const Contact = () => {
  const onSubmit: SubmitHandler<FieldValues> = () => {};

  return (
    <div className=" py-16 light light:bg-[#F9F9F9] dark dark:bg-[#1A1A1A] ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Form */}
          <div className="w-full md:w-2/3 p-8  rounded-lg">
            <h2 className="text-2xl  font-bold mb-4 text-gray-600">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Your email address will not be published. All fields are required.
            </p>
            <TechForm onSubmit={onSubmit}>
              <div className="mb-4">
                <TechInput
                  label="Full Name"
                  name="name"
                  radius="none"
                  variant="bordered"
                />
              </div>
              <div className="mb-4">
                <TechInput
                  label="Phone Number"
                  name="number"
                  radius="none"
                  variant="bordered"
                />
              </div>
              <div className="mb-4">
                <TechInput
                  label="Email"
                  name="email"
                  radius="none"
                  variant="bordered"
                />
              </div>
              <div className="mb-6">
                <TechTextArea label="Write Message" name="message" />
              </div>
              <div>
                <Button className="w-full" radius="none" type="submit">
                  Submit
                </Button>
              </div>
            </TechForm>
          </div>

          {/* Right side - Contact Info */}
          <div className="w-full md:w-1/3  light light:text-[#1A1A1A] dark dark:text-[#F9F9F9] my-auto p-8  rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Theodore Lowe, Ap #867-859 Sit Rd, Azusa New York
            </p>
            <p className="text-gray-600 mb-6">
              We Are Available 24/7. Call Now.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400">(888) 456-2790</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400">(121) 255-53333</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400">example@domain.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-2">Find us here</h4>
              <div className="flex space-x-4  ">
                <Link className="text-black hover:text-gray-600" href="#">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="text-black hover:text-gray-600" href="#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link className="text-black hover:text-gray-600" href="#">
                  <i className="fab fa-linkedin" />
                </Link>
                <Link className="text-black hover:text-gray-600" href="#">
                  <i className="fab fa-youtube" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
