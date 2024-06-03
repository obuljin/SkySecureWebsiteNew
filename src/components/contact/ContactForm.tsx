"use client";
import { contact_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "@/form/ErrorMsg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: contact_schema,

      onSubmit: async (values, { resetForm }) => {
        try {
          console.log(values)
          const api = process.env.NEXT_PUBLIC_API_URL
          console.log(api)
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values), // Assuming values is an object containing data to send
          });
          const response_json = await response.json()
          console.log(response_json);

          // Check if the request was successful
          if (response_json.code == 200) {
            console.log('Data successfully posted');
            toast.success(response_json.message);
            resetForm();
            // Redirect to a new page after successful submission if needed

          } else {
            toast.error(response_json.message);
            console.error('Failed to post data:', response.statusText);
          }
        } catch (error) {
          toast.error("Something is wrong ");
          console.error('Error posting data:', error);
        }

      },
    });

  return (
    <>
      <div className="contact-2-area pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                <span className="border-left-1"></span>
                <span>contact us</span>
                <span className="border-right-1"></span>
                <h1>{`Don't`} Hesitate To Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="appointment-wrapper contact-form-page">
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-box user-icon mb-30">
                      <input
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Full Name Here"

                      />
                      <span>
                        <i className="fas fa-user"></i>
                      </span>
                      {touched.fullName && <ErrorMsg error={errors.fullName} />}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-box email-icon mb-30">
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email Here"
                        id="email"
                      />
                      <span>
                        <i className="fas fa-envelope"></i>
                      </span>
                      {touched.email && <ErrorMsg error={errors.email} />}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-box date-icon mb-30">
                      <input
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Subject"
                      />
                      <span>
                        {/* <i className="fas fa-chevron-down"></i> */}
                      </span>
                      {touched.subject && <ErrorMsg error={errors.subject} />}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-box message-icon mb-30">
                      <textarea

                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Write message"
                      ></textarea>
                      <span>
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      {touched.message && <ErrorMsg error={errors.message} />}
                    </div>
                    <div className="contact-btn contact-2-btn text-center">
                      <button className="btn" type="submit">
                        <span className="btn-text">
                          send message
                          {/* <i className="fas fa-long-arrow-alt-right"> </i> */}
                        </span>{" "}
                        <span className="btn-border"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
