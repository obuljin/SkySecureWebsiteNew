
import Image from "next/image";
import React from "react";
const Preloader = () => {
  return (
    <>
      <div id="preloader">
        <div className="preloader">
          <Image src={"/assets/img/loader/microsoft.gif"} alt="loader" height={100} width={100}/>
          {/* <span></span>
          <span></span> */}
        </div>
      </div>
    </>
  );
};

export default Preloader;
