import * as Yup from "yup";

// law_schema
export const contactUs_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  number: Yup.string().required().min(11).label("Number"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Message"),
});
// blog_schema
export const blog_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Message"),
});

// contact_schema
export const contact_schema = Yup.object().shape({
  fullName: Yup.string().required().label("Fullname"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string().required().min(5).label("Message")
});
export const ebook_schema = Yup.object().shape({
  firstName: Yup.string().required().label("Firstname"),
  lastName: Yup.string().required().label("Lastname"),
  official_email: Yup.string().required().email().label("Email"),
  phone_number: Yup.number().required().label("Phone Number"),
  company: Yup.string().required().min(3).label("Company"),
  job_title: Yup.string().required().min(3).label("Job Title"),
  country: Yup.string().required().min(3).label("Country"),
});

export const comment_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comments: Yup.string().required().email().label("Subject"),
  website: Yup.string().required().min(20).label("Website")
});

export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

