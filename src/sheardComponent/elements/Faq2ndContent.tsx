"use client"
import { faqSidePageData } from '@/data/faq-side-data';
import React, { useState } from 'react';

const Faq2ndContent = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [active, setactive] = useState<boolean>(true);
  const handleAccordionClick = (id: number) => {
    setActiveItem(id);
    setactive(!active);
  };
  return (
    <>
      <div
        className="accodion-style--1"
        id="accordionExample"
      >
        <div className="accodion-style--1" data-wow-delay=".5s">
          <div>
            {faqSidePageData?.map((item) => (
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

export default Faq2ndContent;