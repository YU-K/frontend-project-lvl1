import getRandomNumber from '../utils';
import gameEngine from '../engine';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
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

const getGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => gameEngine(getGameData, task);
