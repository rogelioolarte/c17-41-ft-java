export class User {
    id = null
    firstName = '';
    lastName = '';
    dni = '';
    email = '';
    urlAvatar = '';
    dollarAccount = '';
    wallet = null;
    currencyList = null;

    /**
     * Create an User
     * @param {*} name Name of the User
     * @param {*} lastName Last Name of the User
     * @param {*} dni Number of ID
     * @param {*} email Email of the User
     * @param {*} password Password of the User
     * @param {*} urlAvatar Url of the image for the avatar
     * @param {*} dollarAccount Amount of the dollars in the account
     */
    constructor(id, firstName, lastName, dni, email, urlAvatar, dollarAccount, wallet, currencyList){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.email = email;
        this.urlAvatar = urlAvatar;
        this.dollarAccount = dollarAccount;
        this.wallet = wallet;
        this.currencyList = currencyList;
    }
}