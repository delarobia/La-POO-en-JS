class Employe {
    constructor(attributs) {
        this._id = 0;
        this._nom = "";
        this._prenom = "";
        this._salaireMensuel = 0;
        let { id, nom, prenom, salaireMensuel } = attributs;
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.salaireMensuel = salaireMensuel;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(value) {
        this._prenom = value;
    }
    get salaireMensuel() {
        return this._salaireMensuel;
    }
    set salaireMensuel(value) {
        if (value >= 1398.7 && value < 100000) {
            this._salaireMensuel = value;
        }
        else {
            throw new RangeError(`Le salaire renseigné est ${value < 1398.7 ? "inférieur au SMIC" : "supérieur à 100 000 €"}`);
        }
    }
    getSalaireAnnuel() {
        return this.salaireMensuel * 12;
    }
    getEmployeConsole() {
        console.log(`Prénom : ${this.prenom}, Nom : ${this.nom}, Salaire annuel : ${this.getSalaireAnnuel()}`);
    }
}
export default Employe;
