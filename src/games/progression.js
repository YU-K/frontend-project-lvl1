import getRandomNumber from '../utils';
import gameEngine from '../engine';

const task = 'What number is missing in the progression?';
const minValue = 2;
const startMaxValue = 10;
const stepMaxValue = 6;

const getGameData = () => {
  const progression = [];
  const progressionLength = 10;
  const start = getRandomNumber(minValue, startMaxValue);
  const diff = getRandomNumber(minValue, stepMaxValue);
  const indexOfHiddenNumber = getRandomNumber(0, progressionLength - 1);

  for (let i = 0; i < progressionLength; i += 1) {
    const number = start + diff * i;
    progression.push(number);
  }

  const correctAnswer = progression[indexOfHiddenNumber];
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');

  return [String(correctAnswer), question];
};
export default () => gameEngine(getGameData, task);
