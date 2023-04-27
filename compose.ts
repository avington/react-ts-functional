export const composeExample = () => {
  const scream = (str: string) => str.toUpperCase();
  const exclaim = (str: string) => `${str}!`;
  const repeat = (str: string) => `${str} ${str}`;

  console.log(repeat(exclaim(scream('hello team1'))));

  // using a compose function
  const compose =
    (...fns) =>
    (x) =>
      fns.reduceRight((acc, fn) => fn(acc), x);

    const yay = compose(repeat, exclaim, scream);
    console.log(yay)
};
