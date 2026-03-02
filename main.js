const fruits = ["pomme", "banane", "poire"];
console.log(fruits[0]); 
console.log(fruits[fruits.length - 1]); 
fruits[1] = "kiwi";
console.log(fruits.length); 

fruits.push("mangue");
const last = fruits.pop();
fruits.unshift("fraise");
const first = fruits.shift();
const quelquesFruits = fruits.slice(0, 2);
fruits.splice(1, 1, "abricot");
console.log({ last, first, fruits, quelquesFruits });

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i]}`);
}
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
fruits.forEach(fruit => console.log(`Fruit: ${fruit}`));

const notes = [12, 8, 17, 5, 14, 19, 10];
const bonifiees = notes.map(n => Math.min(n + 1, 20));
const admissibles = notes.filter(n => n >= 10);
const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
const premiereFaible = notes.find(n => n < 10);
const aMentionTB = notes.some(n => n >= 18);
const toutesAdmissibles = notes.every(n => n >= 10);
console.log({ bonifiees, admissibles, moyenne, premiereFaible, aMentionTB, toutesAdmissibles });

const asc = [...notes].sort((a, b) => a - b);
const desc = [...notes].sort((a, b) => b - a);
console.log({ asc, desc });