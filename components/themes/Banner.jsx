import React from "react";

function Banner() {
  return (
    <div>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1685975734968-5e23db2a97be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover bg-center bg-no-repeat">
        <div className="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="">
            <div className="lg:px-36 text-center font-extralight text-white lg:text-6xl text-4xl space-y-5">
              The Future of Patient Care with the Power of Artificial
              Intelligence
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-between lg:pb-20 pb-10 px-3 space-y-5">
          <button className="block w-full rounded-full bg-white px-20 py-3 text-xs font-medium text-black shadow focus:outline-none focus:ring  sm:w-auto">
            Redefining healthcare <br />
            with intelligent solutions
          </button>

          <button className="block w-full rounded-full bg-blue-800 px-10 py-5 text-sm font-medium text-white shadow hover:text-blue-900 focus:outline-none focus:ring active:text-blue-800 sm:w-auto">
            Get Demo
          </button>
        </div>
      </section>
    </div>
  );
}

export default Banner;
