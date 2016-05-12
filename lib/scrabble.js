# javascript

/**
 * Score a word given the specs defined in the README file
 * @param  {[string]} the word to score
 * @return {[integer]} the value that the input word is worth
 */
var score = function(word) { // déclaration de la fonction score
if (word == null) { // si l'argument est null alors...
return 0; // ...renvoyer la valeur 0
}
else { // sinon
mot = word.toLowerCase(); // modifier la chaine de caractère en minuscule
var lettres = 0; // déclarer la variable points avec une valeur à 0
var total = 0; // déclarer la variable total avec une valeur à 0
var points = {  // crée un tableau des correspondances lettres/points
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
}
for (i = 0; i < word.length; i++) { // crée une boucle pour chaque lettre 
    lettres = mot[i]; //nombre de lettres dans le mot
    total += points[lettres]; //nombre de points pour le mot
}
return total; //retourne le total de points pour chaque lettre du mot
}
}


module.exports.score = score;