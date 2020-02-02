import readlineSync from 'readline-sync';

const getRandomIndex = (max) => Math.floor(Math.random() * Math.floor(max));
const getRandomNum = (max, min) => Math.round(Math.random() * (max - min) + min);


const calculate = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log();
  const operators = ['+', '-', '*'];
  const size = operators.length;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log();
  let count = 0;
  //
  while (count < 3) {
    const number1 = getRandomNum(100, 1);
    const number2 = getRandomNum(100, 1);
    const index = getRandomIndex(size);
    const operator = operators[index];

    console.log(`Question: ${number1} ${operator} ${number2}`);
    const gamerAnswer = Number(readlineSync.question('Your answer: '));
    let correctAnswer = 0;

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
      console.log(`${gamerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}`);
      break;
    }
    count += 1;
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default calculate;
