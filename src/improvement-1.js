/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */
export default countLetterR = (string) => {
  const newArray = string.match(/R/g);
  return newArray.length;
};

console.log(countLetterR("abcdefRRR1234"));
