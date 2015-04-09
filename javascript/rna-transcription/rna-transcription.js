module.exports = function(dna) {
  var conversion = { C: "G", G: "C", A: "U", T: "A" };
  return dna.split('').map(function(char) {
    return conversion[char];
  }).join('');
}
