import { getRandomNumber } from '../utils';
import gamesEngine from '../engine';

const task = 'What number is missing in the progression?';

const gameData = () => {
  let correctAnswer = 0;
  let arithmProg = '';
  const minValue = 2;
  const startMaxValue = 10;
  const stepMaxValue = 6;
  const indexMinValue = 0;
  const indexMaxValue = 9;

  const str = [];
  let count = 0;
  const start = getRandomNumber(minValue, startMaxValue);
  const step = getRandomNumber(minValue, stepMaxValue);
  const indexOfNumX = getRandomNumber(indexMinValue, indexMaxValue);
  for (let iter = start; count < 10; iter += step) {
    if (count === indexOfNumX) {
      correctAnswer = iter;
      str.push('..');
    } else {
      str.push(iter);
    }
    count += 1;
  }
  arithmProg = str.join(' ');

  correctAnswer = String(correctAnswer);
  const question = arithmProg;
  return [correctAnswer, question];
};
export default () => gamesEngine(gameData, task);
