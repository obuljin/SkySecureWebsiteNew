"use client"
import React from "react";
import Link from "next/link";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import thumbOne from "../../../public/assets/img/project/image 1.png";
import thumbTwo from "../../../public/assets/img/project/image 2.png";
import thumbThree from "../../../public/assets/img/project/03.jpg";
import Image from "next/image";
import { casesData } from "@/data/case-data";


const CourseDefault = () => {
  // const casesData = [
  //   {
  //     id: 1,
  //     img: thumbOne,
  //     title:'Threat Protection with Microsoft Azure Sentinel'
  //   },
  //   {
  //     id: 2,
  //     img: thumbTwo,
  //     title:'A Guide to IT Security Transformation in Manufacturing'
  //   },
  //   // {
  //   //   id: 3,
  //   //   img: thumbThree,
  //   //   title:''
  //   // },
  //   // {
  //   //   id: 4,
  //   //   img: thumbOne,
  //   //   title:''
  //   // },
  //   // {
  //   //   id: 5,
  //   //   img: thumbTwo,
  //   // },
  //   // {
  //   //   id: 6,
  //   //   img: thumbThree,
  //   //   title:''
  //   // },
  // ];

  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        observeParents={true}
        observer={true}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 2,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".case-button-next",
          prevEl: ".case-button-prev",
        }}
      >
        {casesData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="col-12">
              <div className="project-wrapper">
                <div className="project-img">
                  <Link href="#">
                    <Image src={item.img} alt="" />
                  </Link>
                  <div className="project-text">
                    {/* <span>{item.title}</span> */}
                    <h3>
                      <Link href={`/case-details/${item.title}`}>{item.title}</Link>
                    </h3>
                    <div className="bolg-top-button mt-2" >
                      <Link className="btn" href={`/case-details/${item.title}`}>
                        <span className="btn-text" style={{ color: 'white' }}>
                          READ MORE <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                    {/* <Link href={`/case-details/${item.title}`}>
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="bd-trending__navigations">
        <button className="case-button-prev banner-button-prev slick-arrow">
          <i className="fa-regular fa-angle-left"></i>
        </button>
        <button className="case-button-next banner-button-next slick-arrow">
          <i className="fa-regular fa-angle-right"></i>
        </button>
      </div> */}

    </>
  );
};

export default CourseDefault;
