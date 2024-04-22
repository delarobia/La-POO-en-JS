class Rectangle {
    constructor(longueur, hauteur) {
        this._longueur = longueur;
        this._hauteur = hauteur;
    }
    get longueur() {
        return this._longueur;
    }
    set longueur(value) {
        this._longueur = value;
    }
    get hauteur() {
        return this._hauteur;
    }
    set hauteur(value) {
        this._hauteur = value;
    }
    perimetre() {
        return 2 * this._hauteur + 2 * this._longueur;
    }
    aire() {
        return this._hauteur * this._longueur;
    }
    infosConsole() {
        console.log(`Un rectangle de longueur ${this._longueur} et de largueur ${this._hauteur} a un périmètre de ${this.perimetre()} cm et une aire de ${this.aire()} cm²`);
    }
}
export default Rectangle;
