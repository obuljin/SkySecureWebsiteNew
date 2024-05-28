"use client"
import { serviceFaq } from '@/data/service-faq';
import React, { useState } from 'react';

const ServiceFaq = () => {

    const [activeItem, setActiveItem] = useState<number | null>(1);
    const [active, setactive] = useState<boolean>(true);

    const handleAccordionClick = (id: number) => {
        setActiveItem((prevActiveItem) => (prevActiveItem === id ? null : id));
    };

    return (
        <>
            <div className="">
                <div className="faq-wrapper">

                    {/* accordian */}

                    <div
                        className="accodion-style--1"
                        id="accordionExample"
                    >
                        <div className="accodion-style--1" data-wow-delay=".5s">
                            <div>
                                {serviceFaq?.map((item) => (
                                    <div key={item.id} className="accordion-item">
                                        <p
                                            onClick={() => handleAccordionClick(item.id)}
                                            className="accordion-header"
                                        >
                                            <button
                                                className={`accordion-button-custome ${activeItem === item.id && active
                                                        ? "collapsed"
                                                        : " "
                                                    }`}
                                                type="button"
                                            >
                                                {item.title}
                                            </button>
                                        </p>
                                        <div
                                            className={`accordion-collapse collapse ${activeItem === item.id && active ? "show" : " "
                                                }`}
                                        >
                                            <div className="accordion-body">
                                                <p> {item.details} </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* accordian end */}
                </div>
            </div>
        </>
    );
};

export default ServiceFaq;