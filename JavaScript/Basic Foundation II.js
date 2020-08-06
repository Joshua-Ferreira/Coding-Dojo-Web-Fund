//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(array){
    for(let i = 0; i< array.length; i++){
        if(array[i] >= 0){
            array[i] = "big";
        }
    }
    return array
}
var array1 = [-1,3,5,-5];
var array2 = [1,-3,8,-5,0,-2,4,-1];
console.log(biggieSize(array1));
console.log(biggieSize(array2));

//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(array) {
    var max = array[0]
    for (let x = 0; x <= array.length - 1 ; x++) {
        if (array[x] > max){
            max = array[x];
        }
    }
    var min = max
    for (let x = 0; x <= array.length - 1 ; x++) {
        if (array[x] < min){
            min = array[x];
        }
    }
    console.log(min)
    return max
}

var array1 =  [-1,3,5,-5]
var array2 =  [1,-3,8,-5,0,-2,4,-1]
console.log(printLowReturnHigh(array1))
console.log(printLowReturnHigh(array2))

//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(array) {
    for (let x = 0; x <= array.length - 1 ; x++) {
        if (array[x] % 2 !== 0){
            var odd = array[x];
        }
        if (odd % 2 !== 0){
            break;
        }
    }   
    console.log(array[array.length-2]);
    return odd;
}
var array1 =  [-1,3,5,-5];
var array2 =  [1,-3,8,-5,0,-2,4,-1];
console.log(printOneReturnAnother(array1))
console.log(printOneReturnAnother(array2))

//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  
//Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleArray(array) {
    var newArray =[];
    for (let x = 0; x <= array.length - 1 ; x++) {
      newArray[x] = array[x] * 2;
    }
    console.log(array);
    return newArray;
}
var array1 = [1,5,10,-2];
var array2 = [-5,2,5,12];
console.log(doubleArray(array1));
console.log(doubleArray(array2));

//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  
//Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(array){
    var temp = 0;
    for(let x = 0; x < array.length; x++){
        if (array[x] >= 0){
            temp = temp + 1;
        }
    }
    array[array.length-1] = temp;
    return array;
}
var array1 = [1,5,10,-2];
var array2 = [-5,2,5,12];
console.log(countPositives(array1));
console.log(countPositives(array2));

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, 
//print "Even more so!".
function EvenAndOdds(array){
    for(let x=0; x<array.length; x++){
        if(array[x] % 2 !== 0){
            if(array[x+1]%2 !== 0){
                if(array[x+2]%2 !== 0){
                    console.log("That's odd!");
                }
            }
        }
        if(array[x]%2 == 0){
            if(array[x+1]%2 == 0){
                if(array[x+2]%2 == 0){
                    console.log("Even more so!");
                }
            } 
        }
    }
}
var array2 = [1,5,10,-4,2];
var array1 = [-5,7,5,12];
console.log(EvenAndOdds(array1));
console.log(EvenAndOdds(array2));
//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
//Afterward, console.log each array value and return arr.

function incrementTheSecond(array){
    for(let x = 1; x < array.length; x += 2){
        array[x] = array[x] + 1;
    }
    return array;
}
var array1 = [1,5,10,-2];
var array2 = [-5,2,5,12,3,7,2,-5,-9,1];
console.log(incrementTheSecond(array1));
console.log(incrementTheSecond(array2));


//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string 
//with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) 
//should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(array){
    for(let i = array.length -1; i > 0; i--){
        array[i]= array[i-1].length
    }

    return array;
}
var array1 = ["hello", "dojo", "awesome"];
var array2 = ["coding","is","totally","awesome"];
console.log(previousLengths(array1));
console.log(previousLengths(array2));

//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  
//Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(array) {
    var newArray =[];
    for (let x = 0; x <= array.length - 1 ; x++) {
      newArray[x] = array[x] + 7;
    }
    console.log(array);
    return newArray;
}
var array1 = [1,5,10,-2];
var array2 = [-5,2,5,12];
console.log(addSeven(array1));
console.log(addSeven(array2));

//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like 
//so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(array) {
    var temp = array.length - 1;
    for(let x = 0; x < array.length / 2; x++){
    [array[x], array[temp-x]] = [array[temp - x], array[x]];
    }
    return array
}
var array1 = [2,4,6,1,3];
var array2 = [-5,2,5,12];
console.log(reverseArray(array1));
console.log(reverseArray(array2));

//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). 
//Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(array){
    for(let x = 0; x < array.length; x++){
        if(array[x] > 0){
            array[x] = array[x] * -1
        }
    }
    return array 
}
var array1 = [2,4,6,1,3];
var array2 = [-5,2,5,12];
console.log(outlookNegative(array1));
console.log(outlookNegative(array2))


//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then 
//print "I'm hungry" once.

function alwaysHungry(array){
    var hungry = 0
    for(let i = 0; i< array.length; i++){
        if(array[i] == "food"){
            console.log("yummy");
        }
        else{
            hungry++
        }
    }
    if (hungry == array.length){
        console.log("I'm hungry")
    }
}
var array1 = [-1,"food","food",-5];
var array2 = [1, 3 ,8,-5,0,-2,4,-1];
console.log(alwaysHungry(array1));
console.log(alwaysHungry(array2));

//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array 
//into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapAcross(array) {
    var temp = array.length - 1;
    for(let x = 0; x < array.length / 2; x+=2){
    [array[x], array[temp-x]] = [array[temp - x], array[x]];
    }
    return array
}
var array1 = [1,2,3,4,5,6];
var array2 = ["pizza", 42, "Ada", 2, "true"];
console.log(swapAcross(array1));
console.log(swapAcross(array2));

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) 
//should return [3,6,9].

function scaleArray(array, i) {
    for (let x = 0; x <= array.length - 1 ; x++) {
      array[x] = array[x] * i;
    }
    return array;
}
var array1 = [1,5,10,-2];
var array2 = [1,2,3];
console.log(scaleArray(array1, 5));
console.log(scaleArray(array2, 3));