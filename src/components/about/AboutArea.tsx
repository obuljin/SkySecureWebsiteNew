import React from 'react';
import thumbOne from "/public/assets/img/about/aboutus.png"
import Image from 'next/image';
import Link from 'next/link';
const AboutArea = () => {
    return (
        <>
            <div className="about-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-2-img">
                                <Image src={thumbOne} alt="img-data" className='w-100' />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-1-wrapper">
                                <div className="about-text ">
                                    <span>who we are</span>
                                    <h1>4+ years committed to enhancing the <span>digital security & resilience </span>for clients worldwide</h1>
                                    <p>Skysecure Technologies establishes itself as an innovative enterprise committed to enhancing digital security and resilience for clients around the world. With more than four years devoted to this field, the company focuses not merely on security but on fostering a strong digital ecosystem. Its vision includes ensuring businesses can function securely while promoting sustainable practices in their digital processes.</p>
                                    {/* <p className="mt-20">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem </p> */}
                                </div>
                                {/* <div className="about-button">
                                        <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div> */}
                            </div>
                        </div>
                        <p >Skysecure Technologies’ proficiency extends beyond limited areas, covering a diverse range of industries. This comprehensive perspective enables the company to customize its solutions, addressing the distinct challenges and requirements of various sectors. This adaptability in crafting specialized solutions demonstrates a profound grasp of the different dynamics and unique digital threats confronting each industry.</p>
                        <p>Founded by former Microsoft technologists and supported by a cadre of exceptionally skilled and certified professionals, Skysecure Technologies is built on a foundation of unparalleled expertise. This collaboration brings together a wealth of experience from one of the tech industry’s giants with the fresh, innovative approaches of a team dedicated to excellence. Each member’s commitment to staying at the forefront of technological advancements and cybersecurity trends ensures that Skysecure Technologies remains a leader in digital protection and resilience. This unique blend of seasoned insight and cutting-edge proficiency enables the company to offer robust, tailored solutions to its clients, setting a new standard in the realm of digital security.</p>
                    </div>
                    <div className="about-button text-center">
                        <Link className="btn" href="/about"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutArea;