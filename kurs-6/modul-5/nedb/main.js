import Datastore from 'nedb-promises';

const db = Datastore.create('database.db');

db.removeMany({});

const people = [
  { firstName: 'Ann', lastName: 'Olsson', age: 18 },
  { firstName: 'Birgitta', lastName: 'Andersson', age: 28 },
  { firstName: 'Margareta', lastName: 'Gustafsson', age: 23 },
  { firstName: 'Lennart', lastName: 'Svensson', age: 45 },
  { firstName: 'Angelica', lastName: 'Svensson', age: 51 }
];

await db.insert(people);

console.log(await db.find({ lastName: 'Svensson' }));
console.log(await db.find({ firstName: 'Birgitta' }));
console.log(await db.find({ age: { $gt: 30 } }));

await db.update({ firstName: 'Birgitta' }, { $set: { firstName: 'Lina' } });
await db.remove({ firstName: 'Margareta' });

console.log('-- db --');
console.log(await db.find());

const persons = {
  names: []
};

(await db.find()).forEach((person) =>
  persons.names.push(`${person.firstName} ${person.lastName}`)
);

console.log(persons)
