/* 
  Array: Push Front
  Given array and an additional value, insert this value at the beginning of the array.
  Do this without using any built-in array methods.

  return the new length of the array.
  Input: some array, new value
  Output: same array
  Example:
  Input: [1, 2, 3], 0
  Output: 4
    - the array should now be [0, 1, 2, 3]
*/
function pushFront(array, x) { 
    for (var i = array.length - 1; i >=0; i--) {
       array[i +1] = array[i];
    }
    array[0] = x;
    console.log(array);
    return array.length;
};


console.log(pushFront([1, 2, 3], 4));
/* 
  Array: Pop Front
  Given an array, remove and return the value at the beginning of the array.
  Do this without using any built-in array methods except pop().
  Examples:
  Input: [1, 2, 3]
  Output: 1
    - the array should now be [2, 3]
  Input: ['a', 'b', 'c', 'd']
  Output: 'a'
    - the array should now be ['b', 'c', 'd']
*/


function popFront (array){
    var temp = array[0]
    for(var i = 1; i < array.length; i++) {
        array[i-1] = array[i];
      }
    array.pop();
    console.log(array);
    console.log(temp);

  } 

  popFront([1,2,3,4])
  popFront(["a","b","c","d","e"])