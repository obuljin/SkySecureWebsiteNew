import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import BlogSection from './BlogSection';

const BlogMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Blog - SkySecure' pageSmallTitle='Blog' backgroundImage='assets/img/blog/Blog.png'/>
            <BlogSection/>
        </>
    );
};

export default BlogMain;