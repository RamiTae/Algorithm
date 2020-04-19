/* 
 정렬 방법
 ( a, b )
 * if: a === b
   * return 0
 * else if: a.toString()[0] > b.toString()[0]
   *  
 */

function solution(numbers) {
  var answer = "";
  return answer;
}

let numbers = [1, 129, 52];
let expect = "521291";

// numbers = [2, 20, 32, 22, 23, 27];
// let possibleNum = function(numbers){

// }();
// expect = Math.max(possibleNum);
// expect = expect.toString():

let result = solution(numbers);
console.log(`result: ${typeof result} ${result}`);
if (result === expect) {
  console.log("\u001b[36m pass \u001b[0m");
} else {
  console.log("\u001b[31m non pass \u001b[0m");
}
