export class User {
    name = '';
    lastName = '';
    dni = '';
    email = '';
    password = '';
    urlAvatar = '';
    dollarAccount = '';

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
    constructor(name, lastName, dni, email, password, urlAvatar, dollarAccount){
        this.name = name;
        this.lastName = lastName;
        this.dni = dni;
        this.email = email;
        this.password = password;
        this.urlAvatar = urlAvatar;
        this.dollarAccount = dollarAccount;
    }
}