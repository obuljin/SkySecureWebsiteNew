import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import Cta from '../home/Cta';
import ChoseAreaFaq from './ChoseAreaFaq';
import AboutSection from '../home-two/AboutSection';
const FaqMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='FAQ - Skysecure' pageSmallTitle='FAQ’s'/>
            <ChoseAreaFaq/>
            <Cta/>
            <AboutSection/>
        </>
    );
};

export default FaqMain;