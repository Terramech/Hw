#include <iostream>
#include <vector>
#include <stack>
#include <string>
#include <sstream>
#include <cmath>
#include <map>

using namespace std;

int order(char oper) {
    int opValue;
    if (oper == '+' || oper == '-') {
        opValue = 1;
    }
    if (oper == '*' || oper == '/') {
        opValue = 2;
    }
    if (oper == '(' || oper == ')') {
        opValue = 0;
    }
    return opValue;
}



string convertToRPN(string expr) {
    stack<char> operators = {}; 
    string RPN;


    for (char num : expr) {
       if (isdigit(num)) {
        RPN.push_back(num);
        RPN.push_back(' ');

       } else if (num == '('){
        operators.push(num);
       }
       else if (num == ')') {
            while (!operators.empty() && !operators.top() == '(') {
                RPN.push_back(operators.top());
                cout << RPN << endl;
                RPN.push_back(' ');
                operators.pop();
            }
        operators.pop();
       } else if (num == '+' || num == '-' || num == '*' || num == '/') { 
            while (!operators.empty() && order(operators.top()) >= order(num)) {
                RPN.push_back(operators.top());
                RPN.push_back(' ');
                operators.pop();
            }
        operators.push(num);
       }
    }
    while (!operators.empty()) {
        RPN.push_back(operators.top());
        RPN.push_back(' ');
        operators.pop();
    }
    return RPN;
}

double rpnCalc(string expression) {
    stack<double> operands;
    double result;
    for (char el : expression) {
        if (isdigit(el)) {
            operands.push(el - '0');
        } else if (el == '+' || el == '-' || el == '*' || el == '/') {
            int operand1 = operands.top();
            operands.pop();
            int operand2 = operands.top();
            operands.pop();
            if (el == '+') {
                result = operand2 + operand1;
            }
            else if (el == '-') {
                result = operand2 - operand1;
            }
            else if (el == '*') {
                result = operand2 * operand1;
            }
            else if (el == '/') {
                result = operand2 / operand1;
            }
            operands.push(result);
        }
 
    }
    return operands.top();
}
int main(){
    string expr;
    getline(cin, expr);
    cout << convertToRPN(expr) << endl;
    cout << rpnCalc(convertToRPN(expr)) << endl;
    return 0;
}