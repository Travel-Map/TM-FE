"use client";
import React, { useState, useEffect } from "react";
import Like from "/public/blog/like.svg";
export default function BlogList({ blogs }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-start">
        {blogs.map((blog) => (
          <div key={blog.id} className="px-2 mb-4 w-1/4">
            <div className="border-2 border-black shadow-md h-full relative mx-2">
              <div className="flex flex-col mb-1 h-4/5 ml-4">
                <img
                  src={blog.imageUrl}
                  alt="Blog Image"
                  className="w-full h-48 object-cover"
                />
                <p className="pt-4 item-center text-2xl font-bold m-2 break-words">
                  {blog.title}
                </p>
                <div className="flex justify-between pt-2 ml-2 mb-2">
                  <span className="text-xl text-gray-400 text-bold mr-8">
                    {blog.createdAt}
                  </span>
                  <span className="flex text-xl text-gray-400 items-center text-bold mr-2">
                    <Like width="20" height="20" />
                    {blog.likedCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
