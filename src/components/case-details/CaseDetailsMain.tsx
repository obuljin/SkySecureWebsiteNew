import { idType } from '@/interFace/interFace';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import CaseDeailsContent from './CaseDeailsContent';
import { casesData } from '@/data/case-data';
import Brand from '../home/Brand';

const CaseDetailsMain = ({id}:idType) => {
    const filerData = casesData.find((item)=>item.title == id)
    const pageSmallTitle = filerData ? filerData.title : '';
    return (
        <>
            <Breadcrumb pageTitle={`${filerData?.title} - SkySecure`} pageSmallTitle={pageSmallTitle}/>
            <CaseDeailsContent data={filerData}/>
        </>
    );
};

export default CaseDetailsMain;