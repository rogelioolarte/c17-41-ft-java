import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LIST_PRODUCTS } from "../../../mocks/products.mocks";
import ArrowLeftRight from '../ArrowLeftRight';
import '../../../styles/styleDashboard.scss'

const listOfCurrencies = LIST_PRODUCTS;

const initialValues = { typeOfCurrency: '', typeOfOffer: '', amountOfOffer: 0 };

// Definir esquema de validación Yup
const validationSchema = Yup.object().shape({
  typeOfCurrency: Yup.string().required('El tipo de moneda es requerido'),
  typeOfOffer: Yup.string().required('El tipo de oferta es requerido'),
  amountOfOffer: Yup.number().required('La cantidad es requerida')
    .positive('La cantidad debe ser positiva').nonNullable(),
});

function CreateOffer() {

  // Función para enviar el formulario
  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes manejar la lógica de envío del formulario
    alert(JSON.stringify(values));
    setSubmitting(false);
  };

  return (
    <div >
      <h1 className="title-create-offer" >Create an offer</h1>
      <Formik initialValues={initialValues} 
        validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <h1 className="title-form-init" >Select your currency</h1>
          {listOfCurrencies.map((currency, index) => (
            <div className="form-check form-check-inline label-init" key={index}>
              <Field className="form-check-input" type="radio" name="typeOfCurrency" id={currency.name} value={currency.name} />
              <label className="form-check-label" htmlFor={currency.name}>
                {currency.name.charAt(0).toUpperCase() + currency.name.slice(1).toLowerCase()}
              </label>
            </div>
          ))}
          <ErrorMessage name="typeOfCurrency" component="div" className="invalid-feedback" />

          <h1 className="title-form-init"  >Select the type of the offer</h1>
          <div className="form-check form-check-inline label-init" >
            <Field className="form-check-input" type="radio" name="typeOfOffer" id="buy" value="buy" />
            <label className="form-check-label" htmlFor="buy">Buy</label>
          </div>
          <div className="form-check form-check-inline label-init" >
            <Field className="form-check-input" type="radio" name="typeOfOffer" id="sell" value="sell" />
            <label className="form-check-label" htmlFor="sell">Sell</label>
          </div>
          <ErrorMessage name="typeOfOffer" component="div" className="invalid-feedback" />

          <h1 className="title-form-init"  >Select the amount to offer</h1>
          <div className="mb-1 form-check-inline label-init">
            <label htmlFor="amountOfOffer" className="form-label icon-init">USD</label>
            <Field type="number" className="form-control-sm" id="amountOfOffer" name="amountOfOffer" />
            <ErrorMessage name="amountOfOffer" component="div" className="invalid-feedback" />
            <ArrowLeftRight/>
          <i> {values.typeOfCurrency != '' ? (values.amountOfOffer * JSON.stringify(listOfCurrencies
            .find(value => value.name == values.typeOfCurrency).price))
              : values.amountOfOffer} {values.typeOfCurrency}</i>
          </div>
          <button type="submit" className="btn btn-primary submit-button-init">Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default CreateOffer;
