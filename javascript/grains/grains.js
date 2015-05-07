function Grains() {

  this.square = function(number) {
    return Math.pow(2, number - 1);
  }

  this.total = function(number) {
    return 2 * this.square(64) - 1;
  }

  return this;
}

module.exports = Grains;
