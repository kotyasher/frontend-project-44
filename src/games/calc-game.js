import getGameLaunch from '../index.js';
import getRandomNumber from '../utils.js';

const calculate = (operator, numOne, numTwo) => {
  switch (operator) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
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

  return { question, correctAnswer };
};

const startCaulculator = () => {
  getGameLaunch(playCalculator, 'What is the result of the expression?');
};

export default startCaulculator;
