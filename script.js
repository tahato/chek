function dotProduct(v1, v2) {
    // Vérifier si les vecteurs ont la même dimension
    if (v1.length !== v2.length) {
        return  console.log("Les vecteurs n'ont pas la même dimension");
       
    }

    // Initialiser le produit scalaire à zéro
    let ps = 0;

    // Calculer le produit scalaire
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }

    // Retourner le produit scalaire calculé
    return console.log(ps) ;
}

var list1 = [],
  list2 = [];
var num = prompt("entrez la tallie de la liste 1", "num");
for (let i = 1; i <= num; i++) {
  c = prompt("entrez les elements de la liste 1",);
  list1.push(c);
}
console.log(list1);


num = prompt("entrez la tallie de la liste 2", "num");
for (let i = 1; i <= num; i++) {
  c = prompt("entrez les elements de la liste 2",);
  list2.push(c);
}
console.log(list2);
dotProduct(list1, list2)