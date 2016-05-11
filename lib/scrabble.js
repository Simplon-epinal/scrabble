/**
 * Score a word given the specs defined in the README file
 * @param  {[string]} the word to score
 * @return {[integer]} the value that the input word is worth
 */
var score = function(word) {

	//Implement me !!
    // 1. Si word est nul, je revois 0
    if (!word) {
        return 0;//code
    }
    // 2. je définis une variable pour récupérer les points
    var total = 0;
    // 3. je crée une fonction qui retourne les points des lettres
    var calc = function(a){
        // je vérifie que c'est bien de  type string
        if (typeof(a) == 'string') {
            // je passe tout en minuscule pour éviter tout problème de lecture
            // et alléger le code
            a = a.toLowerCase();
            // je fais mes diverses conditions
            if (a == 'q' || a == 'z') {
                return 10;
            }
            else if (a == 'j' || a == 'x') {
                return 8;
            }
            else if (a == 'k') {
                return 5;
            }
            else if (a == 'f' || a == 'h' || a == 'v' || a == 'w' || a == 'y') {
                return 4;
            }
            else if (a == 'b' || a == 'c' || a == 'm' || a == 'p') {
                return 3;
            }
            else if ( a == 'd' || a == 'g'){
                return 2;
            }
            else{
                return 1;
            }
        }
    };
    // 4. je fais une boucle pour parcourir chaque lettre du mot
    for (i = 0; i < word.length; i++){
        // 5. j'ajoute au total la valeur de la lettre parcourue
        // Pour ça, je vérifie qu'il n'y a pas d'espace
        // et j'appelle la fonction créée avant sur cette lettre
        if (word[i] != ' ') {
            total += calc(word[i]);
        }
    }
    // 6. je retourne le total
    return total;
}


module.exports.score = score;