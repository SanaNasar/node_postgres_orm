var Person = require('./person');

var Models = {};

Models.Person = Person;

Models.Person.all(function(err, people){
  console.log(people);
});

var myPerson = {firstname:'Cody', lastname: 'Banks'};
	
Person.create(myPerson, function(err, newPerson) {
	console.log(myPerson);
});

// Person.destroy(function(err, Person.prototype ) {
	
// }


// Models.Person.findBy("id", 1, function(err, person){
//   console.log("found", person);
//   person.update({firstname: "sam", lastname: "creek"}, function(err, person){
//     console.log("UPDATED:", person);
//   });
// });

module.exports = Models;