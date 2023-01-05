let livres=[
    {id:10 ,titre:'poo',auteur:'rami',prix:300},
    {id:11 ,titre:'js es6',auteur:'fami',prix:230},
    {id:12 ,titre:'algoritme',auteur:'karimi',prix:330},
    {id:13 ,titre:'html css',auteur:'rami',prix:340},
];

// 1
const titres=livres.map(function(titre){
    return titre.titre;
})
// console.log(titres);
// 2
const titresrami=livres.filter(function(reda){
    return reda.auteur=='rami'
})
// console.log(titresrami)
// 3 
const live = livres.find(function(id){
    return id.id=12
})
// console.log(live)

// 4
const total=livres.reduce(function(total,livre){
    return total+=livre.prix

},0)
// console.log(total);


// 5
const [...rest]=livres;
console.log(livres);

