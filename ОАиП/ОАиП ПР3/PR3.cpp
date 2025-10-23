#include <iostream>
#include <cmath>

using namespace std;

// # 5


// int main() {

//     return 0;
// }


// # 4


// int main() {
//     int f0 = 0, f1 = 1, F, input;
//     cin >> input;
//     for (int i = 1; i < input; i++) {
//         F = f0 + f1;
//         f0 = f1;
//         f1 = F;
//     }
//     cout << F << endl;
//     return 0;
// }


// # 3


// int main() {
//     int count = 1, num;
//     cin >> num;
//     for (int i = 3; i <= num; i += 3) {
//             count *= 2;

//     }
//     cout << "через " << num << " часов ~ " << count << " Амёб" << endl;
//     return 0;
// }


// # 2


// int main() {
//     int num;
//     cin >> num;
//     string Tnum = to_string(num), outcome;
//     int numlen = Tnum.length();
//     for (int i = 0; i < numlen; i++) {
//         outcome += Tnum[numlen - i - 1];
//     }
//     cout << outcome << endl;

//     return 0;
// }


// # 1


// int main() {
//     int num = 0, outcome1 = 0, outcome2 = 1;
//     cin >> num;
//     string Tnum = to_string(num);
//     int numlen = Tnum.length();
//     for (int i = 0; i < numlen; i++) {
//         outcome1 += int(Tnum[i] - '0');
//         outcome2 *= int(Tnum[i] - '0');
//         }
//     if (outcome1 == outcome2) {
//         cout << num << " - Счастливое число" << endl;
//     } else {
//         cout << num << " - Несчастливое число" << endl;
//     }
//     return 0;
// }
