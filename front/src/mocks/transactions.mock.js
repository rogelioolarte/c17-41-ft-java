export const LIST_TRANSACTIONS = [
    { 
        "product":{
            "cryptoId": 0,
            "symbol": "BTC",
            "productName": "Bitcoin",
            "currentPrice": 69039.11,
            "previousPrice": 60754.4168,
            "lastUpdate": "2024-04-09T20:48:24.656+00:00"
    }, 
        "date": "2024-04-09T20:48:24.656+00:00",
        "quantity": 3.45
    },
    { 
        "product":{
            "cryptoId": 1,
            "symbol": "ETH",
            "productName": "Ethereum",
            "currentPrice": 3517.82,
            "previousPrice": 3306.7508,
            "lastUpdate": "2024-04-09T20:48:24.656+00:00"
    }, 
        "date": "2024-04-09T20:48:24.656+00:00",
        "quantity": 8.45
    },
    { 
        "product":{
            "cryptoId": 5,
            "symbol": "USDC",
            "productName": "USD Coin",
            "currentPrice": 1,
            "previousPrice": 0.99,
            "lastUpdate": "2024-04-09T20:48:24.656+00:00"
    }, 
        "date": "2024-04-09T20:48:24.656+00:00",
        "quantity": 30.10
    }
    ,{ 
        "product":{
            "cryptoId": 3,
            "symbol": "BNB",
            "productName": "Binance Coin",
            "currentPrice": 580.58,
            "previousPrice": 487.6872,
            "lastUpdate": "2024-04-09T20:48:24.656+00:00"
    }, 
        "date": "2024-04-09T20:48:24.656+00:00",
        "quantity": 3.45
    }
]
// Generar 25 datos adicionales
const generateRandomData = () => {
    const newData = [];

    for (let i = 0; i < 35; i++) {
        // Generar datos aleatorios para cada transacción
        const cryptoId = Math.floor(Math.random() * 100);
        const productName = `Crypto ${cryptoId}`;
        const symbol = `SYM${cryptoId}`;
        const currentPrice = Math.random() * 10000;
        const previousPrice = Math.random() * 10000;
        const lastUpdate = new Date().toISOString();
        const date = new Date().toISOString();
        const quantity = Math.random() * 100;

        // Agregar nueva transacción a la lista
        newData.push({
            product: {
                cryptoId,
                symbol,
                productName,
                currentPrice,
                previousPrice,
                lastUpdate
            },
            date,
            quantity
        });
    }

    return newData;
};

const additionalData = generateRandomData();
export const allData = [...LIST_TRANSACTIONS, ...additionalData];
