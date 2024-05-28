import React from 'react';
import ServiceVideo from './ServiceVideo';
import ServiceFaq from '@/sheardComponent/ServiceFaq';

const ServiceAbout = () => {
    return (
        <>
             <div className="about-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <ServiceVideo />
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-10">
                            <div className="faq-wrapper">
                                <div className="section-title mb-25">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">who we are</span>
                                    <h1>Why Most People Choose Our Business Solutions</h1>
                                    <p>Skysecure Technologies for its cutting-edge, tailored cybersecurity solutions that cater specifically to the unique challenges and requirements of the manufacturing industry. Our expertise in navigating the complex landscape of IT security ensures operational excellence and resilience against evolving cyber threats. With Skysecure, businesses benefit from:</p>
                                </div>
                                <div className="faq-box">
                                    <ServiceFaq />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceAbout;