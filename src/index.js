module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const open = [];
  const close = [];
  const obj = {};

  for (const iterator of bracketsConfig) {
    open.push(iterator[0]);
    close.push(iterator[1]);
    if (iterator[0] !== iterator[1]) {
      obj[iterator[1]] = iterator[0];
    }
  }

  for (const s of str) {
    if (open.includes(s)) {
      if (
        close.includes(s) &&
        stack.length !== 0 &&
        stack[stack.length - 1] === s
      ) {
        stack.pop();
      } else {
        stack.push(s);
      }
    } else if (close.includes(s)) {
      if (stack.length === 0 || obj[s] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// function check(str, bracketsConfig) {
//   const indexx = [];
//   const end = [];
//   let two = 0;
//   for (let i = 0; i < str.length; i++) {

//     for (let j = 0; j < bracketsConfig.length; j++) {
//       if(bracketsConfig[j][0] === bracketsConfig[j][1]){
//         if(str[i] === bracketsConfig[j][0] && two === 0){
//           end.push(str[i]);
//           two = 1;
//           break;
//         }
//         if(str[i] === bracketsConfig[j][0] && two !== 0){
//           end.pop();
//           two = 0;
//           break;
//         }
//       }
//       if (bracketsConfig[j].indexOf(str[i]) == 0) {
//         end.push(str[i]);
//         indexx.push(j);
//         break;
//       }
//       if (bracketsConfig[j].indexOf(str[i]) == 1 && j === indexx[indexx.length - 1]) {
//         end.pop();
//         indexx.pop();
//       }
//     }}
//     if (end.length !== 0) {
//       return false;
//     } else {
//       return true;
//     }

// }

function check(str, bracketsConfig) {
  const stack = [];
  const open = [];
  const close = [];
  const obj = {};

  for (const iterator of bracketsConfig) {
    open.push(iterator[0]);
    close.push(iterator[1]);
    if (iterator[0] !== iterator[1]) {
      obj[iterator[1]] = iterator[0];
    }
  }

  for (const s of str) {
    if (open.includes(s)) {
      if (
        close.includes(s) &&
        stack.length !== 0 &&
        stack[stack.length - 1] === s
      ) {
        stack.pop();
      } else {
        stack.push(s);
      }
    } else if (close.includes(s)) {
      if (stack.length === 0 || obj[s] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const config1 = [["(", ")"]];
const config2 = [
  ["(", ")"],
  ["[", "]"],
];
const config3 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];
const config4 = [["|", "|"]];
const config5 = [
  ["(", ")"],
  ["|", "|"],
];
const config6 = [
  ["1", "2"],
  ["3", "4"],
  ["5", "6"],
  ["7", "7"],
  ["8", "8"],
];
const config7 = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
  ["|", "|"],
];

console.log(check("()", config1)); // Output: true
