import Image from "next/image";
import React from "react";
import lab from "@/public/images/lab.png";

function AboutBanner() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
              <Image
                alt=""
                src={lab}
                className="absolute inset-0 h-full w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-xs font-bold sm:text-xs">About Us</h2>
              <p className="mt-4 text-gray-600 text-3xl tracking-wider">
                Algorizmih health provides new technology that significantly
                enhances the medical diagnosis in Nigeria.
              </p>
              <button>
                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  About Us
                </a>
              </button>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBanner;
