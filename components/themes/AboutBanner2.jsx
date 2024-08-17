import Image from "next/image";
import React from "react";
import signing from "@/public/images/signing.jpeg";

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
              <h2 className="text-xl font-bold sm:text-xl">
                Algorizmi Health and NICRAT Partner to Advance Cancer Research
                with a Pioneering Imaging Data Repository
              </h2>
              <p className="mt-4 text-gray-600">
                Algorizmi Health Limited has signed a Memorandum of
                Understanding (MOU) with the National Institute for Cancer
                Research and Treatment (NICRAT) to develop a cutting-edge
                repository for cancer imaging data. This collaboration aims to
                advance research in cancer diagnostics and treatment,
                contributing to the fight against cancer in Nigeria and beyond.
              </p>
              <div className=" space-x-5">
                <button>
                  <a
                    href="#"
                    className="mt-8 inline-block rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-400"
                  >
                    Read More
                  </a>
                </button>
                <button>
                  <a
                    href="#"
                    className="mt-8 inline-block rounded bg-white px-12 py-3 text-sm font-medium text-black transition hover:text-white hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-700 border border-blue-700"
                  >
                    More Posts
                  </a>
                </button>
              </div>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutBanner;
