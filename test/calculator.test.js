// IMPORT MODULES under test here:
import { add, minus, multiply, divide, toNumber} from '../calculator.js';

const test = QUnit.test;

test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 10;
    const y = 2;
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 10;
    const y = 2;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = minus(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 10;
    const y = 2;
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('division function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 10;
    const y = 2;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('0 divided by 0 returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const x = 0;
    const y = 0;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('toNumber function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('empty string returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //inputs?
    const expected = 0;
    const input = document.createElement('input');
    input.value = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


