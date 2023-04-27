export const curryingExample = () => {
  /*
  function add(x, y)  {
    return x + y
  }
  */

  function add(x) {
    return function (y) {
      return x + y;
    };
  }

  const addThree = add(3)

  

  console.log(addThree(4))
  console.log(addThree(10))
  console.log(addThree(20))
};
