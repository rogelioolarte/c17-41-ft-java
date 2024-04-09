/* import { TOKEN } from "../config/token"; */
/* import { MAIN_API, ROUTE_GET_PRODUCTS, ROUTE_SEND_OFFER } from '../config/api_routes' */

export const obtainProduct = async () => {
    return await fetch(`http://localhost:8080/api/currency/all`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            /* 'token': JSON.stringify(TOKEN) */
        },
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch users');
            console.log('Response from service:', response);
            return JSON.stringify(response.body)
        })
        .then(response => console.log(response.data))
        .catch((error) => console.error(`Error: ${error}`))
        .finally(()=>console.info('Request of products finished'))
}
export const sendOffer = async (data) => {
    return await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                /* 'token': JSON.stringify(TOKEN) */
            },
            body: JSON.stringify(data)
        })
        .then((response) => { response.ok ? true : false })
        .catch((error) => console.log(`Error. ${error}`) )
        .finally(() => console.info('Sending offer finished') )
}