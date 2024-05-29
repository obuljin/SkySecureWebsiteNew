import { idType } from '@/interFace/interFace';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import { casesData } from '@/data/case-data';
import Brand from '../home/Brand';
import { courseData } from '@/data/courseData';
import CareerDetailsContent from './careerContentDetails';

const CareerDetailsMain = ({id}:idType) => {
    const filerData = courseData.find((item)=>item.title == id)
    const pageSmallTitle = filerData ? filerData.title : '';
    return (
        <>
            <Breadcrumb pageTitle={`${filerData?.title} - SkySecure`} pageSmallTitle={pageSmallTitle}/>

            <CareerDetailsContent data={filerData}/>
        </>
    );
};

export default CareerDetailsMain;