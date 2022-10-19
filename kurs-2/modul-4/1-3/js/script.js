// 1
function stringLength(text) {
  return text.length;
}

console.log(stringLength("pineapple"));

// 2
function parseYear(date) {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;

  if (date.match(pattern)) {
    return date.substring(0, 4);
  }
}

console.log(parseYear("2019-02-10"));

// 3

function calc(a, b, op) {
  const plus = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const div = (a, b) => a / b;
  const times = (a, b) => a * b;

  if (typeof(a) && typeof(b) === "number") {
    switch (op) {
      case '+': return plus(a, b);
      case '-': return minus(a, b);
      case '/': return div(a, b);
      case '*': return times(a, b);
      default: break;
    }
  }
}

console.log(calc(10, 20, '+'));
console.log(calc(10, 20, '-'));
console.log(calc(10, 20, '/'));
console.log(calc(10, 20, '*'));

// 4
