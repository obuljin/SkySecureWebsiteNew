import ServiceDetailsMain from "@/components/service-details/ServiceDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {

  const id = decodeURIComponent(params.id);
  return (
    <>
      <Wrapper>
        <main>
        <Breadcrumb pageTitle={`${id} - SkySecure`} pageSmallTitle={id}/>
          <ServiceDetailsMain id={id} />
        </main>
      </Wrapper>
    </>
  );
};

export default page;
