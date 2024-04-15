import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { UserContext } from "../../../contexts/user.context";
import { updateUserInfo } from "../../../services/userConfigServices";
import useString from "../../../hooks/useString";
import "../../../styles/userConfigStyles.scss";

function ConfigFormik() {
  const { userInfo, assignUserInfo } = useContext(UserContext);

  const [userId, firstName, lastName, idPassport, email, avatar, account] =
    userInfo;

  const navigate = useNavigate();

  const [configFirstName, changeConfigFirstName] = useString(firstName);
  const [configLastName, changeConfigLastName] = useString(lastName);
  const [configIdPassport, changeConfigIdPassport] = useString(idPassport);
  const [configEmail, changeConfigEmail] = useString(email);
  const [configPassword, changeConfigPassword] = useString("");
  const [configAvatar, changeConfigAvatar] = useString(avatar);
  const [configAccount, changeConfigAccount] = useString(account);

  const initialValues = {
    firstName: configFirstName,
    lastName: configLastName,
    idPassport: configIdPassport,
    email: configEmail,
    password: configPassword,
    avatar: configAvatar,
    account: configAccount,
  };

  const handleChange = (setter) => (evt) => {
    setter(evt.target.value);
  };

  const navigateToErrorPage = (error) => {
    navigate(`/error?message=${encodeURIComponent(error)}`);
  };

  const handleSubmit = async () => {
    const updatedUser = await updateUserInfo(
      userId,
      configFirstName,
      configLastName,
      configIdPassport,
      configEmail,
      configPassword,
      configAvatar,
      configAccount,
      navigateToErrorPage
    );
    if (updatedUser) {
      assignUserInfo(updatedUser);
      navigate("/config");
    }
  };

  return (
    <div className="config-section col-xl-8 col-md-10 col-12">
      <div className="card">
        <div className="card-header">
          <h1>User configuration</h1>
        </div>
        <div className="card-body">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="config-form">
                <div className="config-element">
                  <label htmlFor="first-name">First name</label>
                  <Field
                    value={configFirstName}
                    onChange={handleChange(changeConfigFirstName)}
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="last-name">Last name</label>
                  <Field
                    value={configLastName}
                    onChange={handleChange(changeConfigLastName)}
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="id-passport">ID or Passport</label>
                  <Field
                    value={configIdPassport}
                    onChange={handleChange(changeConfigIdPassport)}
                    type="text"
                    id="id-passport"
                    name="id-passport"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="account">Account</label>
                  <Field
                    value={configAccount}
                    onChange={handleChange(changeConfigAccount)}
                    type="text"
                    id="account"
                    name="account"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="email">Email</label>
                  <Field
                    value={configEmail}
                    onChange={handleChange(changeConfigEmail)}
                    type="text"
                    id="email"
                    name="email"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="password">Password</label>
                  <Field
                    value={configPassword}
                    onChange={handleChange(changeConfigPassword)}
                    type="text"
                    id="password"
                    name="password"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="avatar">Avatar</label>
                  <Field
                    value={configAvatar}
                    onChange={handleChange(changeConfigAvatar)}
                    type="text"
                    id="avatar"
                    name="avatar"
                    className="config-field"
                  />
                </div>
              </div>
              <div className="card-footer">
                <button className="config-update-button" type="submit">
                  Update information <i className="fas fa-chevron-right" />
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ConfigFormik;
