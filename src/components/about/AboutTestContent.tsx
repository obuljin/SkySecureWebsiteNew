"use client";
import React from "react";

const AboutTestContent = () => {
    return (
        <div className="testimonial-wrapper col">
            <div className="testimonial-text">
                <p>&quot;One of the most remarkable aspects of our partnership with Skysecure has been their unwavering support. They provided comprehensive training to our staff, ensuring a smooth transition to the new systems. Their customer service is unparalleled; they were always available to answer our queries, address any issues promptly, and provide insightful advice to help us leverage technology to our advantage.&quot;</p>
                <div className="d-flex">
                    <div className="textimonial-text-svg" style={{ border: '2px solid #096BD8', borderRadius: '60%', padding: '3px 15px', width: 'fit-content', height: 'fit-content' }}>
                        <svg
                            aria-hidden="true"
                            style={{ height: '40px', width: '20px', color: '#096BD8' }}
                            className=" e-font-icon-svg e-fas-user-tie"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"

                        >
                            <path
                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
                                fill="#096BD8"
                                stroke="#096BD8"
                                strokeWidth="10px"
                            ></path>
                        </svg>
                    </div>

                    <div>
                        <h4 style={{ color: '#096BD8', fontSize: '24px', fontFamily: 'Roboto' }}>Saptesh Parish</h4>
                        <span style={{ textTransform: 'lowercase', color: '#7A7A7A', fontSize: '16px', fontFamily: 'Roboto' }}>Director - Enterprise IT</span>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default AboutTestContent;
