import { caseDataType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import thumbImg from "../../../public/assets/img/project/case-details.jpg"
import SocilaLinks from "@/utils/SocilaLinks";
interface propsType {
    data: caseDataType | any;
}

const CareerDetailsContent = ({ data }: propsType) => {
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
                                        <p className="text-black" style={{ fontSize: "15px" }}>{data?.details}</p>

                                        {data?.data?.map((e: {
                                            sub_desc: ReactNode; title: string, data: Array<{ desc: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }> 
}, i: number) => (
                                            <React.Fragment key={i}>
                                                <p className="mb-3 text-black" style={{ fontWeight: "900", fontSize: "28px" }}>{e.title}</p>
                                                <span style={{ fontSize: "15px" }}>{e.sub_desc}</span>
                                                <ul>
                                                    {e.data.map((item: { desc: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, sub_data?: Array<{ desc: string }> }, j: number) => (
                                                        <li key={j} className="mb-3" style={{ listStyleType: "disc" }}>
                                                            {item.desc}
                                                            {item.sub_data && (
                                                                <ul className="mb-2" style={{ marginLeft: "20px" }}>
                                                                    {item.sub_data.map((sub: { desc: string }, k: number) => (
                                                                        <li key={k} className="mb-8" style={{ listStyleType: "disc" }}>
                                                                            {sub.desc}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
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

export default CareerDetailsContent;
