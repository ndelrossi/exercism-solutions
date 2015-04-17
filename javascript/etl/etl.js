module.exports = function transform(oldScores) {
  return Object.keys(oldScores).reduce(function(newScores, key) {
    oldScores[key].forEach(function(letter) {
      newScores[letter.toLowerCase()] = parseInt(key);
    });
    return newScores;
  }, {});
}
