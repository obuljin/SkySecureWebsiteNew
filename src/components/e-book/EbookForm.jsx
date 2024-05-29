import ContactFormEbook from "@/form/ContactFormEbook"

const EbookForm = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-30 mt-30">

                        <div className="section-title  mt-4 mb-20">
                            <h2>Helping you comply with data privacy and protection</h2>
                        </div>
                        <p className="fw-bolder text-black">Navigating the complexities of the India Digital Personal Data Protection (DPDP) Act is a complex and demanding task. It has far-reaching implications for businesses, fundamentally changing the way personal data is handled and processed.</p>
                        <p className=" text-black">Skysecure, your accredited Microsoft security partner, can simplify your DPDP journey - from initial assessment to deployment, maintenance, and ongoing governance - through our tailored, leading-edge Microsoft security solutions and expert understanding of the Act.</p>
                        <p className=" text-black">Microsoft’s comprehensive security solutions enable you to address data privacy, governance, compliance, and risk management in a consistent, integrated manner using unified solutions that provide unprecedented visibility and protection across your data - all powered by AI and automation.</p>
                    </div>
                    <div className=" col-xl-6 col-lg-6 mb-30 mt-30">
                        <div className="container border border-dark bg-light">
                            <div className="section-title  mt-4 mb-20">
                                <h2>Download the ebook</h2>
                            </div>
                            <div className=" mb-30">
                                <ContactFormEbook />
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-12 col-lg-12 mb-30">
                        <div className="section-title mb-20">
                            <h4>Complimentary DPDP assessment workshop</h4>
                        </div>
                        <p className="col-xl-8 col-lg-8 text-black">Start your journey to compliance with Skysecure. Using trial licenses from Microsoft, we’ll provide insights into your organization’s preparedness and recommend the initial steps on your DPDP journey.</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 mb-20">
                        <p className="text-black"><span className="fw-bolder">Privacy Policy:</span> Skysecure Technologies Private Limited is a company registered and incorporated in India. We are committed to protecting and respecting your privacy. For the purposes of data protection legislation, we are the data controller, and we will process your Personal Data in accordance with the IT Act, 2000/21 of 2000 and other national and state laws which relate to the processing of personal data. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
                    </div> */}

                </div>
            </div >


        </>
    )
}

export default EbookForm
