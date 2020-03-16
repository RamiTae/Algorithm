/*
--- [120, 110, 140, 150]	 485

----- 첫 번째 시도 (실패)
- 총 예산 / 지방의 수 = x
485 / 4 = 121.25 약 121

- x보다 적은 금액을 요청한 지방의 차액 / x보다 많은 금액을 요청한 지방의 수 = y
121 - 120 = 1
121 - 110 = 11 ==> 11 + 1 = 12
12 / 2 = 6

- return x + y
121 + 6 = "127"

----- 두 번째

*/

function solution(budgets, M) {
  var answer = 0;
  let averageBudget = Math.floor(M / budgets.length);

  let difference = 0;
  let region = 0;

  budgets.forEach(budget => {
    if (budget < averageBudget) {
      difference += averageBudget - budget;
    } else if (budget > averageBudget) {
      region++;
    }
  });

  answer = averageBudget + Math.floor(difference / region);

  return answer;
}
