import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";

function Form() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-10 p-6 bg-white shadow-md rounded-md border-y border-black ">
        {/* First Column */}
        <div className="flex flex-col space-y-4 items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0 lg:border-r  border-black flex-grow justify-center">
          <Image
            src={logo}
            alt="Logo"
            className="mb-4 align-bottom inline-block"
            width={200}
            height={150}
          />
          <h1 className="text-4xl font-bold text-center lg:text-left">
            Get in Touch with <br /> Algorizmih
          </h1>
        </div>

        {/* Second Column */}
        <div className="lg:w-1/2">
          <form className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded w-full"
                  placeholder="First Name"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-2 border rounded w-full"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="flex">
                <select className="p-2 border rounded-l">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  className="mt-1 p-2 border rounded-r w-full"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 p-2 border rounded w-full"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label
                htmlFor="terms"
                className="text-sm font-medium text-gray-700"
              >
                I agree to the terms and conditions
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
