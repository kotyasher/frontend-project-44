import readlineSync from 'readline-sync';

const getGameLaunch = (getRandomNumber, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  const maxStep = 3;
  for (let i = 0; i < maxStep; i += 1) {
    const [randomNumber, correctAnswer] = getRandomNumber();
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

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export { getGameLaunch, getRandomNumber };
