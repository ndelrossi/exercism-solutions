//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  function isShout(text) {
    var lettersOnly = text.replace(/[^a-zA-Z\u00F0-\u02AF-]/g, '');
    var allUpperCase = lettersOnly.toUpperCase() === lettersOnly;
    return (allUpperCase && lettersOnly !== '')
  }

  var response = "";
  if (input == false)
    response = "Fine. Be that way!";
  else if (isShout(input))
    response = "Whoa, chill out!";
  else if (input.match(/\?$/))
    response = "Sure.";
  else
    response = "Whatever.";

  return response;
};

module.exports = Bob;
