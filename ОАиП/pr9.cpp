#include<iostream>

using namespace std;

const int stackSize = 10;
int top = -1;
int stackData[stackSize];

void push(int x) {
    top++;
    stackData[top] = x;
}

void pop() {
    cout << "-" << stackData[top] << endl;
    top--;
}

void stack() {
    for (int i = 0; i < 10; i++) {
        int x;
        cin >> x;
        push(x);
    }
    for (int i = 0; i <= top; i++) {
        cout << stackData[i] << endl;
    }
    while (top >= 0) {
        pop();
            if (top >= 0) {
            for (int i = 0; i <= top; i++) {
                cout << stackData[i] << " ";
            }
            cout << endl;
        } else {
            cout << "stack is empty" << endl;
        }
    }
}




const int queueSize = 10;
int front = -1, back = -1;
int queueData[queueSize];

void addToQueue(int x) {
    if (back >= queueSize - 1) {
        cout << "Queue is full!" << endl;
        return;
    }
    if (front == -1) front = 0;
    back++;
    queueData[back] = x;
}

void removeFromQueue() {
    if (front == -1 || front > back) {
        cout << "Queue is empty!" << endl;
        return;
    }
    front++;
    if (front > back) {
        front = back = -1;
    }
}

void queue() {
    for (int i = 0; i < 10; i++) {
        int x;
        cin >> x;
        addToQueue(x);
    }
    for (int i = front; i <= back; i++) {
        cout << queueData[i] << " ";
    }
    cout << endl;
    while (front != -1) {
        cout << "-" << queueData[front] << endl;
        removeFromQueue();
        if (front != -1) {
            for (int i = front; i <= back; i++) {
                cout << queueData[i] << " ";
            }
            cout << endl;
        } else {
            cout << "queue is empty" << endl;
        }
    }
}

int main() {
    stack();
    queue();
    return 0;
}