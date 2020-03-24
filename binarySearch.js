// Binary Search Implementation
function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(array[middle] !== value && start <= end) {
        if (value < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        Math.floor((start + end) / 2);
    }
    return array[middle] == value ? middle : -1;
}