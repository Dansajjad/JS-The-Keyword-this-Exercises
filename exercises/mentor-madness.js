var mentor = 'Zach';

var foo = {
  mentor: 'Sunny',
  bar: {
    mentor: 'Beth',
    getMentor: function() {
      console.log(this.mentor);
    }
  }
};

var findMentor = foo.bar.getMentor;

// What would the following log (in the browser)?
// What binding pattern(s) cause this?
foo.bar.getMentor();
findMentor();

// How would you modify the following invocations of findMentor to log each of the mentor's names?
findMentor(); // Should log 'Zach'
findMentor(); // Should log 'Sunny'
findMentor(); // Should log 'Beth'

// Bonus: Does findMentor behave differently in the browser vs. when run by Node? If so, why?
