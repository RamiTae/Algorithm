//https://www.acmicpc.net/problem/2563
#include <iostream>
#define MAX 100

using namespace std;

int TestCase() {
	int n, x, y;
	int area = 0;
	bool map[MAX][MAX] = { false, };
	cin >> n;
	for (int idx = 0; idx < n; idx++) {
		cin >> x >> y;
		for (int i = y; i < y + 10; i++) {
			for (int j = x; j < x + 10; j++) {
				if (!map[i][j]) {
					area++;
					map[i][j] = true;
				}
			}
		}
	}

	return area;
}

int main() {
	int t;
	cin >> t;

	while (t--) {
		cout << TestCase() << endl;
	}

	return 0;
}