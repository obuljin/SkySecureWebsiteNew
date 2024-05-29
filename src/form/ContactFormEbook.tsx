"use client";
import { ebook_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "./ErrorMsg";
import { toast } from "react-toastify";
import { url } from "inspector";
import * as Yup from 'yup';


const ContactFormEbook = () => {


  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        official_email: "",
        phone_number: "",
        company: "",
        job_title: "",
        country: "",
      },
      validationSchema: ebook_schema,
      onSubmit: async (values, { resetForm }) => {
        console.log(values)
        try {
          const api = process.env.NEXT_PUBLIC_API_URL
          const response = await fetch(`${api}/ebook/request`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values), // Assuming values is an object containing data to send
          })
          const response_json = await response.json()
          if (response_json.code == 200) {
            const pdfUrl = "/assets/ebook.pdf"
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Skysecure Microsoft DPDP eBook.pdf';
            link.click();
            toast.success(response_json.message)
            console.log("Success download")
            resetForm()
          } else {
            toast.error(response_json.message);
            console.error('Failed to post data:', response.statusText);
          }
        } catch (err) {
          toast.error("Somting is Wrong")
          console.log(err)

        }

      },
    });
  return (
    <>
      <div className="container">
        <form id="appointment-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 " >
              <div className="form-box user-icon mb-20 bg-white">
                <input
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="First Name Here"
                />
                <span>
                  <i className="fas fa-user"></i>
                </span>
                {touched.firstName && <ErrorMsg error={errors.firstName} />}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-box user-icon mb-20 bg-white">
                <input
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  placeholder="Last Name Here"
                />
                <span>
                  <i className="fas fa-user"></i>
                </span>
                {touched.lastName && <ErrorMsg error={errors.lastName} />}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-box email-icon mb-20 bg-white">
                <input
                  type="email"
                  name="official_email"
                  value={values.official_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Work Email Here"
                />
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                {touched.official_email && <ErrorMsg error={errors.official_email} />}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-box date-icon mb-20 bg-white">
                <input
                  type="number"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Phone Number"
                />
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                {touched.phone_number && <ErrorMsg error={errors.phone_number} />}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-box date-icon mb-20 bg-white">
                <input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Company"
                />
                <span>
                  <i className="fas fa-building"></i>
                </span>
                {touched.company && <ErrorMsg error={errors.company} />}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-box date-icon mb-20 bg-white">
                <input
                  type="text"
                  name="job_title"
                  value={values.job_title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Job Title"
                />
                <span>
                  <i className="fas fa-sharp  fa-briefcase"></i>
                </span>
                {touched.job_title && <ErrorMsg error={errors.job_title} />}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-box date-icon mb-20 bg-white">
                <input
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Country"
                />
                <span>
                  <i className="fas fa-earth-americas"></i>
                </span>
                {touched.country && <ErrorMsg error={errors.country} />}
              </div>
            </div>

            <div className="col-lg-12">
              <p>By submitting this form, you agree to Skysecure & its affiliates contacting you with this and other information. You may unsubscribe at any time</p>
              <div className="row align-items-center">
                <div className="col-lg-1 col-md-1 col-sm-1 col-2 ">
                  <input
                    className=""
                    type="checkbox"
                    name="condition"
                    placeholder="Country"
                    required
                    style={{ width: '20px', height: '20px' }}
                  />

                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">Yes, I would like to be contacted by email.</div>


              </div>
              {/* <div className="row align-items-center">
                <div className="form-box col-lg-1 col-md-1 col-sm-1 col-2">
                  <input
                    className=""
                    type="checkbox"
                    id="terms-and-conditions"
                    name="terms_and_conditions"
                    required
                    style={{ width: '20px', height: '20px' }}
                  />
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                  <label className="form-check-label " htmlFor="terms-and-conditions">
                    I agree to Skysecure's Terms & Conditions
                  </label>
                </div>
              </div> */}



              <div className="contact-btn">
                <button className="btn" type="submit">
                  <span className="btn-text">
                    Download <i className="fas fa-long-arrow-alt-righ"></i>
                  </span>
                  <span className="btn-border"></span>
                </button>
              </div>
            </div>
          </div>
        </form >
      </div>
    </>
  );
};

export default ContactFormEbook;
