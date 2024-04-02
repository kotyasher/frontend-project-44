import { getRandomNumber, getGameLaunch } from '../index.js';

const calculate = (operator, num1, num2) => {
  const result = '';
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
  return result;
};

const playCalculator = () => {
  const minNum = 1;
  const maxNum = 10;
  const firstNumRandom = getRandomNumber(minNum, maxNum);
  const secondNumRandom = getRandomNumber(minNum, maxNum);
  const operators = ['+', '-', '*'];
  const randomOperator = (operators[getRandomNumber(0, operators.length - 1)]);
  const question = `${firstNumRandom} ${randomOperator} ${secondNumRandom}`;
  const correctAnswer = String(calculate(randomOperator, firstNumRandom, secondNumRandom));

  return [question, correctAnswer];
};

const startCaulculator = () => {
  getGameLaunch(playCalculator, 'What is the result of the expression?');
};

export default startCaulculator;
