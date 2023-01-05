let isMember = true;
let remise = isMember = isMember ? 0.2 : 0.1;
// console.log('le remise : ',remise);
let nom = 'rami';
let salutation = nom ? 'salut' + nom : 'inconnu';
// console.log(salutation);

// decomposition des tables
const personne = {
    nom: 'fatihi',
    age: 23,
    adress: { rue: 14, ville: 'casa' }
};
const nome = personne.nom;
const age = personne.age;
const rue = personne.adress.rue;
const ville = personne.adress.ville;
// console.log(nome,age,rue,ville);

const tab = [10, 20, 30, 40, 50];
const [a, b, ...reste] = tab;
// console.log(a,b,reste);

// les operations sue les table 

// methode map()
const personnes = [
    { nom: 'rami', age: 33, estmembre: true },
    { nom: 'fatihi', age: 24, estmembre: false },
    { nom: 'chakib', age: 45, estmembre: true },
    { nom: 'mounir', age: 37, estmembre: false },
]
const noms = personnes.map(function (person) { return person.age })
// console.log(noms)

// methode Filtrer()

const output = personnes.filter(function (pers) { return pers.age >= 35 })
// console.log(output)

// methode find() 
const personnees = [
    { nom: 'rami', age: 33, estmembre: true },
    { nom: 'fatihi', age: 24, estmembre: false },
    { nom: 'chakib', age: 45, estmembre: true },
    { nom: 'mounir', age: 37, estmembre: false },
]
const outpute = personnes.find(function (pers) { return pers.age >= 35 })

// console.log(outpute);

// methode reduce 
const clients = [
    { nom: 'PC', montant: 15500 },
    { nom: 'clavier', montant: 200 },
    { nom: 'souris', montant: 100 },
]
const totale = clients.reduce(function (total, client) {
    return total += client.montant
},0);
console.log(totale);



