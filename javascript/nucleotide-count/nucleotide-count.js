module.exports = function(strand) {
  strand = strand || "";
  if (!strand.match(/^[CAGT]*$/)) throw "Invalid DNA strand";

  return {
    count: function(match) {
      return strand.split('').reduce(function(count, nucleotide) {
        return (match == nucleotide) ? count + 1 : count;
      }, 0);
    },

    histogram: function() {
      return strand.split('').reduce(function(counts, nucleotide) {
        counts[nucleotide]++;
        return counts;
      }, { "A": 0, "T": 0, "C": 0, "G": 0 });
    }
  }
}
