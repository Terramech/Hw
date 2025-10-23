#include <iostream>

using namespace std;

// # 1.1



// int add(int a, int b) {
//     int res = a + b;
//     return res;
// }
// int substract(int a,int b) {
//     int res = a - b;
//     return res;
// }

// int multiply(int a,int b) {
//     int res = a * b;
//     return res;
// }

// double division(double a, double b) {
//     if (b == 0) {
//         return 0;
//     }
//     double res = a / b;
//     return res;
// }

// int main() {
//     int a, b;
//     cin >> a;
//     cin >> b;
//     cout << add(a, b) << endl;
//     cout << substract(a, b) << endl;
//     cout << multiply(a, b) << endl;
//     cout << division(a, b) << endl;
//     return 0;
// }



// # 1.2



// bool isEven(int a) {
//      if (a % 2 == 0) {
//         return true;
//      }
//      return false;
// };

// bool isPrime(int a) {
//     if (a <= 1) {
//         return false;
//     }
//     for (int i = 2; i < a; i++) {
//         if (a % i == 0) {
//             return false;
//         }
//     }
//     return true;
// };
// int sumDigit(int a, int b) {
//     return a + b;
// }

// int main() {
//     int a,
//         b;
//     cin >> a;
//     cin >> b;
//     cout << isEven(a) << endl;
//     cout << isPrime(a) << endl;
//     cout << sumDigit(a, b) << endl;
//     return 0;
// }

// # 2

// # 2.1

// long long factorial(int a) {
//     long long fact = 1;
//     for (long long i = a; i >= 1; i--) {
//         fact *= i;
//     }
//     return fact;
// }

/// # 2.2

// int fibonacci(int a) {
//     int total,
//         first = 0,
//         current = 1;
//     for (int i = 1; i < a; i++) {
//         total = first + current;
//         first = current;
//         current = total;
//     }
//     return total;
// }

// int main() {

//     long long a;
//     cin >> a;
//     cout << fibonacci(a) << endl;
//     return 0;
// }


// #3


// #3.1
// double min(double x, double y) {
//     if (x < y) {
//         return x;
//     }
//     return y;
// }

// double max(double x, double y) {
//     if (x > y) {
//         return x;
//     }
//     return y;
// }

// void swap(double &x, double &y) {
//     double freeSpace = x;
//     x = y;
//     y = freeSpace;
// }

// int main() {
//     double x,
//            y;
//     cin >> x;
//     cin >> y;
//     double minXY = min(x, y);
//     double maxXY = max(x, y);
//     x = minXY;
//     y = maxXY;
//     cout << "x = " << x << "\n" << "y = " << y << endl;
//     return 0;
// }

// #3.2

void swap(double &x, double &y) {
 double freeSpace = x;
    x = y;
    y = freeSpace;
}


int main() {
double A,
       B,
       C,
       D;
    cin >> A;
    cin >> B;
    cin >> C;
    cin >> D;
    cout << "A = " << A << "\n" << "B = " << B << "\n" << "C = " << C << "\n" << "D = " << D << endl;
    swap(A, B);
    swap(C, D);
    swap(B, C);
    cout << "new A = " << A << "\n" << "new B = " << B << "\n" << "new C = " << C << "\n" << "new D = " << D << endl;
    return 0;
}