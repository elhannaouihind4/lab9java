const etudiant = {
  prenom: "Lina",
  nom: "Durand",
  age: 21,
  notes: [14, 16, 12],
  moyenne() {
    const s = this.notes.reduce((a, n) => a + n, 0);
    return s / this.notes.length;
  }
};
console.log(etudiant.prenom);
console.log(etudiant["nom"]);
console.log(etudiant.moyenne());


etudiant.age = 22;
etudiant.filiere = "Informatique"; // ajout
delete etudiant.filiere;            // suppression
console.log(Object.keys(etudiant)); // ["prenom", "nom", "age", "notes", "moyenne"]


const { prenom, nom, ville = "(inconnue)" } = etudiant;
console.log(`${prenom} ${nom} — ${ville}`);

const base = { a: 1, b: 2 };
const extension = { b: 3, c: 4 };
const fusion = { ...base, ...extension }; // { a:1, b:3, c:4 }

function pickAB({ a, b, ...reste }) {
  return { a, b, reste };
}
console.log(pickAB({ a: 1, b: 2, c: 3, d: 4 }));

const o = { x: 10, y: 20 };
console.log(Object.keys(o));   // ["x","y"]
console.log(Object.values(o)); // [10,20]
console.log(Object.entries(o));// [["x",10],["y",20]]
const cop = Object.assign({}, o, { y: 30 });
console.log(cop);
console.log(o.hasOwnProperty("x"));