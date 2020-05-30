import React from "react";
import "./forms.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const MentorForm = () => {
  return (
    <div className="app">
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(`The entereed email is :${values.email}`);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              "Password must contain one uppercase character, one lowercase character and one number"
            )
            .required("This field is required"),

          confirmPassword: Yup.string().when("password", {
            is: val => val && val.length > 0,
            then: Yup.string()
              .oneOf(
                [Yup.ref("password")],
                "Both passwords need to be the same"
              )
              .required()
          })
        })}
      >
        {({ dirty, handleReset, isSubmitting }) => (
          <Form>
            <h1>Welcome Aboard</h1>
            <label htmlFor="firstName" style={{ display: "block" }}>
              First Name
            </label>
            <Field
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
            />
            <ErrorMessage
              className="input-feedback"
              name="firstName"
              component="div"
            />
            <label htmlFor="middleName" style={{ display: "block" }}>
              Middle Name
            </label>
            <Field
              type="text"
              name="middleName"
              placeholder="Enter your Middle Name"
            />
            <ErrorMessage
              className="input-feedback"
              name="middleName"
              component="div"
            />
            <label htmlFor="lastName" style={{ display: "block" }}>
              Last Name
            </label>
            <Field
              type="text"
              name="lastName"
              placeholder="Enter your Last Name"
            />
            <ErrorMessage
              className="input-feedback"
              name="lastName"
              component="div"
            />
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage
              className="input-feedback"
              name="email"
              component="div"
            />
            <label htmlFor="password" style={{ display: "block" }}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className="input-feedback"
              name="password"
              component="div"
            />
            <label htmlFor="confirmPassword" style={{ display: "block" }}>
              Confirm password
            </label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className="input-feedback"
              name="confirmPassword"
              component="div"
            />
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* <MoreResources /> */}
    </div>
  );
};

export default MentorForm;