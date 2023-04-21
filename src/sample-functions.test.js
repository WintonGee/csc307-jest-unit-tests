const myFunctions = require('./sample-functions.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = 5;
  const result = myFunctions.div(50, 10);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = 5.2;
  const result = myFunctions.div(52, 10);
  expect(target).toBe(result);
});

test('Testing containsNumbers -- success', () => {
  const result = myFunctions.containsNumbers("abc");
  expect(result).toBe(false);
});

// There's a bug in the containsNumbers() function.
test('Testing containsNumbers -- fail', () => {
  const result = myFunctions.containsNumbers("   ");
  expect(result).toBe(false);
});

test('Testing containsNumbers -- success', () => {
  const result = myFunctions.containsNumbers("abc123");
  expect(result).toBe(true);
});

test('Testing containsNumbers -- success', () => {
  const result = myFunctions.containsNumbers("abc123???");
  expect(result).toBe(true);
});