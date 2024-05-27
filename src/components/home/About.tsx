import Link from 'next/link';
import React from 'react';
import aboutImg from "../../../public/assets/img/about/about.jpg"
import aboutTwo from "../../../public/assets/img/about/01.png"
import Image from 'next/image';
const About = () => {
    return (
        <>
            <div className="about-area pt-130 pb-100">
            <div className="container">   
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-text">
                            <span>who we are</span>
                            <h1>4+ years committed to enhancing the <span>digital security & resilience</span>for clients worldwide</h1>
                            <p>“Our expertise spans a broad spectrum of industries, providing specialized solutions that transcends beyond mere protection; it is about building a resilient digital ecosystem where businesses can thrive securely and sustainably.”</p>
                            {/* <Link href="/service-1">Our Services <i className='fas fa-long-arrow-alt-right'></i></Link> */}
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-img">
                            <Image src={aboutImg} style={{ width: "100%", height: "auto" }} alt="about-img" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                    {/* <div className="col-xl-6 col-lg-6 mb-30"> */}
                        <div className="about-content">
                            <p>In the heart of our business philosophy lies a timeless principle derived from the <span style={{color: "#096bd8"}}>Bhagavad Gita: the pursuit of excellence in service and an unwavering dedication to quality</span>. This ethos guides us to focus deeply on the work at hand, prioritizing integrity and commitment without being solely driven by the anticipation of rewards or outcomes. It’s a belief that by diligently performing our duties and by consistently delivering exceptional services, the fruits of our labor will naturally emerge. This approach not only fosters a culture of excellence and reliability within our team but also assures our clients that their trust is well-placed. By centering our actions around the value we provide, we create enduring relationships and build a foundation for mutual success. This philosophy is embedded in every project we undertake, ensuring that we deliver not just services, but solutions that stand the test of time, reflecting our dedication to excellence and the trust our clients place in us.</p>
                            <strong style={{color: "#096bd8"}}>– Suresh &amp; Nithin (founders)</strong>
                            {/* <div className="about-1-img">
                                <Image src={aboutTwo} style={{ width: "auto", height: "auto" }} alt="about-img" />
                            </div> */}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    );
};

export default About;