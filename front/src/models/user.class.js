export class User {
  id;
  firstName;
  lastName;
  idPassport;
  email;
  avatar;
  account;
  wallet;
  currencyList;
  lastMessage;

  /**
   * Create a User
   * @param {*} name first name of the User
   * @param {*} lastName Last Name of the User
   * @param {*} idPassport ID or passport number
   * @param {*} email Email of the User
   * @param {*} password Password of the User
   * @param {*} avatar Url of the image for the avatar
   * @param {*} account Amount of currency in the account
   */

  constructor() {
    this.id = "";
    this.firstName = "";
    this.lastName = "";
    this.idPassport = "";
    this.email = "";
    this.avatar = "";
    this.account = "";
    this.wallet = null;
    this.currencyList = null;
    this.lastMessage = "";
  }

  assignValues(
    id,
    firstName,
    lastName,
    idPassport,
    email,
    avatar,
    account,
    wallet,
    currencyList,
    lastMessage,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.idPassport = idPassport;
    this.email = email;
    this.avatar = avatar;
    this.account = account;
    this.wallet = wallet;
    this.currencyList = currencyList;
    this.lastMessage = lastMessage;
  }

  getId() {
    return this.id;
  }
}
