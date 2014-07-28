var Person = require('./person');


var Models = {};

Models.Person = Person;

Models.Person.all(function(err, people){
  console.log(people);
});

// var firstname = prompt("What's your first name?");
// var lastname = prompt("What's your last name?");

//Testing my app 

var myPerson = {firstname: 'Cody', lastname: 'Banks'};

// create() function test
// Person.create(myPerson, function(err, newPerson) {
// 	console.log(myPerson);
// });

// findby test
// Models.Person.findBy('id', 1, function (err, person) {
//   console.log("Checking database: " + person);
// });

// .all() function test
// Models.Person.all(function(err, people){
//   console.log(people);
// });

// delete() function test trying to figure out
// Models.Person.findBy("id", 10, function (err, person){
//   var id = 10;
// person.destroy(function(err) {
//   console.log("Deleted")
// });
// })

// Models.Person.findBy("id", 1, function(err, person){
//   console.log("found", person);
//   person.update({firstname: "sam", lastname: "creek"}, function(err, person){
//     console.log("UPDATED:", person);
//   });
// });

module.exports = Models;