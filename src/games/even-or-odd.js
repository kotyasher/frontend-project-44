import readlineSync from 'readline-sync';
import getUserName from '../greetings.js';
import getRandomNumber from '../utils.js';

const userName = getUserName();
const isEven = (number) => number % 2 === 0;
const maxStep = 3;

const playEvenOrOdd = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < maxStep; i += 1) {
    const randomNumber = getRandomNumber(0, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);

      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playEvenOrOdd;
