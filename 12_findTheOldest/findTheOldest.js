const findTheOldest = function(people) {
    // for each object in the array calculate the age by subtracting yearOfBirth from their yearOfDeath
    people.forEach((person) => {
            if (person.yearOfDeath) {
                person.age = person.yearOfDeath - person.yearOfBirth;
            } else {
                person.age = new Date().getFullYear() - person.yearOfBirth;
            }
        })
    people.sort((a, b) => b.age - a.age);
    return people[0];
    // return people.map((person) => {
    //     if (person.yearOfDeath) {
    //         person.yearOfDeath - person.yearOfBirth;
    //     } else {
    //         new Date().getFullYear() - person.yearOfBirth;
    //     }
    // });
};

// Do not edit below this line
module.exports = findTheOldest;
