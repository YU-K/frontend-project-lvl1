import readlineSync from 'readline-sync';

const brainProgGame = () => {
  const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
  //
  let correctAnswer = 0;
  let arithmProg = '';
  const shots = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('What number is missing in the progression?');
  console.log(`Hello, ${name}`);
  const minValue = 2;
  const startMaxValue = 10;
  const stepMaxValue = 6;
  const indexMinValue = 0;
  const indexMaxValue = 9;

  for (let i = 1; i <= shots; i += 1) {
    const str = [];
    let count = 0;
    const start = getRandom(minValue, startMaxValue);
    const step = getRandom(minValue, stepMaxValue);
    const indexOfNumX = getRandom(indexMinValue, indexMaxValue);
    for (let iter = start; count < 10; iter += step) {
      if (count === indexOfNumX) {
        correctAnswer = iter;
        str.push('..');
      } else {
        str.push(iter);
      }
      count += 1;
    }
    arithmProg = str.join(' ');

    console.log(`Question: ${arithmProg}`);
    const gamerAnswer = Number(readlineSync.question('Your answer: '));

    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
      arithmProg = '';
    } else {
      return console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default brainProgGame;
