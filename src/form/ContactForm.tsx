"use client";
import { contact_schema } from "@/utils/validation-schema";
import React from "react";
import { useFormik } from "formik";
import ErrorMsg from "./ErrorMsg";
import { toast } from "react-toastify"
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

        console.log(values)

        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
          const response_json = await response.json()
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
        // resetForm();
      },
    });
  return (
    <>
      <form id="appointment-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-box user-icon mb-30">
              <input
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Full Name Here"
                id="email"
              />
              <span>
                <i className="fas fa-user"></i>
              </span>
              {touched.fullName && <ErrorMsg error={errors.fullName} />}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-box email-icon mb-30">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email Here"
              />
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              {touched.email && <ErrorMsg error={errors.email} />}
            </div>
          </div>
          <div className="col-lg-12">
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
                <i className="fas fa-chevron-down"></i>
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
            <div className="contact-btn">
              <button className="btn" type="submit">
                <span className="btn-text">
                  send message <i className="fas fa-long-arrow-alt-righ"></i>
                </span>{" "}
                <span className="btn-border"></span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
