import Link from 'next/link';
import React from 'react';
import logoWhite from "../../../public/assets/img/logo/white.png"
import Image from 'next/image';
import footerLogo from "../../../public/assets/img/logo/footerLogo.png"
import SocilaLinks from '@/utils/SocilaLinks';
import footerImg from "../../../public//assets/img/logo/logo.png";

const FooterTwo = () => {
  return (
    <>
      <footer style={{ backgroundColor: '#091B29' }}>
        <div className="footer-area pt-80">
          <div className="container">
            <div className="newsletter-bg pb-50 mb-80">
              <div className="row">
                <div className="col-xl-6 col-lg-7 mb-30">
                  <div className="single-newsletter ">
                    <div className="newsletter-form">
                      <form action="#">
                        <input placeholder="Enter Your Email :" type="email" />
                        <button className="btn" type="submit"><span className="btn-text">subscribe <i className='fas fa-long-arrow-alt-right'></i></span> <span className="btn-border"></span></button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 mb-30">
                  <div className="footer-2-icon text-lg-right">
                    <SocilaLinks />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-wrapper footer-2-wrapper mb-30">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image src={footerLogo} alt="flag" style={{ height: 'auto', width: '60%' }} />
                    </Link>
                  </div>
                  <div className="footer-text" >
                    <p >
                      With a strong focus on innovation, expertise, and client-centric services, Skysecure stands at the forefront of digital innovation, offering bespoke solutions to businesses globally
                      {/* At 1vero eoset accusamus et iusto odio dignissimos ducimus
                      qui blpraesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi{" "} */}
                    </p>
                  </div>
                  {/* <div className="footer-icon">
                    <SocilaLinks />
                  </div> */}
                  <Link className="btn" href="/about"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'> </i></span></Link>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="footer-wrapper footer-2-wrapper mb-30">
                  <h4 className="footer-title">Our Services</h4>
                  <ul className="fotter-menu" >
                    <li>
                      <Link href="/service-details/Commercial Marketplace" >Commercial Marketplace</Link>
                    </li>
                    <li>
                      <Link href="/service-details/Solution Implementation">Solution Implementation</Link>
                    </li>
                    <li>
                      <Link href="/service-details/Assessment">Assessment</Link>
                    </li>
                    <li>
                      <Link href="/service-details/Simplified Management" >Simplified Management</Link>
                    </li>
                    <li>
                      <Link href="/service-details/Organizational security & compliance metrics" >Security & Compliance Metrics</Link>
                    </li>
                    <li>
                      <Link href="/service-details/Operational Excellence" >Operational Excellence</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 ml-10">
                <div className="footer-wrapper footer-2-wrapper mb-30">
                  <h4 className="footer-title" >Quick Links</h4>
                  <ul className="fotter-menu">
                    {/* <li>
                      <Link href="/about">About Us</Link>
                    </li> */}
                    <li>
                      <Link href="/contact">Need a Consultant?</Link>
                    </li>
                    {/* <li>
                      <Link href="/service-1">Our Services</Link>
                    </li> */}
                    <li>
                      <Link href="/faq">Have Any Questions?</Link>
                    </li>
                    {/* <li>
                      <Link href="/team">Meet Our Team</Link>
                    </li> */}
                    {/* <li>
                      <Link href="/contact">Contact Us</Link>
                    </li> */}
                  </ul>
                  <h4 className="footer-title footer-2-wrapper mt-3" >Terms & Conditions</h4>
                  <ul className="fotter-menu">
                    <li>
                      <Link href="/terms-of-use" >Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="/data-privacy">Privacy</Link>
                    </li>

                  </ul>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Recent News</h4>
                  <div className="footer-news">
                    <ul>
                      <li>
                        <div className="footer-news-img">
                          <Link href="/blog">
                            <Image src={imgOne} alt="" />
                          </Link>
                        </div>
                        <div className="footer-news-text">
                          <h5>
                            <Link href="/blog">
                              Building Real Time Charts With Grap HQL & Postgres
                            </Link>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div className="footer-news-img">
                          <Link href="/blog">
                            <Image src={imgTow} alt="" />
                          </Link>
                        </div>
                        <div className="footer-news-text">
                          <h5>
                            <Link href="/blog">
                              How To Build An Endless Runner Or Virtual Reality
                            </Link>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper footer-2-wrapper mb-30">
                  <h4 className="footer-title" >Contact Us</h4>
                  <div className="footer-info">
                    <p className='!text-align-left' style={{ textAlign: 'left' }}>SKYSECURE TECHNOLOGIES PRIVATE LIMITED</p>
                  </div>
                  <ul className="contact-link">
                    <li>
                      <div className="contact-address-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-address-text">
                        <Link href="tel:+088889797697" target="_blank">
                          (+91) 73533 55526
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="contact-address-icon">
                        <i className="fas fa-envelope-open"></i>
                      </div>
                      <div className="contact-address-text">
                        <Link href="mailto:support@gmail.com" target="_blank">
                          sales@skysecuretech.com
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="contact-address-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-address-text">
                        <Link href="">AGR Plaza, 6/1, Bellandur, Bengaluru, Karnataka-560103</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area footer-2-bottom mt-50 pb-25 pt-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="copyright">
                    <p><i className="far fa-copyright"></i> 2024 Skysecure. All Rights Reserved.</p>
                  </div>
                </div>
                {/* <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="footer-bottem-text text-md-right">
                                    <p>Design By <Link href="#">BDevs</Link></p>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;