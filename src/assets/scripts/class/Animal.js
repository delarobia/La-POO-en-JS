class Animal {
    constructor(attributs) {
        this._animal = { id: 0, race: "chat", poids: 0 };
        let { id, race, poids } = attributs;
        this.id = id;
        this.race = race;
        this.poids = poids;
    }
    get id() {
        return this._animal.id;
    }
    set id(v) {
        this._animal.id = v;
    }
    get race() {
        return this._animal.race;
    }
    set race(value) {
        this._animal.race = value;
    }
    get poids() {
        return this._animal.poids;
    }
    set poids(value) {
        if (value >= 0 && value < 100) {
            this._animal.poids = value;
        }
        else {
            throw new RangeError("Le poids saisi est invalide");
        }
    }
    crier() {
        console.log(`L'animal ${this.id} crie`);
    }
}
class Chat extends Animal {
    constructor(attributs) {
        super(attributs);
        this.race = "chat";
    }
    crier() {
        console.log(`Le chat ${this.id} miaule`);
    }
    marcher() {
        console.log(`Le chat ${this.id} marche`);
    }
}
class Oiseau extends Animal {
    constructor(attributs) {
        super(attributs);
        this.race = "oiseau";
    }
    crier() {
        console.log(`L'oiseau ${this.id} chante`);
    }
    voler() {
        console.log(`L'oiseau ${this.id} vole`);
    }
}
export { Chat, Oiseau };
