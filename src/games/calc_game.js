import readlineSync from 'readline-sync';

const getRandomIndex = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);
const operators = ['+', '-', '*'];


const calculate = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log();
  const size = operators.length;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();
  const shots = 3;
  const maxValue = 100;
  const minValue = 1;
  //
  for (let i = 1; i <= shots; i += 1) {
    const number1 = getRandomNum(minValue, maxValue);
    const number2 = getRandomNum(minValue, maxValue);
    const index = getRandomIndex(size);
    const operator = operators[index];

    console.log(`Question: ${number1} ${operator} ${number2}`);
    const gamerAnswer = Number(readlineSync.question('Your answer: '));
    let correctAnswer = null;

    switch (operator) {
      case '+':
        correctAnswer = number1 + number2;
        break;
      case '-':
        correctAnswer = number1 - number2;
        break;
      case '*':
        correctAnswer = number1 * number2;
        break;
      default:
        break;
    }
    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default calculate;
