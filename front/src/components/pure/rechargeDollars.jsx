import { useContext, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../contexts/user.context';
import { rechargeWallet } from '../../services/dashboardService';
import '../../styles/styleDashboard.scss'

// Define a validation schema with Yup
const validationSchema = Yup.object().shape({
    amountToRecharge: Yup.number().required('La cantidad es requerida')
        .positive('La cantidad debe ser positiva'),
});

// Initial values for Formik
const initialValues = { amountToRecharge: 0 };

function RechargeDollars() {
    const { loggedUser, assignUserInfo } = useContext(UserContext);

    // Function to handle form submission
    const handleSubmit = (values, { setSubmitting }) => {
        let newData = rechargeWallet(loggedUser.getId(), values.amountToRecharge)
        assignUserInfo(loggedUser.id, loggedUser.firstName, 
            loggedUser.lastName, loggedUser.idPassport, 
            loggedUser.email, loggedUser.avatar, 
            loggedUser.account, newData.wallet, loggedUser.currencyList)
        alert(newData)
        setSubmitting(false);
    };

    useEffect( () => {
    } ,[loggedUser])


    return (
        <div className='forms-adjust-init container-recharge' >
            <h1 className="title-create-offer">Recharge Dollars</h1>
            <Formik initialValues={initialValues} 
                validationSchema={validationSchema} onSubmit={handleSubmit}>
                {() => (
                    <Form className='forms-area-init'>
                        <h1 className="title-form-init">Enter the amount to recharge</h1>
                        <div className="mb-1">
                            <label htmlFor="amountToRecharge" className="form-label icon-init">USD</label>
                            <Field type="number" className="form-control-sm" id="amountToRecharge" 
                                name="amountToRecharge" />
                            <ErrorMessage name="amountToRecharge" component="div" className="invalid-feedback" />
                        </div>
                        <button type="submit" className="btn btn-primary submit-button-init">Recharge</button>
                    </Form>
                )}
            </Formik>
            <p className='note-init'>Note: Every amount that you recharge will be send to your personal account of your bank.</p>
        </div>
    );
}

export default RechargeDollars;
