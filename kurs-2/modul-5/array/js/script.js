// 1
let fruits = ['apple', 'orange', 'pear', 'banana', 'peach'];
// 2
const three = ['string', 1337, [1,3,3,7]];
// 3
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length);
// 4-6
console.log(animals[0]);
console.log(animals[3]);
console.log(animals[1]);
animals[1] = 'tiger';
console.log(animals[1]);
// 7
let a = [1,2,3];
let b = [4,5,6];

a = a.concat(b);

// 8
let c = [1,2,3,7,8,9];
let d = [4,5,6];

c.splice(3, 0, ...d);

console.log(c);

// 9
let arr = ['a', 'b', 'c'];
const clone = [...arr];
console.log(clone);

// 10
fruits = ['kiwi', 'apple', 'pear'];
fruits.push('banana');

// 11
fruits.unshift('peach');

// 12
fruits.pop();

// 13
fruits.shift();

// 14
fruits.splice(1, 0, 'peach');

// 15
fruits.splice(2, 0, ...['grapefruit', 'lime', 'lemon']);
console.log(fruits);

// 16
let names = ['David', 'Christoffer', 'Johan', 'Maja']
names.splice(1, 2);

// 17
let nums = [1,2,3,4,5,6,7,8,9];
nums.sort((_, b) => b);
// nums.reverse();
console.log(nums);

// 18
let str = 'Supercalifragilisticexpialidocious';
console.log(str.includes('n'));

// 19
console.log(str.includes('x'));

// 20
console.log(str.indexOf('p'));

// 21
console.log([...str].splice(0, 5));

// 22
console.log([...str].splice(-7));

