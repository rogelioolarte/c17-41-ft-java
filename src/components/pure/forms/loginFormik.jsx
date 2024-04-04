import { Formik, Field, Form } from "formik";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/payzo.svg";
import "../../../styles/loginRegisterForms.scss";

const LoginFormik = () => {
  return (
    <section className="login-register-section">
      <nav className="login-register-nav">
        <img src={Logo} />
        <hr />
      </nav>
      <Formik initialValues={{ email: "", password: "" }}>
        <Form className="login-register-form">
          <h1>Sign in to Payzo</h1>
          <div className="login-register-input">
            <label htmlFor="email">Email: </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Example@mail.com"
              className="login-register-field"
              autoFocus
            />
          </div>
          <div className="login-register-input">
            <label htmlFor="password">Password: </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="login-register-field"
            />
          </div>
          <button className="login-register-button" type="submit">
            Sign in!
            <i className="fas fa-chevron-right" />
          </button>
        </Form>
      </Formik>
      <div>
        <p className="navigation-link">
          Forgot your password? <NavLink to={"/"}>Click here</NavLink>
        </p>
        <p className="navigation-link">
          Don`&apos;`t have an account yet?
          <NavLink to={"/register"}> Register now!</NavLink>
        </p>
      </div>
    </section>
  );
};

LoginFormik.propTypes = {};

export default LoginFormik;
