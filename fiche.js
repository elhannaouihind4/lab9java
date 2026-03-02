// 1.4
const bonifiees = notes.map(n => Math.min(n + 1, 20));
const admissibles = notes.filter(n => n >= 10);
const moyenne = notes.reduce((a, n) => a + n, 0) / notes.length;
const premiereFaible = notes.find(n => n < 10);
const aMentionTB = notes.some(n => n >= 18);
const toutesAdmissibles = notes.every(n => n >= 10);

// 3.1
const titres = livres.map(l => l.titre);
const enStock = livres.filter(l => l.stock > 0);
const valeurStock = livres.reduce((acc, l) => acc + l.prix * l.stock, 0);
const plusAncien = livres.reduce((min, l) => (l.annee < min.annee ? l : min));
const plusRecent = livres.reduce((max, l) => (l.annee > max.annee ? l : max));

// 4. CRUD
const lister = ls => [...ls].sort((a, b) => a.titre.localeCompare(b.titre));
const genererId = ls => (ls.length ? Math.max(...ls.map(l => l.id ?? 0)) + 1 : 1);
const ajouter = (ls, livre) => [...ls, { ...livre, id: livre.id ?? genererId(ls) }];
const maj = (ls, id, patch) => ls.map(l => (l.id === id ? { ...l, ...patch } : l));
const supprimer = (ls, id) => ls.filter(l => l.id !== id);
const rechercher = (ls, q) => {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return ls.filter(l => l.titre.toLowerCase().includes(s) || l.auteur.toLowerCase().includes(s));
};