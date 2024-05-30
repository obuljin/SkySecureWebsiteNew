import React from "react";
import imgOne from "../../../public/assets/img/blog/details/me.png";
import Image from "next/image";
import SocilaLinks from "@/utils/SocilaLinks";
import Link from "next/link";
const BlogWidgetAbout = () => {
  return (
    <>
    {/* //   <div className="widget mb-40">
    //     <div className="widget-title-box mb-30">
    //       <span className="animate-border"></span>
    //       <h3 className="widget-title">About Me</h3>
    //     </div>
    //     <div className="about-me text-center">
    //       <Image src={imgOne} alt="" />
    //       <h4>Zulia Maron Duo</h4>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    //         eiusmod tempor incididunt ut labore.
    //       </p>
    //       <div className="widget-social-icon">
    //        <SocilaLinks/>
    //       </div>
    //     </div>
    //   </div> */}
    <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Search Objects</h3>
                </div>
                <form className="search-form">
                  <input type="text" placeholder="Search your keyword..." />
                  <button type="submit">
                    <i className="fas fa-search"> </i>
                  </button>
                </form>
              </div>
              <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Recente Posts</h3>
                </div>
                {/* <div className="about-me text-center">
                  <Image src={imgOne} alt="" />
                  <h4>Zulia Maron Duo</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="widget-social-icon">
                    <SocilaLinks/>
                  </div>
                </div> */}
                <div>
                  <Link href={`/blog-details/${1}`}> A Guide To IT Security Transformation In Manufacturing</Link>
                 
                </div>
                <hr className="my-4" style={{backgroundColor:"black",height:'2px'}}/>
                <div>
                <Link href={`/blog-details/${2}`}>Threat Protection With Microsoft Azure Sentinel</Link>
                  
                </div>
              </div>
              <div className="widget mb-40">
                <div className="widget-title-box mb-30">
                  <span className="animate-border"></span>
                  <h3 className="widget-title">Recente Comments</h3>
                </div>
                
                
              </div>
    </>
    
  );
};

export default BlogWidgetAbout;
