#include <iostream>

using namespace std;



// #1

int main() {
    int a,
        b,
        c;
    cin >> a;
    cin >> b;
    cin >> c;
    struct Date {
        int day;
        int month;
        int year;
    };
Date Current = {a, b, c};
    if ((Current.year % 4) == 0) {
        cout << "Високосный" << endl;
        return 0;
    };
    cout << "Не високосный" << endl;
    return 0;
}


// #2

int main() {
    int year;
    int count = 0;
    cin >> year;
    struct Car {
        string mark;
        string model;
        int prodStart;
    };

    Car Cars[5] = {
        {"V1", "V", 2018},
        {"BMX", "BM", 2020},
        {"V5", "V", 2036},
        {"XoR", "Xr", 2031},
        {"M5", "M", 2025}
    };
    for (int i = 0; i < 5; i++) {
        if (Cars[i].prodStart >= year) {
            count += 1;
        };
    };
    cout << count << endl;
    return 0;
}


// #3


int main() {
    int maxSalary;
    string Emp;
    string oc;
    struct Employee {
        string Fullname;
        string Occupation;
        int Salary;
    };

    Employee Employeed[4] = {
        {"A.E.I.", "Administration", 56000},
        {"B.F.J.", "Seller", 20000},
        {"C.G.K", "Seller", 22000},
        {"D.H.L", "Supplier", 32000},
    };
    cin >> oc;
    for (int i = 0; i < 4; i++) {
        if (Employeed[i].Occupation == oc) {
            if (maxSalary < Employeed[i].Salary) {
                maxSalary = Employeed[i].Salary;
                Emp = Employeed[i].Fullname;
            };
        };
    };
    cout << Emp << " = "<< maxSalary << endl;

    return 0;
}