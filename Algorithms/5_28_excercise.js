/* 
  Array: Find Minimum
  No built in methods

  Input: array of ints
  Output: Minimum value in the array
  Input: [1, 5, 2, 9]
  Output: 1
  Input: [5, 1 ,0, 2, 3]
  Output: 0
*/
function min(array) {
    var temp = array[0];
    for (var x = 0; x <= array.length - 1 ; x++) {
        if (array[x] < temp){
            temp = array[x];
        }
    }
    return temp;
}

console.log(min([1, 5, 2, 9]));
console.log(min([5, 1 ,0, 2, 3]));



/* 
  Array: Find Minimum Index
  No built in methods

  Input: array of ints
  Output: Index of minimum value in the array
  Input: [1, 5, 2, 9]
  Output: 0
  Input: [5, 1 ,0, 2, 3]
  Output: 2
*/

function min(array) {
  var temp = array[0];
  for (var x = 0; x <= array.length - 1 ; x++) {
      if (array[x] < temp){
          temp = array[x];
      }
  }
  for (var i = 0; i < array.length; i++){
    if (temp == array[i]){
      return i;
    }
  }
}

console.log(min([1, 5, 2, 9]));
console.log(min([5, 1 ,0, 2, 3]));


/* 
  Array: Min to Front
  No built in methods

  Input: array of ints
  Output: Same array in same order except min int moved to front
  Input: [1, 5, 2, 9]
  Output: [1, 5, 2, 9]
  Input: [5, 1 ,0, 2, 3, 1]
  Output: [0, 5, 1, 2, 3, 1]
*/

/*
Variables     Values
temp          1
i      >=0    1
array         [1,5,2,9] --> [1,5,2,2,9]
*/


function minToFront(array) {
  var min = array[0];
  var index = 0;
  for (var x = 0; x <= array.length - 1 ; x++) {
      if (array[x] < min){
          min = array[x];
          index = x;
      }
  }
  for (var t = index - 1; t >= 0; t--){
          array[t +1] = array[t];
  }
  array [0] = min;
  return array;
  
}
var josh = [5,1,0,2,3,1];
console.log(minToFront(josh));
console.log(josh);
console.log(minToFront([1, 5, 2, 9]));
console.log(minToFront([5, 1 , 0, 2, 3, 1]));
console.log(minToFront([5, 1 , 2, 3, 0, 1]));



/* 
  Array: Remove At
  Input: array, index
  Output: The item that was removed
  What will you do if the provided index is out of bounds?

  No built-in array methods except pop().
  Input: ['a', 'b', 'c'], 1
  Output: 'b'
    - the given array should now be ['a', 'c']
*/

function removeAt(arr,x){
    if (arr.length < x || x < 0){
      return false;
    }
    var index = arr[x];
    for(var i = x+1; i < arr.length; i++) {
      arr[i-1] = arr[i];
    }
    arr.pop();
  
    return index;
  }
  
  var Josh = ['a','b','c'];
  console.log(removeAt(Josh, 1))
  console.log(Josh)

  var test = [1,2,3,4,5,6,7,8];
  console.log(removeAt(test,5));
  console.log(test);