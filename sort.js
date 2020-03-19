


  // Quicksort Implementation with JavaScript

  // Swapping utility function
  function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }

  function pivot(array, start = 0, end = array.length -1) {
        let pivot = array[start];
        let swapIndex = start;

        for(let i = start + 1; i < array.length; i++) {
            if (pivot > array[i]) {
                swapIndex++;
                swap(array, swapIndex, i);
            }
        }

        swap(array, start, swapIndex);
        return swapIndex;
  }

  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }

    return array;
  }

  console.log(pivot([4, 1, 3, 2, 8, 9, 7]))