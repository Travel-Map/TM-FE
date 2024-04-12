// SingleDetailBlog.js
"use client";
import React, { useState, useEffect } from "react";

export default function SingleDetailBlog({ id }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/blogdetail/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const blogData = await response.json();
        setBlog(blogData);
        console.log(blog);
        console.log(blogData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full mx-20 mt-12">
      <span className="text-5xl font-bold mb-8">{blog.title}</span>
      <span className="text-3xl font-bold text-gray-700 mb-2">
        {blog.regionName}
      </span>
      <span className="text-xl font-bold text-gray-700">
        {blog.travelStart} ~ {blog.travelEnd}
      </span>
      <div className="mt-20 w-auto">
        <p className="w-auto text-xl text-gray-600 mb-2">내용</p>
        <div className="w-auto w-full max-w-screen-lg border border-2 shadow-md border-blue-200 rounded-lg h-[400px] text-xl p-4 mb-4">
          {blog.content}
        </div>
        <span className="text-xl">작성자: {blog.writerName}</span>
      </div>
      {/* Add more details as needed */}
    </div>
  );
}
