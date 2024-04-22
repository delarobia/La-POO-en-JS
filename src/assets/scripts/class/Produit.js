class Produit {
    constructor(attributs) {
        this._id = 0;
        this._nom = "";
        this._prixHT = 0;
        this._tauxTVA = 0;
        let { id, nom, prixHT, tauxTVA } = attributs;
        this.id = id;
        this.nom = nom;
        this.prixHT = prixHT;
        this.tauxTVA = tauxTVA;
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
    get prixHT() {
        return this._prixHT;
    }
    set prixHT(value) {
        if (value >= 0 && value <= 10000) {
            this._prixHT = value;
        }
        else {
            throw new RangeError(`Le prix doit être ${value < 0 ? "supérieur à 0" : "inférieus à 10 000"} €`);
        }
    }
    get tauxTVA() {
        return this._tauxTVA;
    }
    set tauxTVA(value) {
        switch (value) {
            case 2.1:
            case 5.5:
            case 10:
            case 20:
                this._tauxTVA = value;
                break;
            default:
                throw new RangeError(`Le taux de TVA doit être de 2.1%, 5.5%, 10% ou 20%`);
        }
    }
    getPrixTTC() {
        return this.prixHT * (1 + this.tauxTVA / 100);
    }
    getPrixTVA() {
        return this.prixHT * (this.tauxTVA / 100);
    }
    getDescription() {
        console.log(`${this.nom} (${this.id}) : ${this.getPrixTTC().toFixed(2)} € (dont TVA ${this.getPrixTVA().toFixed(2)} €)`);
    }
}
export default Produit;
