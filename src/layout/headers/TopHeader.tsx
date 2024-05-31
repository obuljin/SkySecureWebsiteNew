import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import flagLogo from "../../../public/assets/img/icon/flag.png"
import { FaXTwitter } from "react-icons/fa6";

const TopHeader = () => {
    return (
        <>
            <div className="header-top-area grey-bg d-none d-md-block">
            <div className="container">
                <div className="row pt-2 pb-2">
                    <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="header-info">
                            <span className=''><i className='far fa-map-marker-alt'></i>6/1, Bellandur, Bengaluru.</span>
                            <span className="header-ph cta-link hover-white"> <Link href="tel:(+91) 73533 55526"><i className='far fa-phone'></i> (+91) 73533 55526</Link> </span>
                            <span className="header-en hover-white"> <Link href="mailto:sales@skysecuretech.com"><i className='fas fa-envelope'></i>sales@skysecuretech.com</Link> </span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* <div className="header-right f-right"> */}
                            {/* <div className="header-lang  pos-rel f-right">
                                <div className="lang-icon">
                                    <Link className='lang-icon-img' href="/">
                                        <Image src={flagLogo} style={{ width: "100%", height: "auto" }} alt='flag'  />
                                    </Link>
                                    <Link className='mt-1' href="#">English <i className='fas fa-angle-down'></i></Link>
                                </div>
                                <ul className="header-lang-list">
                                    <li><Link href="#">USA</Link></li>
                                    <li><Link href="#">UK</Link></li>
                                    <li><Link href="#">CA</Link></li>
                                    <li><Link href="#">AU</Link></li>
                                </ul>
                            </div> */}
                            <div className="header-icon f-right d-flex" style={{gap:'20px'}}>
                                <Link href="https://twitter.com/SkysecureT?t=eIQh6SBZr52JEPj57ntPWw&amp;s=09/" target='_blank'><FaXTwitter/></Link>
                                <Link href="https://www.instagram.com/skysecuretech?igsh=ZmgxdjIzZ2JjcGhw" target='_blank'><i className='fab fa-instagram'></i></Link>
                                <Link href="https://www.youtube.com/channel/UCdCps8R7SdXhW3YQnE6tsyg" target='_blank'><i className='fab fa-youtube'></i></Link>
                                <Link href="https://www.linkedin.com/company/skysecure-technologies/" target='_blank'><i className='fab fa-linkedin'></i></Link>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TopHeader;