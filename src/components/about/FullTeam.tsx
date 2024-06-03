import React from "react";
import bgImg from "../../../public/assets/img/shape/shape-1.png"
import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/data/team-data";
const FullTeam = () => {


  return (
    <>
      <div className="team-area pt-120 pb-100 pos-rel">
        {/* <div className="shape d-none d-xl-block">
          <div className="shape-item team-01 bounce-animate">
            <Image src={bgImg} alt="" />
          </div>
        </div> */}
        <div className="container">
          <div className="row mb-50">
            <div className="col-xl-4 col-lg-6">
              <div className="section-title  mb-30">
                <span className="b-sm-left-1"></span>
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">our Team</span>
                <h1>Meet our leadership team</h1>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-3 col-lg-6">
              <div className="team-section mb-30 z-index">
                <p>
                "Join our team of experts and embark on a mission to shape the future; where innovation meets resilience"
                </p>
                <Link className="btn" href="/career">
                  
                    <span className="btn-text">
                      join with us{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  
                </Link>
              </div>
            </div>
          </div> 
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {teamData.slice(0,3).map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30 row justify-content-center align-items-center">
                  <div className="team-wrapper row justify-content-center align-items-center">
                    <div className="team-img "  >
                      <Image className="rounded-pill" height={386} width={300} style={{height:'200px', width:"200px"}} src={item.img} alt="" />
                    </div>
                    <div className="text">
                      <h4> {item.name}</h4>
                      <span style={{color:"#000000", fontSize:'14px'}}> {item.title} </span>
                      {/* <div className="team-icon">
                        <Link href="https://www.facebook.com/">
                          <i className={item.facebook}></i>
                        </Link>
                        <Link href="https://twitter.com/">
                          <i className={item.twitter}></i>
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className={item.instagram}></i>
                        </Link>
                        <Link href="https://www.youtube.com/">
                          <i className={item.youtube}></i>
                        </Link>
                      </div> */}
                    </div>

                  </div>

                </div>
                
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FullTeam;
