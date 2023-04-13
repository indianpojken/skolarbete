import { database } from './database.js';

const events = [
  {
    _id: 1,
    artist: "Lasse-Stefans",
    date: "21 MAR",
    arena: "Kjell Härnqvistsalen",
    time: "19.00 - 21.00",
    price: "350 sek"
  },
  {
    _id: 2,
    artist: "Pelle trubadur",
    date: "29 MAR",
    arena: "Pubelipub",
    time: "22.00 - 00.00",
    price: "110 sek"
  },
  {
    _id: 3,
    artist: "Kajsas kör",
    date: "10 APR",
    arena: "Götaplatsen",
    time: "15.00 - 16.00",
    price: "99 sek"
  },
  {
    _id: 4,
    artist: "Klubb Untz",
    date: "17 APR",
    arena: "Din favoritkällare",
    time: "22.00 - du tröttnar",
    price: "150 sek"
  }
];

for await (const event of events) {
  database.events.insert({
    ...event, tickets: Math.floor(Math.random() * 5) + 1
  });
}
