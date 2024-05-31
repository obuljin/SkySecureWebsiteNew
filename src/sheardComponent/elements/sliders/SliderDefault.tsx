"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import bgOne from "../../../../public/assets/img/banner/banner.png";
import bgTwo from "../../../../public/assets/img/banner/banner1.png";
// import bgTwo from "../../../../public/assets/img/bg/ebook.png";
import bgFour from "../../../../public/assets/img/slider/slider-4.jpg";
import bgFive from "../../../../public/assets/img/slider/slider-5.jpg";
import { usePathname } from "next/navigation";

const SliderDefault = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const sliderData = [
    // {
    //   id: 1,
    //   bgImg: bgOne,
    //   link: "/about",
    //   title: "Bridging Technology and Tradition with Adaptive Automation",
    //   details:
    //     "The essence of integrating cutting-edge technology solutions with established business practices to drive efficiency, innovation, and growth.",
    // },
    {
      id: 2,
      bgImg: bgTwo,
      link: "/e-book",
      tooltip_text: "View E-Book",
      title: "",
      details: "",
    },
  ];

  return (
    <>
      <div className="slider-area">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay, Navigation]}
          spaceBetween={0}
          loop={true}
          observeParents={true}
          observer={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".banner-button-next",
            prevEl: ".banner-button-prev",
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          }}
        >
          {sliderData?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="single-slider">
                {item.tooltip_text ? (
                  <Link href={item.link} title={item.tooltip_text}>
                    <div
                      className="slider-height  d-flex align-items-center"
                      style={{
                        backgroundImage: `url(${item.bgImg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // paddingTop: "100px",
                        // paddingBottom: "100px",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </Link>
                ) : (
                  <div
                    className="slider-height slider-overlay z-1 d-flex align-items-center"
                    style={{
                      backgroundImage: `url(${item.bgImg.src})`,
                      backgroundSize: "cover",
                      paddingTop: "100px",
                      paddingBottom: "100px",
                    }}
                  >
                    <div className="container">
                      <div className="row ">
                        <div className="col-xl-8 col-lg-8">
                          <div className="slider-content">
                            <h1
                              data-animation="fadeInLeft"
                              data-delay=".3s"
                              style={{ fontSize: "60px", fontWeight: "400" }}
                            >
                              {item.title}
                            </h1>
                            <p data-animation="fadeInLeft" data-delay=".5s">
                              {item.details}
                            </p>
                            <div
                              className="slider-button"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              {!item.tooltip_text && (
                                <Link className="btn" href={item.link}>
                                  <span className="btn-text">
                                    learn more{" "}
                                    <i className="fas fa-long-arrow-alt-right"></i>{" "}
                                  </span>
                                </Link>
                              )}
                              {/* <Link
                              className={`${
                                pathName === "/home-2"
                                  ? "slider-btn"
                                  : "text-link"
                              }`}
                              href="/about"
                            >
                              <span>
                                How It Works{" "}
                                <i className="fas fa-long-arrow-alt-right"></i>{" "}
                              </span>
                            </Link> */}
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-xl-4 col-lg-3 d-none d-lg-block">
                        <div className="slider-video text-md-right">
                          <Link
                            href=""
                            onClick={() => {
                              openVideoModal();
                            }}
                            className="popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </Link>
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="bd-trending__navigation">
          <button className="banner-button-prev slick-arrow">
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button className="banner-button-next slick-arrow">
            <i className="fa-regular fa-angle-right"></i>
          </button>
        </div> */}
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="vWLcyFtni6U"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default SliderDefault;
