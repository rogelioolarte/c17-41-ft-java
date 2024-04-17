import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../../styles/styleDashboard.scss'

import { obtainProduct, sendOffer } from '../../../services/dashboardService';
import ArrowLeftRight from '../ArrowLeftRight';
import { UserContext } from '../../../contexts/user.context';

// Define a validation schema with yup
const validationSchema = Yup.object().shape({
    typeOfCurrency: Yup.string().required('El tipo de moneda es requerido'),
    typeOfOffer: Yup.string().required('El tipo de oferta es requerido'),
    amountOfOffer: Yup.number().required('La cantidad es requerida')
        .positive('La cantidad debe ser positiva'),
});
// Inicial values for formik
const initialValues = { typeOfCurrency: '', typeOfOffer: '', amountOfOffer: 0 };


function CreateOffer() {

    const { loggedUser } = useContext(UserContext);

    // Función para enviar el formulario
    const handleSubmit = (values, { setSubmitting }) => {
        // Aquí puedes manejar la lógica de envío del formulario
        const id = loggedUser.getId();
        const crypto = findCrypto(values.typeOfCurrency).cryptoId;
        const quantity = values.amountOfOffer / findCrypto(values.typeOfCurrency).currentPrice;
        let newData = '';
        if(values.typeOfOffer === 'buy'){
            newData = sendOffer({ "userId": id, "currencyId": crypto, "quantity": quantity }, 'buy')
        } else if(values.typeOfOffer === 'sell'){
            newData = sendOffer({ "userId": id, "currencyId": crypto, "quantity": quantity }, 'sell')
        } else {
            newData = 'An error while send the offer has ocurred'
        }
        console.log(newData);
        setSubmitting(false);
    };

    const [products, setProducts] = useState([]);
    let listOfCurrencies = products.length !==0 ? products : [];

    useEffect(() => {
        obtainProduct().then((data)=> {
            data.length !== 0 ? setProducts(data) : setProducts([])
        })
    },[])

    const findCrypto = (typeCurrency) => {
        return  listOfCurrencies.length !== 0 ? 
            listOfCurrencies.find(value => value.productName === typeCurrency)
            : 'Not found currency'
    }

    return (
        <div className='forms-adjust-init' >
        <h1 className="title-create-offer" >Buy a Crypto Currency</h1>
        <Formik initialValues={initialValues} 
            validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
            <Form className='forms-area-init' >
            <h1 className="title-form-init" >Select your currency</h1>
            <select name="typeOfCurrency" className="form-select" 
                onChange={handleChange} 
                value={values.typeOfCurrency}>
                <option value="">Select your currency</option>
                {listOfCurrencies.map((currency, index) => (
                <option key={index} value={currency.productName}>{currency.productName} - {currency.currentPrice} USD per Crypto</option>
                ))}
            </select>
            <ErrorMessage name="typeOfCurrency" component="div" className="invalid-feedback" />

            <h1 className="title-form-init"  >Select the type of the offer</h1>
            <div className="form-check form-check-inline" >
                <Field className="form-check-input" type="radio" name="typeOfOffer" 
                    id="buy" value="buy" />
                <label className="form-check-label" htmlFor="buy">Buy</label>
            </div>
            <div className="form-check form-check-inline " >
                <Field className="form-check-input" type="radio" name="typeOfOffer" 
                    id="sell" value="sell" />
                <label className="form-check-label" htmlFor="sell">Sell</label>
            </div>
            <ErrorMessage name="typeOfOffer" component="div" className="invalid-feedback" />
            <h1 className="title-form-init "  >Select the amount to offer</h1>
            <div className="mb-1 ">
                <label htmlFor="amountOfOffer" className="form-label icon-init">USD</label>
                <Field type="number" className="form-control-sm" id="amountOfOffer" 
                    name="amountOfOffer" />
                <ErrorMessage name="amountOfOffer" component="div" className="invalid-feedback" />
                <ArrowLeftRight/>
                <i>{ values.typeOfCurrency.length !== 0 ? 
                        values.amountOfOffer / findCrypto(values.typeOfCurrency).currentPrice
                    : values.amountOfOffer} 
                    { values.typeOfCurrency.length !== 0 ? 
                        findCrypto(values.typeOfCurrency).symbol : ''}</i>
            </div>
            <button type="submit" className="btn btn-primary submit-button-init">Submit</button>
            </Form>
        )}
        </Formik>
        </div>
    )
}

export default CreateOffer;
