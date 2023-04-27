export const composeExample2 = () => {

  const scream = (str: string) => str.toUpperCase();
  const exclaim = (str: string) => `${str}!`;
  const repeat = (str: string) => `${str} ${str}`;

  const team = ['hello team1']

  const result = team.map(scream).map(exclaim).map(repeat)

  console.log(result[0])


}