/* 
----- 1차 시도
 정렬 방법
 ( a, b )
  * if: a === b
    * return 0
  * else if: a.toString()[0] === b.toString()[0]
    * toString의 길이가 같다. => return b - a
    * 각 자릿수끼리 비교
      * 해당 자릿수가 undefined
        * undefined아닌 값이 0 => undefined가 앞
        * undefined아닌 값이 0 아님 => undefined가 뒤
      * return 큰 자릿수에 큰 값이 오는 수를 앞으로 오게 함.
  * return b.toString()[0] - a.toString()[0]
 */

function solution(numbers) {
  let answer = "";
  const cpNumbers = numbers.concat();

  cpNumbers.sort((a, b) => {
    const strA = a.toString();
    const strB = b.toString();
    if (a === b) {
      return 0;
    } else if (strA[0] === strB[0]) {
      if (strA.length === strB.length) {
        return b - a;
      }
      let compareResult;
      for (let i = 0; i < (strA.length > strB.length ? strA : strB); i++) {
        // console.log({ i, strA, strB });
        if (strA[i] === undefined) {
          if (strB[i] !== "0") {
            compareResult = 1;
          } else {
            compareResult = -1;
          }
          break;
        } else if (strB[i] === undefined) {
          if (strA[i] !== "0") {
            compareResult = -1;
          } else {
            compareResult = 1;
          }
          break;
        }
        if (strB[i] - strA[i] !== 0) {
          compareResult = strB[i] - strA[i];
          break;
        }
      }
      return compareResult;
    }
    return strB[0] - strA[0];
  });

  // console.log(cpNumbers);

  answer = cpNumbers.join("");

  return answer;
}

let numbers = [1, 129, 52];
let expect = "521291";

numbers = [3, 30, 34, 5, 9];
expect = "9534330";

numbers = [1, 129, 52];
expect = "521291";

let result = solution(numbers);
console.log(`result: ${typeof result} ${result}`);
if (result === expect) {
  console.log("\u001b[36m pass \u001b[0m");
} else {
  console.log("\u001b[31m non pass \u001b[0m");
}
