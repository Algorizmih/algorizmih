import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import Button from "../ui/Button";

function Form() {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row lg:space-x-10 lg:pt-0 pt-10 bg-white shadow-md border-y border-black   ">
        {/* First Column */}
        <div className="flex flex-col space-y-8 px-10 items-cener lg:items-start lg:w-1/2 mb-6 lg:mb-0 lg:border-r   border-black flex-grow justify-center">
          <Image
            src={logo}
            alt="Logo"
            className="mb-4 align-bottom inline-block"
            width={200}
            height={150}
          />
          <h1 className="text-4xl  font-bold text-center lg:text-left">
            Get in Touch with <br /> Algorizmih
          </h1>
        </div>

        {/* Second Column */}
        <div className="lg:w-1/2 p-10">
          <form className="space-y-8 ">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 py-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded w-full"
                  placeholder=" Enter First Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 py-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded w-full"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 py-2">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 py-2">
                Phone Number
              </label>
              <div className="flex">
                <select className="px-2 border rounded-l">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  className="p-2 border rounded-r w-full"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 py-2">
                Message
              </label>
              <textarea
                className="mt-1 p-2 border rounded w-full"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="lg:flex lg:items-center lg:justify-between   ">
              <div>
                <input type="checkbox" id="terms" className="mr-2" />
                <label
                  htmlFor="terms"
                  className="lg:text-sm text-xs font-medium text-gray-700"
                >
                  I agree with Terms of Use and Privacy Policy{" "}
                </label>
              </div>

              <div className="lg:pt-0 pt-5">
                <Button
                  text="Send"
                  className="text-xs lg:py-4  py-2 px-10  text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
