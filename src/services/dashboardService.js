/* import { TOKEN } from "../config/token"; */
import { MAIN_API, ROUTE_GET_PRODUCTS, ROUTE_SEND_OFFER } from '../config/api_routes'

export const obtainProduct = async () => {
    return await fetch(MAIN_API.length !== 0 ? 
        MAIN_API.concat(ROUTE_GET_PRODUCTS) : `https://reqres.in/api/users?page=1`, {
        method: 'GET',
        redirect: "follow",
        headers: {
            'Content-Type': 'application/json',
            /* 'token': JSON.stringify(TOKEN) */
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .catch((error) => console.error(`Error: ${error}`))
        .finally(()=>console.info('Request of products finished'))
}

export const sendOffer = async (data) => {
    return await fetch(MAIN_API.length !== 0 ?  
        MAIN_API.concat(ROUTE_SEND_OFFER) : 'https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                /* 'token': JSON.stringify(TOKEN) */
            },
            body: JSON.stringify(data)
        })
        .then((response) => { response.ok ? true : false })
        .catch((error) => console.log(`Error: ${error}`))
        .finally(() => console.info('Sending offer finished'))
}