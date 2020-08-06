/*
var testArr = [6,3,5,1,2,4]
Print Values and Sum

Print each array value and the sum so far
The expected output will be: 
Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21
Value * Position
*/

function printAndSum (array){
    var sum = 0;
    for (var x=0; x<=array.length-1; x++){
        sum = sum + array[x];
        console.log(array[x], sum);
    }
}
var testArr = [6,3,5,1,2,4];
printAndSum(testArr);


/*
Multiply each value in the array by its array position

The expected output will be:
[0,3,10,3,8,20]
*/

function multArray (array){
    for (var x=0; x<=array.length-1; x++){
        mult =  array[x] * x
        console.log(mult);
    }
}

console.log(multArray([6,3,5,1,2,4]));