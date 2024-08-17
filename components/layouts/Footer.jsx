import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-10 px-5 py-10 bg-white rounded-md  ">
        {/* First Column */}
        <div className="flex flex-col space-y-8 items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0 flex-grow justify-start">
          <Image src={logo} alt="Logo" className="" width={200} height={150} />
          <h1 className=" text-center lg:text-left tracking-widest">
            Home / Medical Data Flow / Press / <br />
            About Us / R&D / AI Labs /<br />
            Services / Contacts{" "}
          </h1>
        </div>

        {/* Second Column */}
        <div className="lg:w-1/2">
          <div className="grid lg:gap-4 lg:pt-0 pt-20 gap-2">
            <div>Contact Us </div>
            <div className="lg:text-xl text-lg"> +234 8088076840</div>
          </div>
          <div className="grid grid-cols-2 lg:gap-10 gap-5 pt-10 lg:text-base text-xs ">
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
              <div className="lg:text-4xl text-2xl">9am - 6pm</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-10 px-5 pt-20  bg-white rounded-md  ">
        {/* First Column */}
        <div className="flex flex-col  items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0 flex-grow justify-start">
          <div className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 "
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
          <div className="grid lg:gap-4 gap-2">
            <div className="lg:text-sm text-xs">
              {" "}
              © {currentYear} Your Company Name. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <div className="  ">
        <div className=" flex mx-5 mb-5 bg-[url(https://images.unsplash.com/photo-1586974751361-fc40f865874a?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]   bg-center bg-no-repeat justify-between h-full rounded-lg border  border-gray-700 p-10 ">
          <div className="font-medium text-white lg:text-base text-xs">
            See our other
            <br /> Ventures
          </div>

          <div className="mt-1 text-xs font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
