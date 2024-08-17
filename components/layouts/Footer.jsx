import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";

function Footer() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-10 p-6 bg-white shadow-md rounded-md  ">
        {/* First Column */}
        <div className="flex flex-col space-y-4 items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0 flex-grow justify-start">
          <Image
            src={logo}
            alt="Logo"
            className="mb-4 align-bottom inline-block"
            width={200}
            height={150}
          />
          <h1 className=" text-center lg:text-left tracking-widest">
            Home / Medical Data Flow / Press / <br />
            About Us / R&D / AI Labs /<br />
            Services / Contacts{" "}
          </h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>

        {/* Second Column */}
        <div className="lg:w-1/2">
          <div className="grid gap-4">
            <div>Contact Us </div>
            <div className="text-xl"> +234 8088076840</div>
          </div>
          <div className="grid grid-cols-2 gap-10 pt-10 ">
            <div className=" ">
              <div>Location</div>
              <div>Suite E9 SHM Complex, Mabushi, Abuja, FCT</div>
            </div>
            <div className="">
              <div>Email</div>
              <div>contact@algorizmih.com</div>
            </div>
            <div className="">
              <div> Mon - Fr</div>
              <div className="text-4xl">9am - 6pm</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" space-y-2 py-10 px-5">
        <div className=" flex justify-between h-full rounded-lg border  border-gray-700 p-10 ">
          <div className="font-medium text-black">Project A</div>

          <div className="mt-1 text-xs font-medium text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequuntur deleniti, unde ab ut in!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
