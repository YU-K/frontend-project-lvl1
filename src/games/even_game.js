import readlineSync from 'readline-sync';

const isEvenGame = () => {
  const maxNumber = 100;
  const minNumber = 1;
  const shots = 3;
  console.log('Welcome to the Brain Games!');
  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  console.log();
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  for (let i = 1; i <= shots; i += 1) {
    const number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    console.log(`Question: ${number}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (number % 2 === 0 && gamerAnswer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && gamerAnswer === 'no') {
      console.log('Correct!');
    } else {
      return console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default isEvenGame;
