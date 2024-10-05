import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Contact = () => {
  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Form */}
          <div className="w-full md:w-2/3 p-8 light light:bg-[#F9F9F9] dark dark:bg-[#1A1A1A]  rounded-lg">
            <h2 className="text-2xl text-default-50 font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Your email address will not be published. All fields are required.
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                  id="name"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Phone className="w-5 h-5 text-gray-400 mx-2" />
                  <input
                    className="w-full px-3 py-2 focus:outline-none"
                    id="phone"
                    placeholder="Your Phone"
                    type="tel"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Mail className="w-5 h-5 text-gray-400 mx-2" />
                  <input
                    className="w-full px-3 py-2 focus:outline-none"
                    id="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-gray-400 mx-2" />
                  <textarea
                    className="w-full px-3 py-2 focus:outline-none"
                    id="message"
                    placeholder="Your Message"
                    rows="5"
                  />
                </div>
              </div>
              <div>
                <Button className="w-full" radius="none" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Right side - Contact Info */}
          <div className="w-full md:w-1/3 light light:bg-[#F9F9F9] dark dark:bg-[#1A1A1A] my-auto p-8  rounded-lg">
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
                <span>(888) 456-2790</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <span>(121) 255-53333</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <span>example@domain.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-2">Find us here</h4>
              <div className="flex space-x-4">
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
