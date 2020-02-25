import getRandomNumber from '../utils';
import gameEngine from '../engine';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const index = getRandomNumber(0, 2);
  const operator = operators[index];
  const question = `${number1} ${operator} ${number2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      break;
  }

  return [String(correctAnswer), question];
};

export default () => gameEngine(getGameData, task);
