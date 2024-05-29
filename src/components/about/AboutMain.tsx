import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import AboutArea from "./AboutArea";
import AboutService from "./AboutService";
import ChoseArea from "./ChoseArea";
import Brand from "../home/Brand";
import CtaTwo from "@/sheardComponent/CtaTwo";
import FullTeam from "./FullTeam";

const AboutMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="About - SkySecure" pageSmallTitle= "About"/>
      <AboutArea />
      <AboutService />
      <ChoseArea />
      <FullTeam />
      <CtaTwo/>
      {/* <ClientSection /> */}
      <Brand />
    </>
  );
};

export default AboutMain;
