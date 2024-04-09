import { Formik, Field, Form } from "formik";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/payzo.svg";
import "../../../styles/loginRegisterForms.scss";

const RegisterFormik = () => {

    /* const initialValues = { firstName: '', lastName: '', dni: '', email: '', 
    password: '', urlAvatar: '', dollarAccount: '', } */

    const initialValues = { firstName: "", lastName: "", idPassport: "",
        email: "", password: "", account: "", }

    return (
        <section className="login-register-section">
        <nav className="login-register-nav">
        <Link to="/home">
            <img src={Logo} />
        </Link>
        </nav>
        <Formik initialValues={ initialValues } >
            <Form className="register-form">
            <h1 className="login-register-title">Create an account</h1>

            <div className="login-register-input">
                <label htmlFor="first-name">First Name</label>
                <Field type="text" id="first-name" name="first-name" className="register-field" autoFocus />
            </div>

            <div className="login-register-input">
                <label htmlFor="last-name">Last Name</label>
                <Field type="text" id="last-name" name="last-name" className="register-field" />
            </div>

            <div className="login-register-input">
                <label htmlFor="id-passport">DNi or Passport No.</label>
                <Field type="text" id="id-passport" name="id-passport" className="register-field" />
            </div>

            <div className="login-register-input">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" 
                placeholder="Example@email.com" className="register-field"/>
            </div>

            <div className="login-register-input">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" className="register-field" />
            </div>

            <div className="login-register-input">
                <label htmlFor="account">Dollar Account No.</label>
                <Field type="text" id="account" name="account" className="register-field" />
            </div>

            <button className="login-register-button" type="submit">
                Register Now!<i className="fas fa-chevron-right" />
            </button>
            </Form>
        </Formik>
        <div>
            <p className="navigation-link">Already have an account? <NavLink to={"/login"}>Login now!</NavLink>
            </p>
        </div>
        </section>
    );
};

RegisterFormik.propTypes = {

};

export default RegisterFormik;
