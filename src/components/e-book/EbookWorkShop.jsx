import Image from 'next/image';
import logo from '../../../public/assets/img/logo/logo.png';


const EbookWorkShop = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "black" }}>
                <div className="row ">

                    <div className=" col-xl-6 col-lg-6 col-md-12 col-12  mt-30 mb-30" style={{
                        backgroundColor: "white",
                        // borderTopRightRadius: "100px",
                        // borderBottomRightRadius: "100px"


                    }}>
                        <div style={{ marginLeft: "30px" }}>
                            <div className="section-title mt-20">
                                <h4>Complimentary DPDP assessment workshop</h4>
                            </div>
                            <p className=" text-black">Start your journey to compliance with Skysecure. Using trial licenses from Microsoft, we’ll provide insights into your organization’s preparedness and recommend the initial steps on your DPDP journey.</p>
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-4 mt-0 mb-10 ">
                                    <Image src={logo} style={{ width: "100%", height: "auto" }} alt="about-img" />
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8 col-8 mt-0 ">
                                    <h6>To take up this offer:</h6>
                                    <p><span className="fw-bolder">Email:</span> Contact@skysecuretech.com <span className="fw-bolder">Phone:</span> (+91) 73533 55526</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-1 col-lg-1   d-none  d-sm-none d-md-none d-lg-block mt-30 mb-30" style={{ backgroundColor: "white", borderRadius: "0 50% 50% 0" }}></div>
                    <div className="col-xl-12 col-lg-12"></div>
                </div>
            </div>
            <div className=" container-fluid col-xl-12 col-lg-12 mb-20 mt-20">
                <p className="text-black" style={{ marginLeft: "30px", marginRight: "30px" }}><span className="fw-bolder">Privacy Policy:</span> Skysecure Technologies Private Limited is a company registered and incorporated in India. We are committed to protecting and respecting your privacy. For the purposes of data protection legislation, we are the data controller, and we will process your Personal Data in accordance with the IT Act, 2000/21 of 2000 and other national and state laws which relate to the processing of personal data. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
            </div>
        </>
    )
}

export default EbookWorkShop