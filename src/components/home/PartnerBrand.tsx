"use client";
import React from "react";
import brandOne from "../../../public/assets/img/Partnership/Partnership/Google.png";
import brandTwo from "../../../public/assets/img/Partnership/Partnership/Microsoft.png";
import brandThree from "../../../public/assets/img/Partnership/Partnership/Paloalto.png";
import brandFour from "../../../public/assets/img/Partnership/Partnership/crayon.png";
import brandFive from "../../../public/assets/img/Partnership/Partnership/crowdstrike.png";
import brandSix from "../../../public/assets/img/Partnership/Partnership/fortinet.png";
import brandSeven from "../../../public/assets/img/Partnership/Partnership/ingramicro.png";
import brandEight from "../../../public/assets/img/Partnership/Partnership/redington.png";
import brandNine from "../../../public/assets/img/Partnership/Partnership/techdata.png";
// import brandTen from "../../../public/assets/img/brand/saraf.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Navigation,Autoplay, Pagination } from "swiper";
import 'swiper/swiper-bundle.min.css';
import { Autoplay, Navigation } from "swiper";

const PartnerBrand = () => {
    const brandLogos = [
        {
            id: 1,
            logo: brandOne,
        },
        {
            id: 2,
            logo: brandTwo,
        },
        {
            id: 3,
            logo: brandThree,
        },
        {
            id: 4,
            logo: brandFour,
        },
        {
            id: 5,
            logo: brandFive,
        },
        {
            id: 6,
            logo: brandSix,
        },
        {
            id: 7,
            logo: brandSeven,
        },
        {
            id: 8,
            logo: brandEight,
        },
        {
            id: 9,
            logo: brandNine,
        }
    ];

    return (
        <div className="brand-area pt-10 pb-10">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 ">
                        <div className="section-title text-center ml-50 mr-50 mb-80">
                            <span className="b-sm-left-1"></span>
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">OUR PARTNERSHIPS & ALLIANCES</span>
                            <h1>We&apos;ve had the pleasure of working with industry - defining brands.</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            autoplay={{
                                delay: 400,
                                disableOnInteraction: false,
                            }}
                            loop={false}
                            speed={1100}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1400: {
                                    slidesPerView: 5,
                                },
                                1700: {
                                    slidesPerView: 5,
                                },
                            }}
                            // navigation={{
                            //     nextEl: ".bd-amenities-slider-next",
                            //     prevEl: ".bd-amenities-slider-prev",
                            // }}
                        >
                            {brandLogos.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className="brand-img">
                                        <Image
                                            src={item.logo}
                                            alt={`brand ${item.id}`}
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerBrand;
