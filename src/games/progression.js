import { getRandomNumber } from '../utils';
import gameEngine from '../engine';

const task = 'What number is missing in the progression?';
const minValue = 2;
const startMaxValue = 10;
const stepMaxValue = 6;

const getGameData = () => {
  const numbers = [];
  const progressionLength = 10;
  const start = getRandomNumber(minValue, startMaxValue);
  const diff = getRandomNumber(minValue, stepMaxValue);
  const indexOfHiddenNumber = getRandomNumber(0, progressionLength)

  for (let i = 0; i < progressionLength; i += 1) {
    const number = start + diff * i;
    numbers.push(number);
  }

  const correctAnswer = numbers[indexOfHiddenNumber];
  numbers[indexOfHiddenNumber] = '..'
  const arithmeticProgression = numbers.join(' ');

  const question = arithmeticProgression;
  return [String(correctAnswer), question];
};
export default () => gameEngine(getGameData, task);
