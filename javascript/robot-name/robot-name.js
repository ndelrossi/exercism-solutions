function Robot() {
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

  function nameExists(name) {
    return Robot.currentNames.indexOf(name) >= 0;
  }

  function replaceNamesInList(nameToRemove, nameToAdd) {
    var indexOfOldName = Robot.currentNames.indexOf(nameToRemove);

    if (indexOfOldName > -1) {
      Robot.currentNames.splice(indexOfOldName, 1);
    }
    Robot.currentNames.push(nameToAdd);
  }

  this.reset = function() {
    var newName = makeRandomName();

    if (nameExists(newName)) {
      this.reset();
      return;
    }

    replaceNamesInList(this.name, newName);
    this.name = newName;
  }

  this.reset();
}

Robot.currentNames = [];

module.exports = Robot;
