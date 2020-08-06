//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function pushArray(arr) {
    for (var x = 1; x <= 255; x++) {
        arr.push(x);
    }
    return arr;
}
var arr = [];
console.log(pushArray(arr));

//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sumEven (){
    var sum = 0;
    for (var x=0; x<=1000; x++){
        if (x % 2 == 0 ){
        sum = sum + x;
        console.log(sum);
        }
    }
}
console.log(sumEven());

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdd (){
    var sum = 0;
    for (var x=0; x<=5000; x++){
        if (x % 2 == 1 ){
        sum = sum + x;
        }
    }
    return sum;
}
console.log(sumOdd());

//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(array) {
    var sum = 0
    for (var x = 0; x <= array.length - 1 ; x++) {
        sum = sum + array[x];
    }
    return sum;
}

console.log(sumArray([1,2,5]));
console.log(sumArray([-5,2,5,12]));

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function max(array) {
    var temp = 0
    for (var x = 0; x <= array.length - 1 ; x++) {
        if (array[x] > temp){
            temp = array[x];
        }
    }
    return temp;
}

console.log(max([-3,3,5,7]));
console.log(max([-5,2,5,12]));

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function average(array) {
    var sum = 0
    for (var x = 0; x <= array.length - 1 ; x++) {
        sum = sum + array[x];
    }
    return sum / array.length;
}

console.log(average([1,2,5]));
console.log(average([1,3,5,7,20]));

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function pushOddArray(arr) {
    for (var x = 1; x <= 50; x++) {
        if(x % 2 == 1)
        arr.push(x);
    }
    return arr;
}
var arr = [];
console.log(pushOddArray(arr));

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, 
//your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThan(array, y) {
    var newArr = [];
    for (var x = 0; x <= array.length - 1 ; x++) {
        if (array[x] > y){
           newArr.push(array[x]);
        }
    }
    return newArr;
}

console.log(greaterThan([-3,3,5,7], 3));
console.log(greaterThan([-5,2,5,12], 1));

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareArray(array) {
    for (var x = 0; x <= array.length - 1 ; x++) {
      array[x] = array[x] * array [x];
    }
    return array;
}

console.log(squareArray([1,5,10,-2]));
console.log(squareArray([-5,2,5,12]));

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should 
//contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function zeroNegative(array){
    for(var i = 0; i< array.length; i++){
        if(array[i] < 0){
            array[i] = 0;
        }
    }
    return array
}

console.log(zeroNegative([1,5,10,-2]));
console.log(zeroNegative([1,-3,8,-5,0,-2,4,-1]));

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 
//(e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAve(array) {
    var max = 0
    var newArr = [];
    for (var x = 0; x <= array.length - 1 ; x++) {
        if (array[x] > max){
            max = array[x];
        }
    }
    var min = max
    for (var x = 0; x <= array.length - 1 ; x++) {
        if (array[x] < min){
            min = array[x];
        }
    }
    var ave = 0
    
    for (var x = 0; x <= array.length - 1 ; x++) {
        ave = ave + array[x];
    }
    ave = ave / array.length;
    newArr.push(max);
    newArr.push(min)
    newArr.push(ave)
    return newArr;
}

console.log(minMaxAve([-3,3,5,7]));
console.log(minMaxAve([1,5,10,-2]));

//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapFirstLast(array) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array;
}
console.log(swapFirstLast([1, 2, 3, 4]));  
console.log(swapFirstLast([1,5,10,-2]));  

//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2],
//your function will return ['Dojo','Dojo',2].

function numToString(array){
    for(var x = 0; x< array.length; x++){
        if(array[x] < 0 ){
            array[x] = "Dojo"
        }
    }
    return array;
} 

console.log(numToString([-1,-3,2]));
console.log(numToString([1,3,8,-5,0,-2,4,-1]));
