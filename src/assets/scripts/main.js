import Animal from "./class/Animal.js";
import BankAccount from "./class/BankAccount.js";
import Personne from "./class/Personne.js";
import Rectangle from "./class/Rectangle.js";
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
debugger;
