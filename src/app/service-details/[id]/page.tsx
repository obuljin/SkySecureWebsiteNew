import ServiceDetailsMain from "@/components/service-details/ServiceDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
      <Wrapper>
        <main>
        <Breadcrumb pageTitle="Service Details"/>
          <ServiceDetailsMain id={id} />
        </main>
      </Wrapper>
    </>
  );
};

export default page;
