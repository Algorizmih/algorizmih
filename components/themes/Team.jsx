import Image from "next/image";
import React from "react";

const staffMembers = [
  {
    id: 1,
    name: "Dr. Yunusa M. Garba",
    title: "CEO",
    image: "/images/team/ceo.jpeg",
  },
  {
    id: 2,
    name: "Dr.Abdurrahman chikaire",
    title: "COO",
    image: "/images/team/coo.jpeg",
  },
  {
    id: 3,
    name: "Mr. Faruk Abubakar Daudu",
    title: "Director, Media and Publicity",
    image: "/images/team/dmp.png",
  },
  {
    id: 4,
    name: "Abubakar Saidu Umar",
    title: "Project/Marketing Manager",
    image: "/images/team/pmm.jpeg",
  },
  {
    id: 5,
    name: "Ahmad Habib",
    title: "Data Scientist",
    image: "/images/team/ds.png",
  },
  {
    id: 6,
    name: "Ismail Dalhatu",
    title: "Full Stack Developer",
    image: "/images/team/fsd.jpeg",
  },
];

const Team = () => {
  return (
    <>
      <div className=" mx-auto mt-16  py-12 px-4 sm:px-6 lg:px-8 border-t border-black ">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">
          Meet the Team
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className="bg-white shadow-md  rounded-lg overflow-hidden border-4 border-black"
            >
              <Image
                src={staff.image}
                alt={`${staff.name} photo`}
                className="w-full h-74  border-b-4 border-black  "
                width={1000}
                height={1000}
              />
              <div className="p-2 text-center">
                <h3 className="text-2xl font-bold text-gray-900 uppercase ">
                  {staff.name}
                </h3>
                <p className="mt-2 text-gray-900 font-bold">{staff.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
