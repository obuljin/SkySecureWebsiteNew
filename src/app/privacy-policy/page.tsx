import PrivacyPolicyContent from '@/components/privacy-policy/PrivacyPolicyContent';
import Wrapper from '@/layout/DefaultWrapper';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <Breadcrumb pageTitle='Privacy Policy - SkySecure' pageSmallTitle='Privacy Policy'/>
                    <PrivacyPolicyContent/>
                </main>
            </Wrapper>
        </>
    );
};

export default PrivacyPolicy;