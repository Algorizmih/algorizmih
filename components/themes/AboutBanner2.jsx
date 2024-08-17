import Image from "next/image";
import React from "react";
import signing from "@/public/images/signing.jpeg";
import Button from "../ui/Button";

function AboutBanner() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-y border-black ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
              <Image
                alt=""
                src={signing}
                className=" h-full w-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="lg:py-24">
              <div className="text-xl font-bold sm:text-xl">
                Algorizmi Health and NICRAT Partner to Advance Cancer Research
                with a Pioneering Imaging Data Repository
              </div>
              <div className="mt-4 text-gray-600">
                Algorizmi Health Limited has signed a Memorandum of
                Understanding (MOU) with the National Institute for Cancer
                Research and Treatment (NICRAT) to develop a cutting-edge
                repository for cancer imaging data. This collaboration aims to
                advance research in cancer diagnostics and treatment,
                contributing to the fight against cancer in Nigeria and beyond.
              </div>
              <div className="lg:space-y-10 md:space-y-6  lg:pt-16 pt-10 lg:text-base text-sm">
                <div className="flex space-x-14  ">
                  <div className=" ">
                    <div className="text-gray-500">Publication Date</div>
                    <div>August 12, 2024</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Author</div>
                    <div>Dr. Yunusa Garba</div>
                  </div>
                </div>

                <div className=" flex space-x-5  lg:mt-8 mt-4 ">
                  <Button
                    text="Read More"
                    className="text-sm lg:px-10 px-5 lg:py-4 py-2 text-white"
                  />
                  <Button
                    text="More Posts"
                    className="text-sm lg:px-10 px-5 py-4 bg-white text-black  hover:text-white focus:outline-none border border-blue-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBanner;

<div className="grid grid-cols-2 gap-10 pt-10 ">
  <div className=" ">
    <div>Location</div>
    <div>Suite E9 SHM Complex, Mabushi, Abuja, FCT</div>
  </div>
  <div className="">
    <div>Email</div>
    <div>contact@algorizmih.com</div>
  </div>
</div>;
