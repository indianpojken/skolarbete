// 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);

evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 2
const books = [
  { author: 'Oscar Wilde', title: 'The importance of being earnest' },
  { author: 'Lewis Carroll', title: 'Alice in wonderland' },
  { author: 'Jules Verne', title: 'Around the world in eighty days' },
  { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame' },
];

const filteredBooks = books.filter((book) => book.author === 'Jules Verne');
console.log(filteredBooks);

// 3
const people = [
  { age: 10, name: 'Gun-Britt' },
  { age: 20, name: 'Conny' },
  { age: 30, name: 'Aurora' },
  { age: 40, name: 'Kalle' },
  { age: 55, name: 'Max' },
];

const totalAge = people.reduce((total, person) => total + person.age, 0);
console.log(totalAge);

// 4
const biggestNumber = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6]
  .reduce((previous, current) => current > previous ? current : previous);

console.log(biggestNumber);

//  5
const bookTitles = books.map((book) => book.title);
console.log(bookTitles);

// 6
console.log(people.every((person) => person.age < 40));

// 7
const countryNames = countries.map((country) => country.name);
const continents = [...new Set(countries.map((country) => country.continent))];
const europe = countries
  .filter((country) => country.continent === 'Europe')
  .map((country) => country.name);

function search(countryOrContinent) {
  return countries.filter((country) =>
    country.name === countryOrContinent
    || country.continent === countryOrContinent);
}

console.log(countryNames);
console.log(continents);
console.log(europe);
console.log(search('China'));
console.log(search('Europe'));
