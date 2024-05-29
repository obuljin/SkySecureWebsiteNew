"use client"
import React, { useState }  from 'react';
import ModalVideo from 'react-modal-video';
import imgVideo from "../../../public/assets/img/about/why-choose-us.png"
import Image from 'next/image';

const AboutVideo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="choose-wrapper">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
            <div className="choose-text">
                <p>Skysecure distinguishes itself through strong partnerships with leading OEMs like Microsoft, harnessing these relationships to deliver state-of-the-art solutions. Our specialization, underscored by ISO certification, and deep expertise in core technology, enable us to provide comprehensive, end-to-end security services tailored to diverse business needs. From risk assessments to incident response and compliance management, our ability to customize solutions ensures we cater to both small enterprises and large corporations effectively. This, combined with a proven track record of enhancing clients cybersecurity postures and receiving positive feedback and industry recognition, positions Skysecure as the preferred choice for businesses seeking robust digital protection.</p>
            </div>
            <div className="choose-img">
                <Image src={imgVideo} alt="" style={{ width: "100%", height: "auto"}}/>
                {/* <div className="choose-video">
                    <a className="popup-video" onClick={() => { openModal(); }}><i className='fas fa-play'> </i></a>
                </div> */}
            </div>
        </div>
    );
}

export default AboutVideo;