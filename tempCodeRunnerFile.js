const lines = 7;
const space = " ";
const star = "*";
let result = "";

for (let i = 0; i < lines; i++) {
  const spaces = space.repeat(lines - 1 - i);
  const stars = star.repeat(2 * i + 1);
  result += spaces + stars + "\n";
}

console.log(result);
// Проверяется именно переменная result, формируйте строку в ней
//     *
//    ***
//   *****
//  *******
// *********
//***********
