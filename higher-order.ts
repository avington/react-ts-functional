export const higherOrderExample = () => {
  // higer order function that takes in a function and returns a function
  const withCount = (fn) => {
    let count = 0;

    // return a function
    return (...args) => {
      console.log(`Call count ${++count}`);
      return fn(...args);
    };
  };

  const add = (x, y) => x + y;

  const countedAdd = withCount(add)

  console.log(countedAdd(1,2))
console.log(countedAdd(3,4))
console.log(countedAdd(5,6))
};
