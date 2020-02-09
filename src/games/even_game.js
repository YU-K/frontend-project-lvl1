import { getRandomNumber } from '../utils';
import gamesEngine from '../engine';

const isEven = (num) => num % 2 === 0;

const task = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const gameData = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};
export default () => gamesEngine(gameData, task);
