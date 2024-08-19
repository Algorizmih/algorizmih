import React from "react";

function Banner() {
  return (
    <div>
      <section className="relative py-10  bg-[url(https://images.unsplash.com/photo-1685975734968-5e23db2a97be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] lg:mx-8 mx-5  bg-cover bg-center bg-no-repeat">
        <div className="relative mx-auto  px-4 sm:px-6 lg:flex  h-96 lg:items-center lg:px-8 ">
          <div className=" flex px-10 space-y-10 ">
            <div className="lg:px-96 text-center font-extralight text-white lg:text-6xl text-4xl items-center space-y-10 ">
              The Future of Patient Care with the Power of Artificial
              Intelligence
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-between lg:pb-20 pb-10 px-3 ">
          <button className="block w-full rounded-full bg-white px-10  text-xs font-medium text-black shadow focus:outline-none focus:ring  sm:w-auto">
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
