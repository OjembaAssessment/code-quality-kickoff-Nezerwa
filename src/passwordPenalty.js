/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password

 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //
  let count = 0;

  // check if a password is empty
  if (!password || password === "" || password == "null") return 0;
  password.split("").forEach((char, index) => {
    if (password[index] === password[index - 1]) count++;
  });
  if (count >= 2) return 2;
  return count;
}

console.log(penaltyPoints("2hT62g333u7"));
