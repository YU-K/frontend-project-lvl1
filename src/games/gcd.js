import { getRandomNumber } from '../utils';
import gameEngine from '../engine';

const task = 'Find the greatest common divisor of getn numbers.';

const findGcd = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};
const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const correctAnswer = findGcd(number1, number2);
  const question = `${number1}  ${number2}`;

  return [String(correctAnswer), question];
};
export default () => gameEngine(getGameData, task);
