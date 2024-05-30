import BreadcrumbWithImage from '@/sheardComponent/BreadCrumbWithImage';
import React from 'react';
import TermsContent from './TermsContent';

const TermsMain = () => {
    return (
        <>
            
            <BreadcrumbWithImage pageTitle='Terms of Use - Skysecure' pageSmallTitle='Terms of Use' backgroundImage='assets/img/TermsOfUse/TermsOfUse.jpg' backgroundcolor=''/>
           <TermsContent/>
        </>
    );
};

export default TermsMain;