import { url } from 'inspector';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="contact-info-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="contact text-center mb-30" style={{ backgroundImage: `url(/assets/img/bg/contact-card.png)` }}>  
                                <i className='fas fa-map-marker-alt'> </i>
                                <h3>Address</h3>
                                <p>SKYSECURE TECHNOLOGIES PRIVATE LIMITED</p>
                                <div className='p-3'>
                                    <h3>Corporate Office Address</h3>
                                    <p>AGR Plaza, 6/1, 3rd floor, Bellandur, Bengaluru, Karnataka-560103.</p>
                                </div>
                                <div className='p-3'>
                                    <h3>Other Office Address</h3>
                                    <p>30 Cecil Street, # 19-08, Prudential Tower, Singapore-049712.</p>
                                    <p>3rd Floor, Karthika Towers, DB Road, RS Puram, Coimbatore 641002.</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column col-xl-5  col-lg-5 col-md-12 justify-content-between'>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="contact text-center mb-30 p-3" style={{ backgroundImage: `url(/assets/img/bg/contact-card.png)` }}>
                                    <i className='fas fa-envelope-open'> </i>
                                    <h3>Mail Here</h3>
                                    <p>sales@skysecuretech.com</p>
                                </div>
                            </div>
                            <div className="col-xl-12  col-lg-12 col-md-12 ">
                                <div className="contact text-center mb-30 p-3" style={{ backgroundImage: `url(/assets/img/bg/contact-card.png)` }}>
                                    <i className='fas fa-phone'> </i>
                                    <h3>Call Us Now</h3>
                                    <p>+ (91) 73533 55526</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;