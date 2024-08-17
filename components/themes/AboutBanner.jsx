import Image from "next/image";
import React from "react";
import lab from "@/public/images/lab.png";
import Button from "../ui/Button";

function AboutBanner() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden  sm:h-80  lg:h-full">
              <Image alt="" src={lab} className="" width={500} height={500} />
            </div>

            <div className="lg:py-24">
              <div className="flex">
                <h2 className="text-xs font-bold sm:text-xs">About Us</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
              <p className="mt-4 text-gray-600 md:text-2xl lg:text-4xl font-extralight tracking-wider">
                Algorizmih health provides new technology that significantly
                enhances the medical diagnosis in Nigeria.
              </p>
              <Button
                text="About Us"
                className="mt-8 inline-block py-4 lg:px-12 px-6  text-white "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBanner;
