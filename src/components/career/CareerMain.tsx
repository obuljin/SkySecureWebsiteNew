import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import Categories from './Categories';
import Courses from './Courses';

const CareerMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Career - Skysecure' pageSmallTitle='Career'/>
            {/* <Categories/> */}
            <Courses/>
        </>
    );
};

export default CareerMain;