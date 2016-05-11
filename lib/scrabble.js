

/**
 * Score a word given the specs defined in the README file
 * @param  {[string]} the word to score
 * @return {[integer]} the value that the input word is worth
 */
var score = function(word) {

	//Implement me !!
var word = prompt("Enter a word please");
word = word.toUpperCase();

scores = { 'A' : 1, 'B' : 3, 'C' : 3, /* ... */ 'Z' : 10 };

var sum = 0;
for (var i = 0; i < word.length; i++) {
    sum += scores[word.charAt(i)];
}

alert(sum);

}


module.exports.score = score;
