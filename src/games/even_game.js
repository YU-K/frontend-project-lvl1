import readlineSync from 'readline-sync';

const isEvenGame = () => {
  const maxNumber = 100;
  const minNumber = 1;
  let rightAnswer = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  while (rightAnswer < 3) {
    const number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    console.log(`Question: ${number}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (number % 2 === 0 && gamerAnswer === 'yes') {
      console.log('Correct!');
      rightAnswer += 1;
    } else if (number % 2 !== 0 && gamerAnswer === 'no') {
      console.log('Correct!');
      rightAnswer += 1;
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
      break;
    }
  }
  if (rightAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default isEvenGame;
