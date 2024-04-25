import Employe from "./Employe.js";
class Manager extends Employe {
    constructor(attributs) {
        const { id, nom, prenom, indice } = attributs;
        super({ id, nom, prenom, salaireMensuel: Employe.SMIC });
        this._indice = 0;
        this.indice = indice;
        this.salaireMensuel = this.setSalaire();
    }
    get indice() {
        return this._indice;
    }
    set indice(value) {
        if (Number.isInteger(value)) {
            if (value >= 10 && value <= 30) {
                this._indice = value;
            }
            else {
                throw new RangeError(`L'indice doit être compris entre 10 et 30`);
            }
        }
        else {
            throw new Error("Seuls les entiers son autorisés");
        }
    }
    setSalaire() {
        return Employe.SMIC * (1 + this.indice / 10);
    }
    getEmployeConsole() {
        console.log(`Ouvrier Prénom : ${this.prenom}, Nom : ${this.nom}, Salaire annuel : ${this.getSalaireAnnuel()} \n Indice : ${this.indice.toLocaleString('fr')}`);
    }
}
export { Manager };
