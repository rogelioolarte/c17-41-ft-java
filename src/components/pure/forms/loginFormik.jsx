import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { Link, NavLink } from "react-router-dom";
import useString from "../../../../hooks/useString";
import { login } from "../../../services/authService";
import "../../../styles/loginRegisterForms.scss";
import Logo from "../../../assets/payzo.svg";

const LoginFormik = () => {
  const [email, changeEmail] = useString("");
  const [password, changePassword] = useString("");
  const navigate = useNavigate();

  const handleChange = (setter) => (evt) => {
    setter(evt.target.value);
  };

  const navigateToErrorPage = (error) => {
    navigate(`/error?message=${encodeURIComponent(error)}`);
  };

  const handleSubmit = async () => {
    if(login(email, password, navigateToErrorPage)){
      navigate('/dashboard')
    }
  };

  return (
    <section className="login-register-section col-lg-5 col-md-6 col-12">
      <Link to="/home">
        <img src={Logo} />
      </Link>
      <Formik
        initialValues={{ email: email, password: password }}
        onSubmit={handleSubmit}
      >
        <Form className="login-register-form">
          <h1 className="login-register-title big-title">Log in to Payzo</h1>
          <div className="login-register-input big-label">
            <label htmlFor="email">Email</label>
            <Field
              value={email}
              onChange={handleChange(changeEmail)}
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
              value={password}
              onChange={handleChange(changePassword)}
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
          <div>
            <p className="navigation-link big-link">
              Don`t have an account yet?
              <NavLink to={"/register"}> Register now!</NavLink>
              <Link to="/dashboard"> ---Dashboard--- </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default LoginFormik;
