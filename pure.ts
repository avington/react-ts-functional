const GLOBAL_VERSION = 'v1';

export const impure1Example = (version) => {
  //impure because it is taking a
  const url = `http://api.com/${version}/users`;
  return url;
};

export const impure2Example = () => {
  // impure because it returns different output with same input
  return Math.floor(Math.random() * 10000);
};

export const impure3Example = (input: string) => {
  // impure because it reaches out to outside world with side effect
  console.log('input', input);
  return input;
};
