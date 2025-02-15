#include<iostream>
#include<vector>
using namespace std;

void printSubArray(vector<int>&arr, int n) {
    for(int i = 0; i<n; i++) {
        for(int j = i; j<n; j++) {
            for(int k = i; k<=j; k++) {
                cout<<arr[k]<<" ";
            }
            cout<<",";
        }
        cout<<endl;
    }
}

int main() {    
    int n;
    cout<<"Enter value of n: ";
    cin>>n;

    vector<int>arr(n);
    cout<<"Enter array element: ";
    for(int i = 0; i<n; i++) 
    cin>>arr[i];

    // function call to print all array's element
    printSubArray(arr, n);
}