import readlineSync from 'readline-sync';

const gamesEngine = (giveGameData, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(task);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [correctAnswer, question] = giveGameData();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gamesEngine;
