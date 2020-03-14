//https://level.goorm.io/exam/49051/%EB%B6%88%EC%9D%B4%EC%95%BC/quiz/1
/*
	1 <= (r, c) <= 1000
	#: 벽, &: 인간, @: 불
	&에서시작. @가 닿을 때 까지 최소 시간 구하기(1칸 남았을 때).
	1초마다 상하좌우로 이동:: BFS사용
	인간좌표 저장. map바꾸기.
*/

#include <iostream>
using namespace std;
#define MAX 1000

char map[MAX][MAX] = { '.', };

int main() {
	int r, c;
	int ans = -1;
	cin >> r >> c;
	for (int i = 0; i < r; i++) {
		for (int j = 0; j < c; j++) {
			cin >> map[i][j];
		}
	}

	for (int i = 0; i < r; i++) {
		for (int j = 0; j < c; j++) {
			cout << map[i][j];
		}
		cout << endl;
	}
	cout << ans;

	return 0;
}