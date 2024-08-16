import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";

function Form() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:space-x-10 p-6 bg-white shadow-md rounded-md  ">
        {/* First Column */}
        <div className="flex flex-col space-y-4 items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0 lg:border-r  flex-grow justify-start">
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
        </div>

        {/* Second Column */}
        <div className="lg:w-1/2">
          <div>
            <div>Contact Us </div>
            <div> +234 8088076840</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
