import { render, screen } from '@testing-library/react';
import FizzBuzz from './FizzBuzz.js';

test('should return the numbers passed to it, for numbers that are not 3n or 5n', () => {
  expect(FizzBuzz(1)).toBe(1);
  expect(FizzBuzz(2)).toBe(2);
  expect(FizzBuzz(4)).toBe(4);
  expect(FizzBuzz(7)).toBe(7);
  expect(FizzBuzz(8)).toBe(8);
  expect(FizzBuzz(11)).toBe(11);
  expect(FizzBuzz(13)).toBe(13);
  expect(FizzBuzz(14)).toBe(14);
  expect(FizzBuzz(16)).toBe(16);
  expect(FizzBuzz(17)).toBe(17);
  expect(FizzBuzz(19)).toBe(19);
  expect(FizzBuzz(22)).toBe(22);
  expect(FizzBuzz(23)).toBe(23);
});

test('should return the word fizz if number is 3n but not 5n', () => {
  expect(FizzBuzz(3)).toBe("fizz");
  expect(FizzBuzz(6)).toBe("fizz");
  expect(FizzBuzz(9)).toBe("fizz");
  expect(FizzBuzz(12)).toBe("fizz");
  expect(FizzBuzz(18)).toBe("fizz");
  expect(FizzBuzz(21)).toBe("fizz");
  expect(FizzBuzz(24)).toBe("fizz");
});

test('should return the word buzz if number is 5n but not 3n', () => {
  expect(FizzBuzz(5)).toBe("buzz");
  expect(FizzBuzz(10)).toBe("buzz");
  expect(FizzBuzz(20)).toBe("buzz");
  expect(FizzBuzz(25)).toBe("buzz");
});
test('should return the word fizzbuzz if number is 5n and 3n', () => {
  expect(FizzBuzz(15)).toBe("fizzbuzz");
  expect(FizzBuzz(30)).toBe("fizzbuzz");
});