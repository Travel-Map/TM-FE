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
    <div>
      <h1>{blog.title}</h1>
      <p>Created At: {blog.regionName}</p>
      <p>Liked Count: {blog.travelStart}</p>
      <p>Liked Count: {blog.travelEnd}</p>
      <p>Liked Count: {blog.content}</p>
      <p>작성자: {blog.writerName}</p>
      {/* Add more details as needed */}
    </div>
  );
}
