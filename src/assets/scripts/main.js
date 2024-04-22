import Animal from "./class/Animal.js";
import BankAccount from "./class/BankAccount.js";
import Employe from "./class/Employe.js";
import Personne from "./class/Personne.js";
import Produit from "./class/Produit.js";
import Rectangle from "./class/Rectangle.js";
import { Vehicule, Voiture } from "./class/Vehicule.js";
// *Personnes
let p1 = new Personne({ name: "Alexandre", age: 30, country: "France" });
p1.showConsole();
let p2 = new Personne({ name: "Daniel", age: 1, country: "Grande-Bretagne" });
p2.showConsole();
// *Rectangle
let r1 = new Rectangle(8, 3);
r1.infosConsole();
// *BankAccount
let b1 = new BankAccount({ accountNumber: 1, balance: 1000, owner: "Alex" });
b1.deposit(120);
b1.withdraw(100);
b1.showConsole();
let b2 = new BankAccount({
    accountNumber: 12345,
    balance: 50000,
    owner: "Juju",
});
b2.deposit(1881);
b2.withdraw(20);
b2.showConsole();
b2.transfert(10000, b1);
// ? PDF 2
let a1 = new Animal({ id: 1, race: "chien", poids: 75 });
a1.crier();
let e1 = new Employe({
    id: 1,
    nom: "Terrier",
    prenom: "Alex",
    salaireMensuel: 2500,
});
e1.getEmployeConsole();
let e2 = new Employe({
    id: 2,
    nom: "Sabat",
    prenom: "Sam",
    salaireMensuel: 10000,
});
e2.getEmployeConsole();
let pr1 = new Produit({ id: 1, nom: "Costume", prixHT: 10, tauxTVA: 10 });
pr1.getDescription();
let veh = new Vehicule({ modele: "test", marque: "audi", annee: 2005 });
let voit = new Voiture({ modele: "test", marque: "audi", annee: 2055, nombrePortes: 5 });
debugger;
