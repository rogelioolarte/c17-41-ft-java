import { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";
import userSchema from "../../../models/user.schema";
import { register } from "../../../services/authService";
import Logo from "../../../assets/payzo.svg";
import "../../../styles/loginRegisterForms.scss";

const RegisterFormik = () => {
  const { assignUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    idPassport: "",
    email: "",
    password: "",
    avatar: "",
    account: "",
  };

  const navigateToErrorPage = (error) => {
    navigate(`/error?message=${encodeURIComponent(error)}`);
  };

  const handleSubmit = async (values) => {
    const newUser = await register(
      values.firstName,
      values.lastName,
      values.idPassport,
      values.email,
      values.password,
      values.avatar,
      values.account,
      navigateToErrorPage
    );
    if (newUser) {
      assignUserInfo(newUser);
      navigate("/dashboard");
    }
  };

  return (
    <section className="login-register-section col-lg-5 col-md-6 col-12">
      <nav className="login-register-nav">
        <Link to="/home">
          <img src={Logo} />
        </Link>
      </nav>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <Form className="register-form">
          <h1 className="login-register-title">Create an account</h1>

          <div className="login-register-input">
            <label htmlFor="first-name">First Name</label>
            <Field
              type="text"
              id="first-name"
              name="firstName"
              className="register-field"
              autoFocus
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="last-name">Last Name</label>
            <Field
              type="text"
              id="last-name"
              name="lastName"
              className="register-field"
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="id-passport">ID or Passport No.</label>
            <Field
              type="text"
              id="id-passport"
              name="idPassport"
              className="register-field"
            />
            <ErrorMessage
              name="idPassport"
              component="div"
              className="error-message"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Example@email.com"
              className="register-field"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="register-field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="avatar">Avatar</label>
            <Field
              type="text"
              id="avatar"
              name="avatar"
              className="register-field"
            />
            <ErrorMessage
              name="avatar"
              component="div"
              className="error-message"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="account">Dollar Account No.</label>
            <Field
              type="text"
              id="account"
              name="account"
              className="register-field"
            />
            <ErrorMessage
              name="account"
              component="div"
              className="error-message"
            />
          </div>

          <button className="login-register-button" type="submit">
            Register Now!
            <i className="fas fa-chevron-right" />
          </button>
          <div>
            <p className="navigation-link">
              Already have an account?{" "}
              <NavLink to={"/login"}>Login now!</NavLink>
            </p>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

RegisterFormik.propTypes = {};

export default RegisterFormik;
