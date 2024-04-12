import React from "react";
import Header from "@/app/components/header/Header";
import SingleDetailBlog from "@/app/components/detailblog/SingleDetailBlog";

export default function DetailBlog({ params: { id } }) {
  return (
    <div>
      <Header />
      <SingleDetailBlog id={id} />
    </div>
  );
}
