/*
Input: Two arrays of equal length containing integers
Output: A new array where each item is the sum of
the items in arr1 and arr2 at that same index
Examples:
Input: [1, 2, 3],
[4, 5, 6]
Output: [5, 7, 9]
*/

function addArray(array, array){
    var newArray =[];
    for (let i = 0; i<array.length; i++){
        newArray.push(array1[i]+array2[i]);
    }
    return newArray;
}

var array1=[1, 2, 3];
var array2=[4, 5, 6];
var array3 =  addArray(array1, array2);
console.log(array3.length);
console.log(array3);


/*
Array: Second-Largest
Return the second-largest element of an array, or null if there is none.
Bonus: do it with one loop
Examples:
Input: [2, 3, 1, 4]
Output: 3
Input: [3, 3]
Output: null
Input: [2]
Output: null
Input: []
Output: null
*/

function secLarge(array){
    var max = -Infinity
    var second = -Infinity
    for(let x = 0; x < array.length; x++){
        if (array[x] > max){
            second = max;
            max = array[x];
        }
        else if (array[x] > second && array[x] != max){
            second = array [x]
        }
    }
    if(second == max || second == -Infinity){
        return "null";
    }
return second
}
var array1= [4,-3,-1,-5,-1];
var array2= [-5, 0, 3, -1]
var array3= [3,3];
console.log(secLarge(array1));
console.log(secLarge(array2));
console.log(secLarge(array3));

/*
Array: Reverse
Reverse a given array's items in place (don't create a new array).
Don't use any built in methods.
Examples:
Input: [1, 2, 3]
Output: [3, 2, 1]
Input: ['a', 'b']
Output: ['b', 'a']
Input: ['a']
Output: ['a']
Input: []
Output: []
*/

function reverseArray(array) {
    var temp = array.length - 1;
    for(let x = 0; x < array.length / 2; x++){
    [array[x], array[temp - x]] = [array[temp - x], array[x]];
    }
    return array
}
var array1 = [2,4,6,1,3];
var array2 = [-5,2,5,12];
console.log(reverseArray(array1));
console.log(reverseArray(array2));