function sum(a,b) {
  return a + b;
}


function test(title, testCode) {
  try {
    testCode();
  } catch (error) {
    console.log(error);
  }
}

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(result + ' is not equal to ' + expected);
      }
    }
  }
}

test('sum(1, 2) is not equal 5', function() {
  expect(sum(1,2)).toBe(5);
});