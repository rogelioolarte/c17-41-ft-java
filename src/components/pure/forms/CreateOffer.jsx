import { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../../styles/styleDashboard.scss'

import { obtainProduct, sendOffer } from '../../../services/dashboardService';
import ArrowLeftRight from '../ArrowLeftRight';
import { LIST_PRODUCTS } from "../../../mocks/products.mocks";

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

    // Función para enviar el formulario
    const handleSubmit = (values, { setSubmitting }) => {
        // Aquí puedes manejar la lógica de envío del formulario
        if(sendOffer(JSON.stringify(values))){
            alert('Request send correctly')
        }
        alert(JSON.stringify(values));
        setSubmitting(false);
    };

    const [products, setProducts] = useState([]);
    const listOfCurrencies = products.length !==0 ? products : LIST_PRODUCTS;

    useEffect(() => {
        obtainProduct().then((data)=> {
            data.length !== 0 ? setProducts(data):setProducts([])
        })
    },[])

    const calculateCrypto = (amount, typeCurrency) => {
        return  listOfCurrencies != [] ? 
            amount / JSON.stringify(listOfCurrencies
                .find(value => value.productName == typeCurrency).currentPrice)
            : amount
    }

    return (
        <div className='forms-adjust-init' >
        <h1 className="title-create-offer" >Create an offer</h1>
        <Formik initialValues={initialValues} 
            validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values }) => (
            <Form className='forms-area-init' >
            <h1 className="title-form-init" >Select your currency</h1>
            {listOfCurrencies.map((currency, index) => (
                <div className="form-check form-check-inline" key={index}>
                <Field className="form-check-input" type="radio" name="typeOfCurrency" 
                    id={currency.productName} value={currency.productName} />
                <label className="form-check-label" htmlFor={currency.productName}>
                    {currency.productName.charAt(0).toUpperCase() + 
                        currency.productName.slice(1).toLowerCase()}
                </label>
                </div>
            ))}
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
                <i>{values.typeOfCurrency != '' ? 
                    calculateCrypto(values.amountOfOffer, values.typeOfCurrency)
                    : values.amountOfOffer}</i>
            </div>
            <button type="submit" className="btn btn-primary submit-button-init">Submit</button>
            </Form>
        )}
        </Formik>
        </div>
    )
}

export default CreateOffer;
