"use client";
import { blogDataType, idType } from "@/interFace/interFace";
import React from "react";
import BlogContent from "./BlogContent";
import { blogData } from "@/data/blog-data";
import BreadcrumbWithImage from "@/sheardComponent/BreadCrumbWithImage";

const BlogDetailsMain = ({ id }: any) => {
  const fillterData: any = blogData.find(
    (item) => item.id == id
  );
  console.log("data",fillterData)
  return (
    <>
      {/* <BreadcrumbWithImage pageTitle={fillterData?.title} pageSmallTitle={fillterData?.title} backgroundImage=""/> */}
      <BreadcrumbWithImage pageTitle={fillterData?.title} pageSmallTitle={fillterData?.title} backgroundImage='assets/img/blog/Blog.png' backgroundcolor='#0A1C2A'/>
      <BlogContent singleBlog={fillterData}/>
    </>
  );
};

export default BlogDetailsMain;
