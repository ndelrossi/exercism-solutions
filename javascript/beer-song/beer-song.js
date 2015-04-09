var beerSong = function() {

  function verse(num) {
    var lyrics = "";

    switch(num) {
      case 1:
        lyrics = "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
        break;

      case 0:
        lyrics = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
        break;

      default:
        lyrics = num + " bottles of beer on the wall, " + num + " bottles of beer.\n" + "Take one down and pass it around, " + (num - 1) + ((num - 1) == 1 ? " bottle" : " bottles") + " of beer on the wall.\n";
    }

    return lyrics;
  }

  function sing(start, end) {
    end = end || 0;
    var lyrics = "";
    for (var i = start; i >= end; i--) {
      lyrics = lyrics + verse(i);
      if (i != end) lyrics += "\n";
    }

    return lyrics;
  }

  return {
    verse: verse,
    sing: sing
  };
}

module.exports = beerSong();
