/**
 * The unit tests that check the validity of the
 * scrabble.score method
 */


var scrabble = require("../lib/scrabble");

    describe('Scrabble kata', function() {
      it('scores an empty word as zero', function() {
        expect(scrabble.score('')).toEqual(0);
      });

      it('scores a null as zero', function() {
        expect(scrabble.score(null)).toEqual(0);
      });

      it('scores a very short word', function() {
        expect(scrabble.score('a')).toEqual(1);
      });

      it('scores the word by the number of letters', function() {
        expect(scrabble.score('street')).toEqual(6);
      });

      it('scores more complicated words with more', function() {
        expect(scrabble.score('quirky')).toEqual(22);
      });

      it('scores case insensitive words', function() {
        expect(scrabble.score('OXYPHENBUTAZONE')).toEqual(41);
      });
    });