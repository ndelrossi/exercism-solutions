var words = function(text) {

  result = {};
  text.split(/\s+/).forEach(function(word) {
    if (result.hasOwnProperty(word))
      result[word]++;
    else
      result[word] = 1;
  });

  return result;
};

module.exports = words;
