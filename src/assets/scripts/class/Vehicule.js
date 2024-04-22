class Vehicule {
    constructor(attributs) {
        this._marque = "";
        this._modele = "";
        this._annee = 0;
        const { marque, modele, annee } = attributs;
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    get marque() {
        return this._marque;
    }
    set marque(value) {
        this._marque = value;
    }
    get modele() {
        return this._modele;
    }
    set modele(value) {
        this._modele = value;
    }
    get annee() {
        return this._annee;
    }
    set annee(value) {
        let ladate = new Date(Date.now());
        if (value > 1889 && value <= ladate.getFullYear()) {
            this._annee = value;
        }
        else {
            throw new RangeError(`L'année n'est pas une année disonible pour une voiture.`);
        }
    }
}
class Voiture extends Vehicule {
    constructor(attributs) {
        let { marque, modele, annee, nombrePortes } = attributs;
        super({ marque, modele, annee });
        this._nombrePortes = 3;
        this.nombrePortes = nombrePortes;
    }
    get nombrePortes() {
        return this._nombrePortes;
    }
    set nombrePortes(value) {
        this._nombrePortes = value;
    }
}
export { Vehicule, Voiture };
