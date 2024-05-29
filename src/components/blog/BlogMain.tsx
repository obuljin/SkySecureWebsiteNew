import React from 'react';
import BlogSection from './BlogSection';
import BreadcrumbWithImage from '@/sheardComponent/BreadCrumbWithImage';

const BlogMain = () => {
    return (
        <>
            <BreadcrumbWithImage pageTitle='Blog - SkySecure' pageSmallTitle='Blog' backgroundImage='assets/img/blog/Blog.png'/>
            <BlogSection/>
        </>
    );
};

export default BlogMain;