import { getRandomNumber, getGameLaunch } from '../index.js';

const getProgression = (randomNum) => {
  const numbers = [];
  let num = randomNum;
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    num += randomNum;
    numbers.push(num);
  }
  return numbers;
};

const playProgression = () => {
  const minNum = 1;
  const maxNum = 10;
  const minRandomIndex = 1;
  const maxRandomImdex = 9;
  const numRandom = getRandomNumber(minNum, maxNum);
  const numbers = getProgression(numRandom);
  const correctAnswerIndex = getRandomNumber(minRandomIndex, maxRandomImdex);
  const correctAnswer = String(numbers[correctAnswerIndex]);
  numbers[correctAnswerIndex] = '..';
  const question = numbers.join(' ');
  return [question, correctAnswer];
};

const startBrainProgression = () => {
  getGameLaunch(playProgression, 'What number is missing in the progression?');
};

export default startBrainProgression;
