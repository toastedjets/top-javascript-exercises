const findTheOldest = function(people) {
    return people.reduce((accumulator, current) => {
        const getAge = (person) => {
            const deathYear = person.yearOfDeath || new Date().getFullYear();
            return deathYear - person.yearOfBirth;
        }
        const person1 = getAge(accumulator);
        const person2 = getAge(current);
        return person1 > person2 ? accumulator : current;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
