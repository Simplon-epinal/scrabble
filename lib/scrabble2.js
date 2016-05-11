/**
 * Score a word given the specs defined in the README file
 * @param  {[string]} the word to score
 * @return {[integer]} the value that the input word is worth
 */
var score = function(word) {

	//Implement me !!
    // Seconde version du script, plus complexe
    
    // 1. même chose je vérifie que word n'est pas null
    if (!word) {
        return 0;
    }
    // 2. j'initialise toujours le total
    var total = 0;
    // 3. je crée les tableaux des lettres
    var un = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    var deux = ['D', 'G'];
    var trois = ['B', 'C', 'M', 'P'];
    var quatre = ['F', 'H', 'V', 'W', 'Y'];
    var cinq = ['K'];
    var huit = ['J','X'];
    var dix = ['Q','Z'];
    // 4. je crée un tableau bidimensionnel
    var tableau = [un,deux,trois,quatre,cinq,huit,dix];
    // 5. Je parcours les lettres du mot
   for(i=0;i<word.length;i++){
    // 6. je passe la lettre actuelle en majuscule
   	var w = word[i].toUpperCase();
    // 7. je parcours le tableau
    for(u=0;u<tableau.length;u++){
        // 8. je parcours le tableau à la clé u
    	for(d=0;d<tableau[u].length;d++){
        // 9. j'initialise une variable de la lettre actuelle du tableau
        // pour la visibilité
      	var t = tableau[u][d];
        // 10. si la lettre parcourue est la même que celle du tableau
        // j'utilise un switch pour augmenter le total
      	if(w == t){
        	switch(u){
          case 0:
          	total += 1;
            break;
          case 1:
          	total += 2;
            break;
          case 2:
          	total += 3;
            break;
          case 3:
          	total += 4;
            break;
          case 4:
          	total += 5;
           	break;
          case 5:
          	total += 8;
            break;
          case 6:
          	total += 10;
            break;
          }
        }
      }
    }
   }
   // 11. je retourne le total
    return total;
}


module.exports.score = score;