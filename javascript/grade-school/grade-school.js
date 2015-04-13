function School() {
  this.students = {};
}

School.prototype = {

  roster: function() {
    return this.students;
  },

  add: function(name, grade) {
    var names = this.grade(grade);
    names.push(name);
    this.students[grade] = names.sort();
  },

  grade: function(num) {
    return this.students[num] || [];
  }
}

module.exports = School;
