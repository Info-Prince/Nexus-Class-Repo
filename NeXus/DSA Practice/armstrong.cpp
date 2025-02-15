#include<iostream>
#include<stdio.h>
#include<math.h>
#include<algorithm>
using namespace std;

// function declaration to find power of number
int power(int base, int expo) {
    int result = 1;
    for(int i = 0; i<expo; i++)
    {
        result *= base;
    }

    return result;
}


//function declaration for armstrong number.
bool checkArmstrong (int n) {
    int num = n;
    int countDigit = 0;

    while(num) {
        countDigit++;
        num /= 10;
    }

    num = n;
    int digit, ans = 0 ;
    while(num) {
        digit = num%10;
        num/=10;
        ans += power(digit, countDigit);
    }

    return ans == n;
}

int main()  {
    int n;
    cout<<"Enter a number: ";
    cin>>n;
    
    cout<<checkArmstrong(n);
}