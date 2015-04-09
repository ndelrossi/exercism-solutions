var Anagram = function(word) {
  this.word = word;

  this.matches = function() {
    var list = argumentsToArray(arguments);

    return list.filter(function(listWord) {
      return isAnagram(listWord, this.word) && isNotSameWord(listWord, this.word)
    });
  }

  function argumentsToArray(arguments) {
    var wordList = [];
    if (typeof arguments[0] === 'string') {
      for (var i = 0; i < arguments.length; i++)
        wordList.push(arguments[i]);
    } else wordList = arguments[0];
    return wordList;
  }

  function sortWord(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  function isAnagram(wordA, wordB) {
    return sortWord(wordA) === sortWord(wordB);
  }

  function isNotSameWord(wordA, wordB) {
    return wordA.toLowerCase() !== wordB.toLowerCase();
  }

  return this;
}

module.exports = Anagram;
