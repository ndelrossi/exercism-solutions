function oldLadySong() {

  var animals = [
    { name: "fly",    unique_verse: "" },
    { name: "spider", unique_verse: "It wriggled and jiggled and tickled inside her.\n" },
    { name: "bird",   unique_verse: "How absurd to swallow a bird!\n" },
    { name: "cat",    unique_verse: "Imagine that, to swallow a cat!\n" },
    { name: "dog",    unique_verse: "What a hog, to swallow a dog!\n" },
    { name: "goat",   unique_verse: "Just opened her throat and swallowed a goat!\n" },
    { name: "cow",    unique_verse: "I don't know how she swallowed a cow!\n" },
    { name: "horse",  unique_verse: "She's dead, of course!\n" }
  ];

  function verse(num) {
    var lyrics = "I know an old lady who swallowed a " + animals[num - 1].name + ".\n" +
      animals[num - 1].unique_verse;

    for (var i = num; i >= 2 && i < 8; i--) {
      lyrics += "She swallowed the " + animals[i - 1].name + " to catch the " + animals[i - 2].name;
      if (i == 3) lyrics += " that wriggled and jiggled and tickled inside her";
      lyrics += ".\n";
    }

    if (num != 8) lyrics += "I don't know why she swallowed the fly. Perhaps she'll die.\n";
    return lyrics;
  }

  function verses(start, finish) {
    var lyrics = "";
    for (var i = start; i <= finish; i++)
      lyrics += verse(i) + "\n";
    return lyrics;
  }

  return {
    verse: verse,
    verses: verses
  };
}

module.exports = oldLadySong();
