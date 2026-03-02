const livres = [
  { id: 1, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, stock: 3, prix: 35.5 },
  { id: 2, titre: "You Don’t Know JS", auteur: "Kyle Simpson", annee: 2015, stock: 0, prix: 28.0 },
  { id: 3, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, stock: 5, prix: 32.9 },
  { id: 4, titre: "JavaScript: The Good Parts", auteur: "Douglas Crockford", annee: 2008, stock: 2, prix: 22.0 },
];

const titres = livres.map(l => l.titre);
const enStock = livres.filter(l => l.stock > 0);
const valeurStock = livres.reduce((acc, l) => acc + l.prix * l.stock, 0);
const plusAncien = livres.reduce((min, l) => (l.annee < min.annee ? l : min));
const plusRecent = livres.reduce((max, l) => (l.annee > max.annee ? l : max));
console.log({ titres, enStock, valeurStock, plusAncien, plusRecent });

const livre3 = livres.find(l => l.id === 3);
const livresMaj = livres.map(l => (l.id === 2 ? { ...l, stock: l.stock + 1 } : l));
console.log(livre3, livresMaj);

const parAnnee = livres.reduce((acc, l) => {
  (acc[l.annee] ||= []).push(l);
  return acc;
}, {});
console.log(parAnnee);