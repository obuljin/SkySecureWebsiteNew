import React from 'react';

const ContactArea = () => {
    return (
        <>
           <section className="contact-info-area" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-30" style={{ backgroundColor: '#333333' }}>    {/*style={{ background: "url(assets/img/bg/contact-bg.png)"}} */}
                                    <i className='fas fa-envelope-open'> </i>
                                    <h3>Mail Here</h3>
                                    <p>sales@skysecuretech.com</p>
                                    <p>www.skysecuretech.com</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-30" style={{ backgroundColor: '#333333' }}>
                                    <i className='fas fa-map-marker-alt'> </i>
                                    <h3>Corporate Office Address</h3>
                                    <p>AGR Plaza, 6/1, 3rd floor, Bellandur, Bengaluru, Karnataka-560103.</p>
                                </div>
                            </div>
                            <div className="col-xl-4  col-lg-4 col-md-4 ">
                                <div className="contact text-center mb-30" style={{ backgroundColor: '#333333' }}>
                                    <i className='fas fa-phone'> </i>
                                <h3>Call Us Now</h3>
                               
                                <p>+ (91) 73533 55526</p>
                                <p>&nbsp;</p> 
                             
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
        </>
    );
};

export default ContactArea;