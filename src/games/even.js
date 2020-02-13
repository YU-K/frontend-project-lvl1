import { getRandomNumber } from '../utils';
import gamesEngine from '../engine';

const isEven = (num) => num % 2 === 0;

const task = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const giveGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};
export default () => gamesEngine(giveGameData, task);
