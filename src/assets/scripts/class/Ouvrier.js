import Employe from "./Employe.js";
class Ouvrier extends Employe {
    constructor(attributs) {
        const { id, nom, prenom, entryDate } = attributs;
        super({ id, nom, prenom, salaireMensuel: Employe.SMIC });
        this._entrydate = new Date();
        this.entrydate = entryDate;
        this.salaireMensuel = this.setSalaire();
    }
    get entrydate() {
        return this._entrydate;
    }
    set entrydate(value) {
        this._entrydate = value;
    }
    setSalaire() {
        let salaire = Employe.SMIC + (this.getAncienete() * 75);
        if (salaire > Employe.SMIC * 2) {
            salaire = Employe.SMIC * 2;
        }
        return salaire;
    }
    // TODO : Work on a better method
    getAncienete() {
        let today = new Date();
        return (today.getFullYear() - this.entrydate.getFullYear());
    }
    getEmployeConsole() {
        console.log(`Ouvrier Prénom : ${this.prenom}, Nom : ${this.nom}, Salaire annuel : ${this.getSalaireAnnuel()} \n Entrée dans l'entreprise : ${this.entrydate.toLocaleString('fr')}`);
    }
}
export { Ouvrier };
