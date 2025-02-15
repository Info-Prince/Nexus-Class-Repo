#include<iostream>
#include<vector>
using namespace std;

int main() {
    int n;
    cout<<"Enter value for n row or column in matrix: ";
    cin>>n;

    int m1[n][n];
    int m2[n][n];

    
    // Take input in the first matrix
    cout << "Enter elements of the first matrix:" << endl;
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++) {
            cin>>m1[i][j];
        }
    }

    // Take input in the second matrix
    cout << "Enter elements of the second matrix:" << endl;
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++) 
        cin>>m2[i][j];
    } 

    // multify it
    vector<vector<int>> result(n, vector<int>(n, 0));
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++) {
            for(int k = 0; k<n; k++) 
            // result[i][j] += m1[i][k] * m2[i][k];
            result[i][j] += m1[i][k] * m2[k][j];
        }
    }

    for(int i = 0; i<n; i++) {
        for(int j = 0; j<n; j++)
        cout<<result[i][j]<<" ";

        cout<<endl;
    }

}