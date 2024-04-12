import { getGameLaunch, getRandomNumber } from '../index.js';

const isEven = (number) => number % 2 === 0;

const playEvenorOdd = () => {
  const minNum = 1;
  const maxNum = 10;
  const numRandom = getRandomNumber(minNum, maxNum);
  const correctAnswer = isEven(numRandom) ? 'yes' : 'no';

  return { question: `${numRandom}`, correctAnswer };
};

const startEvenGame = () => {
  getGameLaunch(playEvenorOdd, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default startEvenGame;
