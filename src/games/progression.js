import { getRandomNumber } from '../utils';
import gamesEngine from '../engine';

const task = 'What number is missing in the progression?';
const minValue = 2;
const startMaxValue = 10;
const stepMaxValue = 6;

const giveGameData = () => {
  let correctAnswer;
  let arithmProg = '';
  const str = [];
  const progressionLength = 10;

  const start = getRandomNumber(minValue, startMaxValue);
  const diff = getRandomNumber(minValue, stepMaxValue);
  const hiddenNumber = start + diff;

  for (let i = 0; i < progressionLength; i += 1) {
    const number = start + diff * i;
    if (number === hiddenNumber) {
      correctAnswer = hiddenNumber;
      str.push('..');
    } else {
      str.push(number);
    }
  }
  arithmProg = str.join(' ');

  const question = arithmProg;
  return [String(correctAnswer), question];
};
export default () => gamesEngine(giveGameData, task);
