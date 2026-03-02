
const livresInitiaux = [
  { id: 1, titre: "Clean Code", auteur: "Robert Martin", annee: 2008, stock: 5, prix: 35 },
  { id: 2, titre: "Pragmatic Programmer", auteur: "David Thomas", annee: 1999, stock: 2, prix: 45 },
  { id: 3, titre: "Design Patterns", auteur: "Erich Gamma", annee: 1994, stock: 3, prix: 55 },
  { id: 4, titre: "Clean Architecture", auteur: "Robert Martin", annee: 2017, stock: 4, prix: 38 }
];


function lister(livres) {
  return [...livres].sort((a, b) => a.titre.localeCompare(b.titre));
}

function genererId(livres) {
  return livres.length ? Math.max(...livres.map(l => l.id ?? 0)) + 1 : 1;
}

function ajouter(livres, livre) {
  const id = livre.id ?? genererId(livres);
  return [...livres, { ...livre, id }];
}

function maj(livres, id, patch) {
  return livres.map(l => (l.id === id ? { ...l, ...patch } : l));
}

function supprimer(livres, id) {
  return livres.filter(l => l.id !== id);
}

function rechercher(livres, q) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return livres.filter(l => 
    l.titre.toLowerCase().includes(s) || 
    l.auteur.toLowerCase().includes(s)
  );
}


console.log("Demonstration\n");


let etat = [...livresInitiaux];
console.log("État initial:");
console.log(etat.map(l => `ID ${l.id}: ${l.titre} - ${l.auteur}`));
console.log(`Nombre de livres: ${etat.length}\n`);


console.log(" lister() [tri par titre]:");
const livresTries = lister(etat);
console.log(livresTries.map(l => `${l.titre}`));
console.log(`Vérification: Le premier livre est "${livresTries[0].titre}" (doit être Clean Architecture)\n`);


console.log("ajouter() [sans ID spécifié]:");
etat = ajouter(etat, { 
  titre: "Refactoring", 
  auteur: "Martin Fowler", 
  annee: 1999, 
  stock: 4, 
  prix: 40 
});
console.log("Livre ajouté avec ID auto-généré:", etat[etat.length - 1]);
console.log(`Nouveau nombre de livres: ${etat.length} (doit être 5)\n`);


console.log(" ajouter() [avec ID spécifié]:");
etat = ajouter(etat, { 
  id: 10,
  titre: "The Mythical Man-Month", 
  auteur: "Fred Brooks", 
  annee: 1975, 
  stock: 2, 
  prix: 42 
});
console.log("Livre ajouté avec ID 10:", etat.find(l => l.id === 10));
console.log(`Nombre de livres: ${etat.length} (doit être 6)\n`);


console.log(" maj() [mise à jour du stock]:");
const livreAvantMaj = etat.find(l => l.id === 2);
console.log(`Livre ID 2 avant mise à jour: stock=${livreAvantMaj.stock}`);

const nouvelEtat = maj(etat, 2, { stock: 3, prix: 47 });
console.log(`Livre ID 2 après mise à jour: stock=${nouvelEtat.find(l => l.id === 2).stock}`);
console.log(`Vérification d'immutabilité: ${etat.find(l => l.id === 2).stock === 2 ? '✓ original inchangé' : '✗ original modifié'}`);
etat = nouvelEtat;


console.log("\n supprimer() [suppression ID 4]:");
console.log("Livres avant suppression:", etat.map(l => l.id).sort((a,b) => a-b));
etat = supprimer(etat, 4);
console.log("Livres après suppression:", etat.map(l => l.id).sort((a,b) => a-b));
console.log(`ID 4 présent? ${etat.some(l => l.id === 4) ? 'Oui' : 'Non'} (doit être Non)\n`);


console.log(" rechercher():");
console.log("Recherche 'martin' (insensible à la casse):");
const resultatsMartin = rechercher(etat, "martin");
console.log("Résultats:", resultatsMartin.map(l => `${l.titre} - ${l.auteur}`));
console.log(`"Clean Code" trouvé? ${resultatsMartin.some(l => l.titre === "Clean Code") ? 'Oui' : 'Non'}`);
console.log(`"Martin Fowler" trouvé? ${resultatsMartin.some(l => l.auteur === "Martin Fowler") ? 'Oui' : 'Non'}`);

console.log("\nRecherche 'clean':");
const resultatsClean = rechercher(etat, "clean");
console.log("Résultats:", resultatsClean.map(l => `${l.titre} - ${l.auteur}`));


