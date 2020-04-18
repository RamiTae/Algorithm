/*
--- [120, 110, 140, 150]	 485
----- 3 번째 시도
minBudget = 0; maxBudget = M;
* binary search로 예산을 찾음
  ? nowBudget = minBudget + Math.floor((maxBudget - minBudget) / 2);
  * 탈출 조건 확인
    같은 budget이 두 번 나올 경우 그 budget이 최선인것으로 판단.
    => 범위를 좁혀나가며 탐색하기 때문에 이전 결과의 budget과 현 budget이 같을 경우를 최선으로 판단
  * if(예산 계산 결과 < 0)
    ? maxBudget = nowBudget;
    ? preBudget = nowB;
  * if else(예산 계산 결과 === 0)
    ! result = nowBudget;
    ! break;
  * else
    ? minBudget = nowBudget;
    ? preBudget = nowB;
*/

function solution(budgets, M) {
  let result = 0;
  let sumBudgets = budgets.reduce((acc, val) => {
    if (result < val) {
      result = val;
    }
    return acc + val;
  }, 0);

  if (M - sumBudgets < 0) {
    // 모든 요청이 배정될 수 없음
    let minBudget = 0;
    let maxBudget = M;
    let preBudget = 0;

    while (minBudget >= 0 && maxBudget <= M) {
      //탈출조건: 같은 budget이 두 번 나올 경우
      let nowBudget = minBudget + Math.floor((maxBudget - minBudget) / 2);
      if (nowBudget === preBudget) {
        result = nowBudget;
        break;
      }

      let calculateBudget =
        M -
        budgets.reduce((acc, val) => {
          if (val > nowBudget) {
            return acc + nowBudget;
          } else {
            return acc + val;
          }
        }, 0);

      if (calculateBudget === 0) {
        result = nowBudget;
        // console.log({ calculateBudget, minBudget, maxBudget, nowBudget });
        break;
      } else if (calculateBudget < 0) {
        maxBudget = nowBudget;
        preBudget = nowBudget;
        // console.log({ calculateBudget, minBudget, maxBudget, nowBudget });
      } else {
        minBudget = nowBudget;
        preBudget = nowBudget;
        // console.log({ calculateBudget, minBudget, maxBudget, nowBudget });
      }
    }
  }

  return result;
}

let budgets = [120, 110, 140, 150];
let M = 485;
let expect = 127;

numbers = [9, 8, 5, 6, 7];
M = 5;
expect = 1;

numbers = [1000, 1000, 1000, 1, 100];
M = 500;
expect = 133;

let result = solution(numbers, M);
console.log(`result: ${typeof result} ${result}`);
if (result === expect) {
  console.log("\u001b[36m pass \u001b[0m");
} else {
  console.log("\u001b[31m non pass \u001b[0m");
}
