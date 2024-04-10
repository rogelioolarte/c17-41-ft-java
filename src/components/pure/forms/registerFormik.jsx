import { Formik, Field, Form } from "formik";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { register } from "../../../services/authService";
import useString from "../../../../hooks/useString";
import Logo from "../../../assets/payzo.svg";
import "../../../styles/loginRegisterForms.scss";

const RegisterFormik = () => {
  const [firstName, changeFirstName] = useString("");
  const [lastName, changeLastName] = useString("");
  const [idPassport, changeIdPassport] = useString("");
  const [email, changeEmail] = useString("");
  const [password, changePassword] = useString("");
  const [avatar, changeAvatar] = useString("");
  const [account, changeAccount] = useString("");

  const navigate = useNavigate();

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    idPassport: idPassport,
    email: email,
    password: password,
    avatar: avatar,
    account: account,
  };

  const handleChange = (setter) => (evt) => {
    setter(evt.target.value);
  };

  const navigateToErrorPage = (error) => {
    navigate(`/error?message=${encodeURIComponent(error)}`);
  };

  const handleSubmit = async () => {
    const newUser = await register(
      firstName,
      lastName,
      idPassport,
      email,
      password,
      avatar,
      account,
      navigateToErrorPage
    );
    if (newUser) navigate("/dashboard");
  };

  return (
    <section className="login-register-section col-lg-5 col-md-6 col-12">
      <nav className="login-register-nav">
        <Link to="/home">
          <img src={Logo} />
        </Link>
      </nav>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="register-form">
          <h1 className="login-register-title">Create an account</h1>

          <div className="login-register-input">
            <label htmlFor="first-name">First Name</label>
            <Field
              value={firstName}
              onChange={handleChange(changeFirstName)}
              type="text"
              id="first-name"
              name="first-name"
              className="register-field"
              autoFocus
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="last-name">Last Name</label>
            <Field
              value={lastName}
              onChange={handleChange(changeLastName)}
              type="text"
              id="last-name"
              name="last-name"
              className="register-field"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="id-passport">ID or Passport No.</label>
            <Field
              value={idPassport}
              onChange={handleChange(changeIdPassport)}
              type="text"
              id="id-passport"
              name="id-passport"
              className="register-field"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="email">Email</label>
            <Field
              value={email}
              onChange={handleChange(changeEmail)}
              type="email"
              id="email"
              name="email"
              placeholder="Example@email.com"
              className="register-field"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="password">Password</label>
            <Field
              value={password}
              onChange={handleChange(changePassword)}
              type="password"
              id="password"
              name="password"
              className="register-field"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="avatar">Avatar</label>
            <Field
              value={account}
              onChange={handleChange(changeAvatar)}
              type="text"
              id="avatar"
              name="avatar"
              className="register-field"
            />
          </div>

          <div className="login-register-input">
            <label htmlFor="account">Dollar Account No.</label>
            <Field
              value={account}
              onChange={handleChange(changeAccount)}
              type="text"
              id="account"
              name="account"
              className="register-field"
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
