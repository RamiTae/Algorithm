/*
--- [120, 110, 140, 150]	 485
----- 2.5 번째 시도
세팅: maxBudget = M, minBudget = 0
* binary search로 예산을 찾음: x1
  x1을 예산으로 사용할 경우. x1, x1을 예산으로 했을 경우의 차액을 저장: preBudget = x1, remainBudget = 차액
* 다음 예산을 찾음: x2 = x1 + Math.floor((M - x1) / 2)
  x2를 예산으로 사용할 경우. x2, x2 예산 차액
  remainBudget과 x2 예산 차액을 비교
  * x2차액 < 0
    !=> maxBudget = x2; preBudget, remainBudget 그대로;
    다음 예산을 찾음: x3 = Math.floor((maxBudget - minBudget) / 2)
  * remainBudget >= x2차액
    (equal 조건은 while loop의 처음 조건을 통과하기 위해서 필요함)
    !=> minBudget = x2; preBudget = x2, remainBudget = x2차액;
    다음 예산을 찾음: x3 = x2 + Math.floor((maxBudget - x2) / 2)
  * else
    => 이론상 xn이 점점 커지기 때문에 이 else문을 탈 일이 없음. 뭔가가 잘못된 것이다..!
* 탈출 조건
  같은 budget이 두 번 나올 경우 그 budget이 최선인것으로 판단.
  => 다회 방문 여부를 저장해야하기 때문에 binary search로 찾은 budget과 remainBudget들을 object로 저장
*/

function solution(budgets, M) {
  let result = 0;
  let sumBudgets = budgets.reduce((acc, val) => {
    if (result < val) {
      result = val;
    }
    return acc + val;
  }, 0);
  let calculatedBudgets = {};

  if (M - sumBudgets < 0) {
    // 모든 요청이 배정될 수 없음
    let maxBudget = M;
    let minBudget = 0;
    result = Math.floor(M / 2);
    let preBudget = 0;
    calculatedBudgets[preBudget] = 100001;

    while (calculatedBudgets[result] === undefined) {
      //탈출조건: 같은 budget이 두 번 나올 경우
      let remainBudget =
        M -
        budgets.reduce((acc, val) => {
          if (val > result) {
            return acc + result;
          } else {
            return acc + val;
          }
        }, 0);
      calculatedBudgets[result] = remainBudget;
      let preRemainBudget = calculatedBudgets[preBudget];

      if (remainBudget < 0) {
        maxBudget = result;
        result = minBudget + Math.floor((maxBudget - minBudget) / 2);
        console.log("** remainBudget < 0\n", { maxBudget, minBudget, result });
      } else if (preRemainBudget >= remainBudget) {
        minBudget = result;
        result += Math.floor((maxBudget - result) / 2);
        console.log("** preRemainBudget >= remainBudget\n", { maxBudget, minBudget, result });
      } else {
        console.log("something wrong!!");
        break;
      }
    }
  }

  console.log(calculatedBudgets);
  return result;
}

let budgets = [120, 110, 140, 150];
let M = 485;
let expect = 127;

budgets = [9, 8, 5, 6, 7];
M = 5;
expect = 1;

budgets = [1000, 1000, 1000, 1, 100];
M = 500;

let result = solution(budgets, M);
console.log({ result });
if (result === expect) {
  console.log("pass");
} else {
  console.log("non pass");
}
