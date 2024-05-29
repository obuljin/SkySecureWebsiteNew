import ContactForm from '@/form/ContactForm';
import React from 'react';

const Contact = () => {
    
    return (
        <div className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
                            <span className="border-left-1"></span>
                            <span>contact us</span>
                            <span className="border-right-1"></span>
                            <h1> {`Don't`} Hesitate To Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="contact-bg">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 mb-30">
                            <div className="map-wrapper">
                                <div className="contact-map">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7685799280293!2d77.6658419748921!3d12.922590087388272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13c9ced19e87%3A0x9eb3e6bc94ecf51f!2sSkysecure%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716548315681!5m2!1sen!2sin" 
                                    width="600" 
                                    height="450" 
                                    style={{ border: 0 }} 
                                   
                                    loading="lazy" 
                                   
                                    title="Skysecure Technologies Private Limited Location"
                                ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <div className="appointment-wrapper">
                                 <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;