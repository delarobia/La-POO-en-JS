import { Manager } from "./class/Manager.js";
// *Personnes
// let p1 = new Personne({ name: "Alexandre", age: 30, country: "France" });
// p1.showConsole();
// let p2 = new Personne({ name: "Daniel", age: 1, country: "Grande-Bretagne" });
// p2.showConsole();
// // *Rectangle
// let r1 = new Rectangle(8, 3);
// r1.infosConsole();
// // *BankAccount
// let b1 = new BankAccount({ accountNumber: 1, balance: 1000, owner: "Alex" });
// b1.deposit(120);
// b1.withdraw(100);
// b1.showConsole();
// let b2 = new BankAccount({
//     accountNumber: 12345,
//     balance: 50000,
//     owner: "Juju",
// });
// b2.deposit(1881);
// b2.withdraw(20);
// b2.showConsole();
// b2.transfert(10000, b1);
// // ? PDF 2
// // let a1 = new Animal({ id: 1, race: "chien", poids: 75 });
// // a1.crier();
// let e1 = new Employe({
//     id: 1,
//     nom: "Terrier",
//     prenom: "Alex",
//     salaireMensuel: 2500,
// });
// e1.getEmployeConsole();
// let e2 = new Employe({
//     id: 2,
//     nom: "Sabat",
//     prenom: "Sam",
//     salaireMensuel: 10000,
// });
// e2.getEmployeConsole();
// let pr1 = new Produit({ id: 1, nom: "Costume", prixHT: 10, tauxTVA: 10 });
// pr1.getDescription();
// try {
//     let veh = new Vehicule({modele:"test",marque:"audi",annee:205})
//     let voit =  new Voiture({modele:"test",marque:"audi",annee:2008,nombrePortes:5})
// } catch (error) {
//     if (error instanceof RangeError){
//         console.warn(error.message)
//     }
// } 
// console.log("après l'erreur")
// ? PDF 3
// let a3 = new Chat({id:2, race:"oiseau",poids:4});
// a3.crier();
// a3.marcher();
// console.log(a3.race);
// let a4 = new Oiseau({id:2, race:"oiseau",poids:4});
// a4.crier();
// a4.voler();
// console.log(a4.race);
// let o1 = new Ouvrier({id:2,nom:"Sabat",prenom:"Sam",entryDate:new Date(2004,5,1)});
// o1.getEmployeConsole();
// console.log(o1.salaireMensuel)
let mana1 = new Manager({ id: 2, nom: "Sabat", prenom: "Sam", indice: 20 });
mana1.getEmployeConsole();
