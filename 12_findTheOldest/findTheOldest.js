const findTheOldest = function (DOB) {
  //figure out who the oldest is
  let oldestPerson = DOB.reduce((oldestOne, youngestOne) => {
    let oldestAge = getAge(oldestOne);
    let currentAge = getAge(youngestOne);
    //ternary uses the '?' to then get value out of the variable via
    //object DOB
    return oldestAge > currentAge ? oldestOne : youngestOne;
  });
  return oldestPerson;
};
//this is a function
//finding age of unkown, use todays date
//finding age of known
//this also is a fuction
const getAge = function (person) {
  if (!person.yearOfDeath) {
    //how to get the date
    let currentYear = new Date().getFullYear();
    return currentYear - person.yearOfBirth;
  } else {
    return person.yearOfDeath - person.yearOfBirth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
