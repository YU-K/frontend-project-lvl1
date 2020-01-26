import readlineSync from 'readline-sync';

export const sayHello = (name) => console.log(`Hello, ${name}!`);
export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return sayHello(name);
};
export default askName;
