const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
const rand = (min = 0, max = 1000) =>
  Math.floor(Math.random() * (max - min) + min);
const randChar = (length = 6) => {
  const ranChars = [];
  for (let i = 0; i < length; i++) {
    ranChars.push(chars[rand(0, chars.length)]);
  }

  return ranChars.join('');
};

export const keygen = (prefix = 'c-', suffix = '') =>
  `${prefix}${randChar()}${suffix}`;
