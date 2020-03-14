//https://level.goorm.io/exam/49051/%EB%B6%88%EC%9D%B4%EC%95%BC/quiz/1
/*
	1 <= (r, c) <= 1000
	#: ��, &: �ΰ�, @: ��
	&��������. @�� ���� �� ���� �ּ� �ð� ���ϱ�(1ĭ ������ ��).
	1�ʸ��� �����¿�� �̵�:: BFS���
	�ΰ���ǥ ����. map�ٲٱ�.
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