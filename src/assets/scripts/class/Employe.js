class Employe {
    constructor(attributs) {
        this._employe = {
            id: 0,
            nom: "",
            prenom: "",
            salaireMensuel: 0,
        };
        let { id, nom, prenom, salaireMensuel } = attributs;
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.salaireMensuel = salaireMensuel;
    }
    get id() {
        return this._employe.id;
    }
    set id(value) {
        this._employe.id = value;
    }
    get nom() {
        return this._employe.nom;
    }
    set nom(value) {
        this._employe.nom = value;
    }
    get prenom() {
        return this._employe.prenom;
    }
    set prenom(value) {
        this._employe.prenom = value;
    }
    get salaireMensuel() {
        return this._employe.salaireMensuel;
    }
    set salaireMensuel(value) {
        if (value >= Employe.getSMIC() && value < 100000) {
            this._employe.salaireMensuel = value;
        }
        else {
            throw new RangeError(`Le salaire renseigné est ${value < Employe.getSMIC()
                ? "inférieur au SMIC"
                : "supérieur à 100 000 €"}`);
        }
    }
    static getSMIC() {
        return 1398.7;
    }
    getSalaireAnnuel() {
        return this.salaireMensuel * 12;
    }
    getEmployeConsole() {
        console.log(`Employé Prénom : ${this.prenom}, Nom : ${this.nom}, Salaire annuel : ${this.getSalaireAnnuel()}`);
    }
}
Employe.SMIC = 1398.7;
export default Employe;
