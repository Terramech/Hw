#include<iostream>

using namespace std;

string encryptCaesar(string str, int shift) {
    string result = "";
    for (char c : str) {
        if (c >= 'a' && c <= 'z') {
            result += (char)('a' + (c - 'a' + shift + 26) % 26);
        } else if (c >= 'A' && c <= 'Z') {
            result += (char)('A' + (c - 'A' + shift + 26) % 26);
        } else {
            result += c;
        }
    }
    return result;
}

string decryptCaesar(string str, int shift) {
    string result = encryptCaesar(str, -shift);
    return result;
}

string encryptAtbash(string str) {
    string result = "";
    string letters = "abcdefghijklmnopqrstuvwxyz";
    string upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (char c : str) {
        if (c >= 'a' && c <= 'z') {
            result += letters[(letters.length() - 1) - (c - 'a')];
        } else if (c >= 'A' && c <= 'Z') {
            result += upperLetters[(upperLetters.length() - 1) - (c - 'A')];
        } else {
            result += c;
        }
    }
    return result;
}

string decryptAtbash(string str) {
    string result = encryptAtbash(str);
    return result;
}

int main() {
    string input;
    cin >> input;
    int shift;
    cin >> shift;
    string encryptedText = encryptCaesar(input, shift);
    cout << "Encrypted - " << encryptedText << endl;
    cout << "Decrypted - " << decryptCaesar(encryptedText, shift) << endl;
    cout << endl;
    string encryptedAtbashText = encryptAtbash(input);
    cout << "Atbash encrypted - " << encryptAtbash(input) << endl << "Atbash decrypted - " << decryptAtbash(encryptedAtbashText) << endl;
    return 0;
}