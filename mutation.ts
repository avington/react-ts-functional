export const mutationArrayExample = () => {
  const numbers = [1, 2, 3];
  // const myNumbers = numbers;

  const myNumbers = (arr, item) => {
    return [...arr, item]
  };

  // myNumbers.push(6);

  console.log('myNumbers', myNumbers(numbers, 6));
  console.log('numbers', numbers);
};

export const mutaionObjectExample = () => {
  const names = { a: 'Klaus', b: 'Jack', c: 'Nirmal' };

  const myNames = {...names, a: 'Tushar'}

  console.log('names', names);
  console.log('myNames', myNames);
};

// any function that returns an array or an object should at least use the spread for safty

// const newArry = [...oldArryofObjects.map(cloneDeep)]
