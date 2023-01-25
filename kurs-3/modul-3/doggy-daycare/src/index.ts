interface Owner {
  name: string,
  lastName: string,
  phoneNumber: string,
}

interface Dog {
  name: string,
  sex: string,
  breed: string,
  img: string,
  present: boolean,
  age: number,
  chipNumber: string,
  owner: Owner,
}

async function fetchData(): Promise<Dog[]> {
  const endpoint = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs";

  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function fetchDogs(): Promise<Dog[]> {
  return await fetchData();
}

async function fetchCustomer(): Promise<Owner[]> {
  const dogs = await fetchData();
  const customers = dogs.map((dog) => dog.owner);

  return customers;
}

function renderDog(dog: Dog): void {
  const main = document.createElement('article');
  main.classList.add('dogs__dog');

  if (!dog.present) {
    main.classList.add('dogs__dog--at-home');
  }

  const picture = document.createElement('figure');
  picture.classList.add('dogs__picture')
  picture.style.backgroundImage = `url(${dog.img})`;

  const info = document.createElement('section');
  info.classList.add('dogs__info');

  const name = document.createElement('h3');
  name.classList.add('dogs__name');
  name.innerHTML = dog.name;

  const data = document.createElement('article');
  data.classList.add('dogs__data');

  const age = document.createElement('p');
  age.classList.add('dogs__age');
  age.innerHTML = `${dog.age} y/o`;

  const sex = document.createElement('p');
  sex.classList.add('dogs__sex');
  sex.innerHTML = dog.sex === 'male' ? '♂' : '♀';

  const breed = document.createElement('p');
  breed.classList.add('dogs__breed');
  breed.innerHTML = dog.breed;

  const owner = document.createElement('article');
  owner.classList.add('dogs__owner-info');

  const ownerName = document.createElement('p');
  ownerName.innerHTML = dog.owner.name + ' ' + dog.owner.lastName;

  const ownerPhone = document.createElement('p');
  ownerPhone.innerHTML = dog.owner.phoneNumber;

  owner.append(ownerName, ownerPhone);

  const chipNumber = document.createElement('p');
  chipNumber.classList.add('dogs__chip-number')
  chipNumber.innerHTML = '#' + dog.chipNumber;

  data.append(age, sex, breed);
  info.append(name, data);
  main.append(picture, info, owner, chipNumber);
  document.querySelector<HTMLElement>('.dogs')?.append(main);
}

function renderDog2(dog: Dog): void {
  document.querySelector<HTMLElement>('.dogs')!.innerHTML +=
    `
    <article class="dogs__dog ${dog.present ? '' : 'dogs__dog--at-home'}">
      <figure class="dogs__picture"
        style="background-image: url(${dog.img});">
      </figure>
      <section class="dogs__info">
        <h3 class="dogs__name">${dog.name}</h3>
        <article class="dogs__data">
          <p class="dogs__age">${dog.age} y/o</p>
          <p class="dogs__sex">${dog.sex === 'male' ? '♂' : '♀'}</p>
          <p class="dogs__breed">${dog.breed}</p>
        </article>
      </section>
      <article class="dogs__owner-info">
        <p>${dog.owner.name} ${dog.owner.lastName}</p>
        <p>${dog.owner.phoneNumber}</p>
      </article>
      <p class="dogs__chip-number">#${dog.chipNumber}</p>
    </article>
    `
}

function renderDog3(dog: Dog): void {
  const [template] =
    (document.querySelector<HTMLTemplateElement>('.dogs > template')
      ?.content.cloneNode(true) as HTMLElement).children;

  const query = (query: string): HTMLElement =>
    template?.querySelector(query) as HTMLElement;

  if (!dog.present) {
    template.classList.add('dogs__dog--at-home');
  }

  query('.dogs__picture').style.backgroundImage = `url(${dog.img})`;
  query('.dogs__name').innerText = dog.name;
  query('.dogs__age').innerText = `${dog.age} y/o`;
  query('.dogs__sex').innerText = dog.sex === 'male' ? '♂' : '♀';
  query('.dogs__breed').innerText = dog.breed;
  query('.dogs__owner').innerText = dog.owner.name + ' ' + dog.owner.lastName;
  query('.dogs__phone-number').innerText = dog.owner.phoneNumber;
  query('.dogs__chip-number').innerText = '#' + dog.chipNumber;

  document.querySelector('.dogs')?.append(template);
}

function renderOwner(owner: Owner): void {
  const main = document.createElement('tr');
  const name = document.createElement('td');
  const lastName = document.createElement('td');
  const phoneNumber = document.createElement('td');

  name.innerHTML = owner.name;
  lastName.innerHTML = owner.lastName;
  phoneNumber.innerHTML = owner.phoneNumber;

  main.append(name, lastName, phoneNumber);
  document.querySelector<HTMLElement>('.customers')?.append(main);
}

const dogs = await fetchDogs();
const customers = await fetchCustomer();

dogs.sort((a, b) => Number(b.present) - Number(a.present)).forEach((dog) => {
  renderDog(dog);
});

customers.forEach((customer) => {
  renderOwner(customer);
});

export { }
