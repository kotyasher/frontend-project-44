import getGameLaunch from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (numOne, numTwo) => {
  let gcd = 1;
  for (let i = 2; i <= numOne; i += 1) {
    if (numOne % i === 0 && numTwo % i === 0) {
      gcd = i;
    }
  } return gcd;
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
