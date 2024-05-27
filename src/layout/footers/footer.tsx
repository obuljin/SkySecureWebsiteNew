import Link from "next/link";
import React from "react";
import footerImg from "../../../public//assets/img/logo/logo.png";
import imgOne from "../../../public/assets/img/footer/01.jpg";
import imgTow from "../../../public/assets/img/footer/02.jpg";
import Image from "next/image";
import FooterBottom from "./FooterBottom";
import SocilaLinks from "@/utils/SocilaLinks";

const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-area grey-bg pt-80 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="footer-wrapper mb-30">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image src={footerImg} alt="flag"  style={{ width: '222px', height: '46px' }} />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                    "With a strong focus on innovation, expertise, and client-centric services, Skysecure stands at the forefront of digital innovation, offering bespoke solutions to businesses globally"
                      {/* At 1vero eoset accusamus et iusto odio dignissimos ducimus
                      qui blpraesentium voluptatum deleniti atque corrupti quos
                      dolores et quas molestias excepturi{" "} */}
                    </p>
                  </div>
                  <div className="footer-icon">
                    <SocilaLinks />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Our Services</h4>
                  <ul className="fotter-menu">
                    <li>
                      <Link href="/service-1">Commercial Marketplace</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Solution Implementation</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Assessment</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Simplified Management</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Security & Compliance Metrics</Link>
                    </li>
                    <li>
                      <Link href="/service-1">Operational Excellence</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="fotter-menu">
                    {/* <li>
                      <Link href="/about">About Us</Link>
                    </li> */}
                    <li>
                      <Link href="/goals">Need a Consultant?</Link>
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
                  <h4 className="footer-title mt-3">Terms & Conditions</h4>
                  <ul className="fotter-menu">
                    <li>
                      <Link href="/terms-of-use">Terms of Use</Link>
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
                <div className="footer-wrapper mb-30">
                  <h4 className="footer-title">Contact Us</h4>
                  <div className="footer-info">
                    <p>SKYSECURE TECHNOLOGIES PRIVATE LIMITED</p>
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
          <FooterBottom />
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
