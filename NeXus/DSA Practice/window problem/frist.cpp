#include<iostream>
#include<vector>
using namespace std;

void printWindow(vector<int>&arr, int n) {
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n-i; j++) {
            for(int k = j; k<j+i+1; k++){
                cout<<arr[k]<<" ";
            }
            cout<<", ";
        }
        cout<<endl;
    }

    return;
}

int main()  {
    int n; 
    cout<<"Enter value of n: ";
    cin>>n;

    vector<int>arr(n);
    for(int i = 0; i<n; i++) 
    cin>>arr[i];

    // function call to form all possible window
    printWindow(arr, n);
}