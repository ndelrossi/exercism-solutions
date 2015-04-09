var compute = function(strandA, strandB) {
  if (strandA.length != strandB.length) throw 'DNA strands must be of equal length.';

  return strandA.split('').reduce(function(hammingCount, nucleotide, index) {
    return nucleotide !== strandB.charAt(index) ? hammingCount + 1 : hammingCount;
  }, 0);
};

module.exports = compute;
