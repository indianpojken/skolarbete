async function fetchData() {
    const endpoint = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs";
    try {
        const response = await fetch(endpoint);
        return await response.json();
    }
    catch (error) {
        console.log(error);
        return [];
    }
}
async function fetchDogs() {
    return await fetchData();
}
async function fetchCustomer() {
    const dogs = await fetchData();
    const customers = dogs.map((dog) => dog.owner);
    return customers;
}
function renderDog(dog) {
    const main = document.createElement('article');
    main.classList.add('dogs__dog');
    if (!dog.present) {
        main.classList.add('dogs__dog--at-home');
    }
    const picture = document.createElement('figure');
    picture.classList.add('dogs__picture');
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
    chipNumber.classList.add('dogs__chip-number');
    chipNumber.innerHTML = '#' + dog.chipNumber;
    data.append(age, sex, breed);
    info.append(name, data);
    main.append(picture, info, owner, chipNumber);
    document.querySelector('.dogs').append(main);
}
function renderOwner(owner) {
    const main = document.createElement('tr');
    const name = document.createElement('td');
    const lastName = document.createElement('td');
    const phoneNumber = document.createElement('td');
    name.innerHTML = owner.name;
    lastName.innerHTML = owner.lastName;
    phoneNumber.innerHTML = owner.phoneNumber;
    main.append(name, lastName, phoneNumber);
    document.querySelector('.customers').append(main);
}
const dogs = await fetchDogs();
const customers = await fetchCustomer();
dogs.sort((a, b) => Number(b.present) - Number(a.present)).forEach((dog) => {
    renderDog(dog);
});
customers.forEach((customer) => {
    renderOwner(customer);
});
export {};
