import getGameLaunch from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const minNum = 1;
  const maxNum = 50;
  const numRandom = getRandomNumber(minNum, maxNum);
  const question = numRandom;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const startPrimeGame = () => {
  getGameLaunch(playPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startPrimeGame;
