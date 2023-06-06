'use strict'; // genererad fil från ts.

const ASCII_RANGE = {
  from: 32,
  to: 126,
};

// google is fränd (https://1loc.dev/number/wrap-a-number-between-two-values/)
function keepValueInRange(value, range) {
  return (
    ((((value - range.from) % (range.to + 1 - range.from)) +
      (range.to + 1 - range.from)) %
      (range.to + 1 - range.from)) +
    range.from
  );
}

function hashKey(key) {
  return String.fromCharCode(
    ...key.split('').map((char, index) => {
      const cursor = char;
      const cursorFromRight = key.at(key.length - 1 - index);
      const byte =
        ((cursor.charCodeAt(0) & 0x0f) << 4) |
        (cursorFromRight.charCodeAt(0) & 0x0f);
      return keepValueInRange(byte, ASCII_RANGE);
    })
  );
}

function keyValue(key, index) {
  const currentKeyIndex = keepValueInRange(index, {
    from: 0,
    to: key.length - 1,
  });
  return key.at(currentKeyIndex).charCodeAt(0);
}

export function encrypt(text, key) {
  const hashedKey = hashKey(key);
  return String.fromCharCode(
    ...text
      .split('')
      .map((char, index) =>
        keepValueInRange(
          char.charCodeAt(0) + keyValue(hashedKey, index),
          ASCII_RANGE
        )
      )
  );
}

export function decrypt(text, key) {
  const hashedKey = hashKey(key);
  return String.fromCharCode(
    ...text
      .split('')
      .map((char, index) =>
        keepValueInRange(
          char.charCodeAt(0) - keyValue(hashedKey, index),
          ASCII_RANGE
        )
      )
  );
}
