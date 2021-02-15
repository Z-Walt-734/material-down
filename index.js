const MaterialDown = require('./src/MaterialDown');
const React = require('react');

const test = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('Input Error: Need String');
  }

  return (
    <MaterialDown>
      {string}
    </MaterialDown>
  );
};


console.log(test('Test Data'));
