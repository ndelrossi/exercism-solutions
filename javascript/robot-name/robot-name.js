function Robot() {
  function newName() {
    var newName = makeRandomName();

    if (Robot.currentNames.indexOf(newName) != -1) {
      newName();
    }

    Robot.currentNames.push(newName);
    return newName;
  }

  function makeRandomName() {
    var LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var NUMBERS = "0123456789";

    function getChars(charSet, quantity) {
      var chars = ''
      for ( var i = 0; i < quantity; i++ )
        chars += charSet.charAt(Math.floor(Math.random() * charSet.length));
      return chars;
    }

    return getChars(LETTERS, 2) + getChars(NUMBERS, 3);
  }

  this.reset = function() {
    var indexOfOldName = Robot.currentNames.indexOf(this.name);

    if (indexOfOldName > -1) {
      Robot.currentNames.splice(indexOfOldName, 1);
    }

    this.name = newName();
  }

  this.reset();
}

Robot.currentNames = [];

module.exports = Robot;
