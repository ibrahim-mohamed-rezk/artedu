"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../cards/BlogCard";
import { getData } from "@/libs/axios/backendServer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getData("blogs-api");
        setBlogs(response.data.items);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-black text-3xl md:text-4xl font-bold font-['SST Arabic'] leading-tight mb-4">
            أحدث المقالات
          </h2>
          <p className="text-center text-black text-lg md:text-2xl font-normal font-['SST Arabic'] leading-tight mb-8 md:mb-12">
            ابقَ على اطلاع دائم بأحدث المقالات والنصائح في عالم التعليم والتطوير
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs?.map((blog: any, index: number) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
