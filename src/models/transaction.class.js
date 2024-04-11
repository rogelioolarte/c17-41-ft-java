import { Currency } from "./currency.class";

export class Transaction {
    product = Currency;
    date = Date;
    quantity = 0;

    /**
     * Create a transaction
     * @param {*} product Currency Object of the transaction
     * @param {*} date Date time of the transsaction
     * @param {*} quantity Quantity of the transaction
     */
    constructor(product, date, quantity){
        this.product = product;
        this.date = date;
        this.quantity = quantity;
    }
}