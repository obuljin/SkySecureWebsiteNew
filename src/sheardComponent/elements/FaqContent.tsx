"use client"
import { faqPageData } from '@/data/faq-page-data';
import React, { useState } from 'react';

const FaqContent = () => {
  const [activeItem, setActiveItem] = useState<number | null>(1);
  const [active, setactive] = useState<boolean>(true);
  // const handleAccordionClick = (id: number) => {
  //   setActiveItem(id);
  //   setactive(!active);
  // };

  const handleAccordionClick = (id: number) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === id ? null : id));
  };
  return (
    <>
      <div
        className="accodion-style--1"
        id="accordionExample"
      >
        <div className="accodion-style--1" data-wow-delay=".5s">
          <div>
            {faqPageData?.map((item) => (
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
    </>
  );
};

export default FaqContent;