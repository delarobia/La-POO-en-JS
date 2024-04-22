class BankAccount {
    // Constructeur
    constructor(attributes) {
        // Attributs
        this._accountNumber = 0;
        this._balance = 0;
        this._owner = "";
        const { accountNumber, balance, owner } = attributes;
        this.accountNumber = accountNumber;
        this._balance = balance;
        this.owner = owner;
    }
    // Accesseurs
    get accountNumber() {
        return this._accountNumber;
    }
    set accountNumber(v) {
        this._accountNumber = v;
    }
    get balance() {
        return this._balance;
    }
    get owner() {
        return this._owner;
    }
    set owner(v) {
        this._owner = v;
    }
    // Méthodes
    deposit(amount) {
        this._balance += amount;
        console.warn(`Nouveau solde : ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this._balance -= amount;
            console.warn(`Nouveau solde : ${this.balance}`);
        }
        else {
            throw new Error("Solde insufisant");
        }
    }
    transfert(amount, anotherAccount) {
        this.withdraw(amount);
        anotherAccount.deposit(amount);
    }
    showConsole() {
        console.info(`Compte n°${this.accountNumber} : solde ${this.balance} €, Propriétaire : ${this.owner}`);
    }
}
export default BankAccount;
