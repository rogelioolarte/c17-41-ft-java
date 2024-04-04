import { Formik, Field, Form } from "formik";
import { NavLink } from "react-router-dom";
import "../../../styles/loginRegisterForms.scss";

const LoginFormik = () => {
  return (
    <section className="login-register-section">
      <Formik initialValues={{ email: "", password: "" }}>
        <Form className="login-register-form">
          <h1 className="login-register-title big-title">Log in to Payzo</h1>
          <div className="login-register-input big-label">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Example@mail.com"
              className="login-register-field login-field"
              autoFocus
            />
          </div>
          <div className="login-register-input big-label">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="login-register-field login-field"
            />
            <p className="navigation-link">
              Forgot your password?{" "}
              <NavLink to={"/recover"}>Click here</NavLink>
            </p>
          </div>
          <button className="login-big-button" type="submit">
            Sign in! <i className="fas fa-chevron-right" />
          </button>
        </Form>
      </Formik>
      <div>
        <p className="navigation-link big-link">
          Don`t have an account yet?
          <NavLink to={"/register"}> Register now!</NavLink>
        </p>
      </div>
    </section>
  );
};

export default LoginFormik;
