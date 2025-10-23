#include <iostream>

using namespace std;

// #1

// int main() {

//     int arr[] = {1, 5, 8, 5, 3, 2, 14, 17, 3, 185, 26, 25, 63, 12};
//     for (int j = 0; j < size(arr); j++) {
//         for (int i = 1; i < size(arr); i++) {
//             if (arr[i - 1] > arr[i]) {
//                 int tempo = arr[i];
//                 arr[i] = arr[i - 1];
//                 arr[i - 1] = tempo;
//         };
//         };
//     }

//     for (int i = 0; i < size(arr); i++){
//         cout << arr[i] << endl;
//     }
//     return 0;
// }


// #2


// int main() {
//     int arr[3][3] = {
//         {-1, 2, -3},
//         {4, -5, 6},
//         {-7, 8, 9}
//     };
//     for (int i = 0; i < 3; i++){
//         for (int j = 0; j < 3; j++) {
//             if (arr[i][j] < 0) {
//                 arr[i][j] *= -1;
//             }
//         }
//     }
//     for (int i = 0; i < 3; i++){
//         for (int j = 0; j < 3; j++) {
//             cout << arr[i][j] << endl;
//         }
//     }
//     return 0;
// }


// #3

int main() {
    string a;
    cin >> a;
    string check = "";
    for (int i = 0; i < a.size(); i++) {
        if (check.find(a[i]) != true) {
            check += a[i];
            cout << a[i] << endl;
        }            
    }
    cout << check << endl;
    return 0;
}