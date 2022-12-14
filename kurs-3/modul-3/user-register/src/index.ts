import { User, Gender } from "./user.js";
import { users } from "./users.js";

function filterByCountry(users: User[], nationality: string): User[] {
  return users.filter((user) => user.nat === nationality);
}

function filterByGender(users: User[], gender: Gender): User[] {
  const titles = {
    [Gender.Male]: ['Mr', 'Monsieur'],
    [Gender.Female]: ['Ms', 'Mrs', 'Mademoiselle', 'Madame', 'Miss'],
  };

  return users.filter((user) => titles[gender].includes(user.name.title));
}

function listEmails(users: User[]): string[] {
  return users.map((user) => user.email);
}

function reformatEmails(users: User[]): string[] {
  const domains = {
    FR: '.fr', CH: '.ch', DE: '.de', NO: '.no',
    US: '.us', TR: '.tr', FI: '.fi', GB: '.uk',
    NL: '.nl', NZ: '.nz', AU: '.au', ES: '.ee',
    IE: '.ie', DK: '.dk', IR: '.ir', BR: '.br',
    CA: '.ca',
  }

  return users.map((user) => {
    const name = user.email.substring(0, user.email.search('@')).split('.');
    return `${name[1]}.${name[0]}@evilcorp${domains[user.nat]}`;
  });
}

console.log(filterByCountry(users, 'FR'));
console.log(filterByGender(users, Gender.Male));
console.log(filterByGender(users, Gender.Female));
console.log(listEmails(users));
console.log(reformatEmails(users));
