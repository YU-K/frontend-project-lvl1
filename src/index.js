import  readlineSync  from 'readline-sync';

const sayHello = (name) => console.log(`Hello, ${name}!`);
const askName = () => {
  const actual = readlineSync.question('May I have your name? ');
  return sayHello(actual);
};

export default askName;
