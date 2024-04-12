import { getRandomNumber, getGameLaunch } from '../index.js';

const getGCD = (numOne, numTwo) => {
  if (numTwo % numOne === 0) {
    return numOne;
  }
  for (let i = numOne / 2; i >= 1; i -= 1) {
    if (numTwo % i === 0 && numOne % i === 0) {
      return i;
    }
  }
  return 1;
};

const playGCD = () => {
  const minNum = 1;
  const maxNum = 100;
  const firstNumRandom = getRandomNumber(minNum, maxNum);
  const secondNumRandom = getRandomNumber(minNum, maxNum);
  const question = `${firstNumRandom} ${secondNumRandom}`;
  const correctAnswer = String(getGCD(firstNumRandom, secondNumRandom));

  return { question, correctAnswer };
};

const startGcdGame = () => {
  getGameLaunch(playGCD, 'Find the greatest common divisor of given numbers.');
};

export default startGcdGame;
