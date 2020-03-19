// Mergesort Implementation with JavaScript
function mergeSort (array) {
    // No need to sort the array if the array only has one element or empty
    if (array.length <= 1) return array;
    // Figure out the middle
    const middle = Math.floor(array.length / 2);
    // This is where we will be dividing the array into left and right
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    // Using recursion to combine the left and right
    return merge(left,right);
  }

  function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }