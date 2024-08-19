import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const blogPosts = [
  {
    id: 1,
    title:
      "International consensus guideline for trustworthy and deplorable artificial intelligence in healthcare",
    description: "AIgorizmih Blog",
    imageUrl: "/images/blog.jpeg",
  },
  {
    id: 2,
    title:
      "From MICCAI To AFRICAI: African network for artificial artificial intelligence in biomedical imaging",
    description: "AIgorizmih Blog.",
    imageUrl: "/images/blog2.png",
  },
  {
    id: 3,
    title:
      "Algorizmih collaborated with young Gombe indigenes who produced Ventilator.",
    description: "Health.",
    imageUrl: "/images/blog3.png",
  },
];

const BlogList = () => {
  return (
    <>
      <div className="grid gap-y-5 px-10  ">
        <div className="flex justify-center font-bold lg:text-3xl text-2xl pt-5 ">
          Algorizmih Collaborations
        </div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Image
                alt={post.title}
                src={post.imageUrl}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                width={1000}
                height={1000}
              />
              <div className="p-4">
                <a href="#">
                  <h3 className="text-md font-medium text-gray-900">
                    {post.title}
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {post.description}
                </p>
                <div className="pt-10">
                  <Button
                    text="Read More"
                    className="py-2 text-sm px-8 text-white w-full  "
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
