import { getRandomNumber } from '../utils';
import gamesEngine from '../engine';

const task = 'Find the greatest common divisor of given numbers.';

const giveGameData = () => {
  let number1 = getRandomNumber(1, 100);
  let number2 = getRandomNumber(1, 100);
  let correctAnswer;
  const question = `${number1}  ${number2}`;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
    correctAnswer = number1 + number2;
  }
  return [String(correctAnswer), question];
};
export default () => gamesEngine(giveGameData, task);