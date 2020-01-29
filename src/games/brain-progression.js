import readlineSync from 'readline-sync';

const brainProgGame = () => {
  const getRandom = (min, max) => Math.round(Math.random() * (max - min) + min);
  //
  let correctAnswer = 0;
  let arithmProg = '';
  let iterForWhile = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log('What number is missing in the progression?');
  console.log(`Hello, ${name}`);

  while (iterForWhile < 3) {
    const str = [];
    let count = 0;
    const start = getRandom(2, 10);
    const step = getRandom(2, 6);
    const indexOfNumX = getRandom(0, 9);
    for (let i = start; count < 10; i += step) {
      if (count === indexOfNumX) {
        correctAnswer = i;
        str.push('..');
      } else {
        str.push(i);
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
      console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);
      break;
    }
    iterForWhile += 1;
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainProgGame;
