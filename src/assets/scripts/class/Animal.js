class Animal {
    constructor(attributs) {
        this._id = 0;
        this._race = "chien";
        this._poids = 0;
        let { id, race, poids } = attributs;
        this._id = id;
        this.race = race;
        this.poids = poids;
    }
    get id() {
        return this._id;
    }
    get race() {
        return this._race;
    }
    set race(value) {
        this._race = value;
    }
    get poids() {
        return this._poids;
    }
    set poids(value) {
        if (value >= 0 && value < 100) {
            this._poids = value;
        }
        else {
            throw new Error("Le poids saisi est invalide");
        }
    }
    crier() {
        console.log(`L'animal ${this.id} crie`);
    }
}
export default Animal;
