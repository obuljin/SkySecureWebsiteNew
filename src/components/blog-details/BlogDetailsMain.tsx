"use client";
import { blogDataType, idType } from "@/interFace/interFace";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import BlogContent from "./BlogContent";
import { blogData } from "@/data/blog-data";

const BlogDetailsMain = ({ id }: any) => {
  const fillterData: any = blogData.find(
    (item) => item.id == id
  );
  console.log("data",fillterData)
  return (
    <>
      <Breadcrumb pageTitle={fillterData?.title} pageSmallTitle={fillterData?.title} />
      <BlogContent singleBlog={fillterData}/>
    </>
  );
};

export default BlogDetailsMain;
