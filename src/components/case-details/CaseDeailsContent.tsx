import { caseDataType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import thumbImg from "../../../public/assets/img/project/case-details.jpg"
import SocilaLinks from "@/utils/SocilaLinks";
interface propsType {
  data: caseDataType | any;
}

const CaseDeailsContent = ({ data }: propsType) => {
  return (
    <>
      <div className="case-details-area pt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* <div className="case-details-wrapper">
                <div className="case-details-img">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={data?.img}
                    alt="case-img"
                  />
                </div>
              </div> */}
              <div className="row">
                <div className="col-xl-12 col-lg-12 mb-30">
                  <div className="case-details-text">
                    <h1> {data?.title} </h1>
                    <span>{data?.details}</span>

                    {data.data.map((e: { title: string, data: Array<{ desc: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }> }, i: number) => (
                      <React.Fragment key={i}>
                        <p className="mb-8 text-black" style={{ fontWeight: "900" , fontSize:"28px"}}>{e.title}</p>
                        {e.data.map((item: {
                          sub_heading?: ReactNode;
                          desc: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined
                        }, j: number) => (
                          <p key={j} className="mb-8"><span className="text-black" style={{ fontWeight: "800" , fontSize:"15px" }}>{item?.sub_heading} </span>{item.desc}</p>
                        ))}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDeailsContent;
