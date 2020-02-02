import readlineSync from 'readline-sync';

const brainPrime = () => {
  const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);


  const isPrime = (num) => {
    if (num <= 0) {
      return false;
    }
    const isDivide = num % num === 0 && num % 1 === 0;

    if (num > 2 && isDivide) {
      if (num % 2 === 0) {
        return false;
      }
    }
    return true;
  };
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const minValue = 0;
  const maxValue = 100;
  let count = 0;

  while (count < 3) {
    const number = getRandomNum(minValue, maxValue);
    console.log(`Question: ${number}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (gamerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${gamerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}`);
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default brainPrime;
