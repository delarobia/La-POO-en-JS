class Personne {
    constructor(someone) {
        this._name = "";
        this._age = 0;
        this._country = "";
        const { name, age, country } = someone;
        this.name = name;
        this.age = age;
        this.country = country;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 150) {
            this._age = value;
        }
        else {
            throw new Error("Age invalide");
        }
    }
    get country() {
        return this._country;
    }
    set country(value) {
        this._country = value;
    }
    showConsole() {
        console.log(`${this.name} a ${this.age} ${this.age > 1 ? "ans" : "an"} et viens de ${this.country}`);
    }
}
export default Personne;
