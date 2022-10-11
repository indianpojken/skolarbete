function testIfBigger() {
  const a = 10;
  const b = 20;

  if (a > b) {
    console.log('a is bigger than b.');
  }
}

function testIfEquals() {
  const a = 'apple';
  const b = 'pear';

  if (a === b) {
    console.log('a is to b');
  }

  if (a !== b) {
    console.log('a is not equeal to b');
  }
}

function testElseIfBiggest() {
  const a = parseInt(prompt('Input first number'), 10);
  const b = parseInt(prompt('Input second number'), 10);

  if (a > b) {
    console.log(`${a} is bigger than ${b}.`);
  } else if (b > a) {
    console.log(`${b} is bigger than ${a}.`);
  }
}

function testElseIfEven() {
  const number = parseInt(prompt('Input number to check if it\'s even'), 10);
  
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else if (number % 2 === 1) {
    console.log(`${number} is odd.`);
  }
}

function testElseIfLisseberg() {
  const ticket = 'medium';

  if (ticket === 'small') {
    console.log('bleep-bleep - not allowed to ride balder.');
  } else if (ticket === 'medium') {
    console.log('bleep-bleep - not allowed to ride balder.');
  } else if (ticket === 'large') {
    console.log('bleep-bleep - allowed to ride balder.');
  } else if (ticket === 'platinum') {
    console.log('bleep-bleep - allowed to ride balder.');
  }
}

function testElseIfBMI() {
  const length = parseInt(prompt('Your length in CM.'), 10) / 100; // convert to meter.
  const weight = parseInt(prompt('Your weight in KG.'), 10);

  const bmi = weight / (length * length);
  
  if (bmi <= 18.5) {
    console.log('underweight.');
  } else if (bmi >= 18.5 && bmi <= 25) {
    console.log('normal.');
  } else if (bmi >= 25 && bmi <= 30) {
    console.log('overweight.');
  } else if (bmi >= 30) {
    console.log('obese.');
  }
}

function testSwitchWeekdays() {
  const day = parseInt(prompt('Input day number (1-7): '), 10);
  
  switch (day) {
    case 1: console.log('monday.'); break;
    case 2: console.log('tunezday.'); break;
    case 3: console.log('untzday.'); break;
    case 4: console.log('thorzday.'); break;
    case 5: console.log('friyay.'); break;
    case 6: console.log('saturhay.'); break;
    case 7: console.log('sunay.'); break;
    default: console.log('no such day - lul.');
  }
}

function testSwitchMonths() {
  const month = parseInt(prompt('Input day number (1-12): '), 10);
  
  switch (month) {
    case 1: console.log('januari.'); break;
    case 2: console.log('febrary'); break;
    case 3: console.log('marz.'); break;
    case 4: console.log('afril.'); break;
    case 5: console.log('may.'); break;
    case 6: console.log('juney.'); break;
    case 7: console.log('juley.'); break;
    case 8: console.log('augustu.'); break;
    case 9: console.log('septembah.'); break;
    case 10: console.log('octobah.'); break;
    case 11: console.log('novembah.'); break;
    case 12: console.log('decembah.'); break;
    default: console.log('no such month - lul.');
  }
}

testIfBigger();
testIfEquals();
testElseIfBiggest();
testElseIfEven();
testElseIfLisseberg();
testElseIfBMI();
testSwitchWeekdays();
testSwitchMonths();
