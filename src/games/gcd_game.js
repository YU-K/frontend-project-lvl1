import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

const calculateGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  const maxValue = 100;
  const minValue = 1;

  while (count < 3) {
    let number1 = getRandomNum(minValue, maxValue);
    let number2 = getRandomNum(minValue, maxValue);
    console.log(`Question: ${number1}  ${number2}`);
    const gamerAnswer = Number(readlineSync.question('Your answer: '));
    let correctAnswer = null;

    while (number1 !== 0 && number2 !== 0) {
      if (number1 > number2) {
        number1 %= number2;
      } else {
        number2 %= number1;
      }
      correctAnswer = number1 + number2;
    }
    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${gamerAnswer} is wrong answer :(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default calculateGcd;
