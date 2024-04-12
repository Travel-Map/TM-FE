"use client";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/header/Header";
import BlogList from "@/app/components/blog/BlogList";
import WriteButton from "@/app/components/blog/WriteButton";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/bloglist`);
        const jsonData = await response.json();
        const blogData = JSON.parse(jsonData.data);
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-auto">
      <Header />
      <div className="w-auto mx-20 mt-20 relative">
        <BlogList blogs={blogs} />
        <div className="absolute bottom-0 right-0">
          <WriteButton />
        </div>
      </div>
    </div>
  );
}
