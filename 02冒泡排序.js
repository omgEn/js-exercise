/**
 * bubble sort
 * @param {Array} arr unsorted array
 */
function bubble_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = true;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = false;
            }
        }
        if (flag) break;
    }
}

let arr = [1, 3, 2, 4, 6, 5];
bubble_sort(arr);
console.log(arr);
