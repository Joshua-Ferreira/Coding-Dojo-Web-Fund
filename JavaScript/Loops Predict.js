//Predict 1: 

for(var num = 0; num < 15; num++){
    console.log(num);
}
/*sets var num to 0
if num is less than 15, console log num
increases num by 1

will print numbers 0-14

*/

//Predict 2:

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}
/*sets var i to 1
if i is less than 10, 
check modulus of i and 3 (is i divisible by 3 with no remainder) 
then increase i by 2
if no remainder console log value for i

will print 3,9

*/

//Predict 3:

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
/*sets var j to 1
if j is less than or equal to 15, 
checks to see if j is modulus with 2 with 0 remainder
if  true then increases j by 2 
else if j is modulus with 3 with 0 remainder
increases j by 1
then increases j by 1
then prints j

will print 1, 4, 5, 8, 10, 11, 14, 16 

*/