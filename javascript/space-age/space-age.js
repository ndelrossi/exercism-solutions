function SpaceAge(seconds) {
  this.seconds = seconds;
}

SpaceAge.prototype = {
  format: function(years) {
    return parseFloat(years.toFixed(2));
  },

  earthYears: function() { return (this.seconds / 31557600); },

  onEarth:   function() { return this.format(this.earthYears()); },
  onMercury: function() { return this.format(this.earthYears() / 0.2408467); },
  onVenus:   function() { return this.format(this.earthYears() / 0.61519726); },
  onMars:    function() { return this.format(this.earthYears() / 1.8808158); },
  onJupiter: function() { return this.format(this.earthYears() / 11.862615); },
  onSaturn:  function() { return this.format(this.earthYears() / 29.447498); },
  onUranus:  function() { return this.format(this.earthYears() / 84.016846); },
  onNeptune: function() { return this.format(this.earthYears() / 164.79132); }
};

module.exports = SpaceAge;
