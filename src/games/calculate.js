import { getRandomNumber, getRandomIndex } from '../utils';
import gamesEngine from '../engine';

const task = 'What is the result of the expression?';

const giveGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const size = operators.length;
  const index = getRandomIndex(size);
  const operator = operators[index];
  const question = `Question: ${number1} ${operator} ${number2}`;
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

export default () => gamesEngine(giveGameData, task);
