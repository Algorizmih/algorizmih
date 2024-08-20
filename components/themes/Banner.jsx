import React from "react";
import {
  PiSealCheckFill,
  PiArrowCircleDownThin,
  PiInstagramLogoLight,
} from "react-icons/pi";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

function Banner() {
  return (
    <div>
      <div className="relative py-2 pt-10 bg-[url(https://images.unsplash.com/photo-1685975734968-5e23db2a97be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] lg:mx-8 mx-5 bg-cover bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-45 rounded-2xl">
        <div className="relative mx-auto px-4 sm:px-6 lg:flex h-96 lg:items-center lg:px-8">
          <div className="flex px-10 space-y-16">
            <div className="lg:px-72 text-center font-normal text-white lg:text-7xl text-4xl items-center leading-snug lg:leading-tight backdrop-opacity-95">
              The Future of Patient Care with the Power of Artificial
              Intelligence
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2   ">
          <div className="  justify-between py-5 px-3 pt-10">
            <button className=" w-full h-12  rounded-full bg-white px-10 py-0 text-xs font-medium text-black shadow focus:outline-none focus:ring sm:w-auto">
              Redefining healthcare <br />
              with intelligent solutions
            </button>

            <button className="flex items-center p-2 bg-black text-white rounded-full bg-opacity-30 px-5 text-xs shadow focus:outline-none focus:ring">
              <PiSealCheckFill className="text-[#1C32FF] w-4 h-4 mr-2" />
              The future of AI in Health
            </button>
          </div>

          <div className=" grid place-content-end pr-3 ">
            <button className=" w-10 rounded-full  uppercase bg-[#1C32FF] px-12 py-5 text-lg font-medium text-white shadow focus:outline-none focus:ring active:text-blue-800 sm:w-auto">
              Get Demo
            </button>
            <div className="flex items-center space-x-7 text-white ">
              <PiArrowCircleDownThin className="w-16 h-16 font-extralight" />
              <div className="flex">
                <FaInstagram className="w-8 h-8" />
                <IoLogoFacebook className="w-8 h-8" />
                <IoLogoLinkedin className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
