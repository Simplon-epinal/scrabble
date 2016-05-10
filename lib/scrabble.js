# javascript

/**
 * Score a word given the specs defined in the README file
 * @param  {[string]} the word to score
 * @return {[integer]} the value that the input word is worth
 */
var score = function(word) {

var word = prompt("Entrer un mot");
word = word.toUpperCase();
    
var alphabet = { 'a' : 1, 'b' : 3, 'c' : 3,'d' : 2,'e' : 1,'f' : 4,'g' : 2,'h' : 4,'i' : 1,'j' : 8,'k' : 5,'l' : 1,'m' : 3,'n' : 1,'o' : 1,'p' : 3,'q' : 10,'r' : 1,'s' : 1,'t' : 1,'u' : 1,'v' : 4,'w' : 4,'x' : 8,'y' : 4,'z' : 10 }
    
    
var letter, i, sum = 0;
for (i = 0; i < word.length; i++) {
    letter = word[i];
    sum += alphabet[letter];
}
alert(sum);


module.exports.score = score;