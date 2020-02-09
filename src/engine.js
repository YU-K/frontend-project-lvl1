import readlineSync from 'readline-sync';


const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};
const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const gamesEngine = (gameData, task) => {
  greeting();
  const name = getName();
  console.log(task);
  const shots = 3;
  for (let i = 1; i <= shots; i += 1) {
    const data = gameData();
    const question = data[1];
    const correctAnswer = data[0];
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    console.log(typeof (correctAnswer));

    if (gamerAnswer === correctAnswer) {
      console.log('Correct');
    } else {
      return console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default gamesEngine;
