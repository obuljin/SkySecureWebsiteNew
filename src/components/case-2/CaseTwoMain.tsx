import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import CaseStadiesTwo from './CaseStadiesTwo';
import CaseAreaTwo from './CaseAreaTwo';
import LatestCase from './LatestCase';
import Brand from '../home/Brand';
import CtaTwo from '@/sheardComponent/CtaTwo';

const CaseTwoMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Case Study Two'/>
            <CaseStadiesTwo/>
            <CaseAreaTwo/>
            <LatestCase/>
            <CtaTwo/> 
            <Brand/> 
        </>
    );
};

export default CaseTwoMain;