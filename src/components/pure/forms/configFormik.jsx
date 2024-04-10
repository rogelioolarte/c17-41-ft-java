import { Formik, Field, Form } from "formik";
import useString from "../../../../hooks/useString";
import "../../../styles/userConfigStyles.scss";

function ConfigFormik() {
  const [firstName, changeFirstName] = useString("");
  const [lastName, changeLastName] = useString("");
  const [idPassport, changeIdPassport] = useString("");
  const [email, changeEmail] = useString("");
  const [password, changePassword] = useString("");
  const [avatar, changeAvatar] = useString("");
  const [account, changeAccount] = useString("");

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

  return (
    <div className="config-section col-xl-8 col-md-10 col-12">
      <div className="card">
        <div className="card-header">
          <h1>User configuration</h1>
        </div>
        <div className="card-body">
          <Formik initialValues={initialValues}>
            <Form>
              <div className="config-form">
                <div className="config-element">
                  <label htmlFor="first-name">First name</label>
                  <Field
                    value={firstName}
                    onChange={handleChange(changeFirstName)}
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="last-name">Last name</label>
                  <Field
                    value={lastName}
                    onChange={handleChange(changeLastName)}
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="id-passport">ID or Passport</label>
                  <Field
                    value={idPassport}
                    onChange={handleChange(changeIdPassport)}
                    type="text"
                    id="id-passport"
                    name="id-passport"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="account">Account</label>
                  <Field
                    value={account}
                    onChange={handleChange(changeAccount)}
                    type="text"
                    id="account"
                    name="account"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="email">Email</label>
                  <Field
                    value={email}
                    onChange={handleChange(changeEmail)}
                    type="text"
                    id="email"
                    name="email"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="password">Password</label>
                  <Field
                    value={password}
                    onChange={handleChange(changePassword)}
                    type="text"
                    id="password"
                    name="password"
                    className="config-field"
                  />
                </div>
                <div className="config-element">
                  <label htmlFor="avatar">Avatar</label>
                  <Field
                    value={avatar}
                    onChange={handleChange(changeAvatar)}
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
