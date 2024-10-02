// write a function that takes a number and returns an array containing that many numbers of the fibo sequence
function fibs(totalnumbers){
    let sequence = [0, 1];
    for (let i = 2; i < totalnumbers; i++){
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence.slice(0, totalnumbers);
}
console.log(fibs(9));


function fibsRecursive(totalNums, sequence = [0, 1]) {
    // Base case: If the sequence has the required number of elements, return it
    if (sequence.length >= totalNums) {
        return sequence.slice(0, totalNums);
    }
    
    // Recursive case: Add the next Fibonacci number (sum of the last two)
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);

    // Recursively call the function to continue building the sequence
    return fibsRecursive(totalNums, sequence);
}


function mergeSort(array){

    if (array.length <= 1){
        //base case:
        return array;
    }

    // split the array into halves
    // distinguish the middle index.
    let middleIndex = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, middleIndex);
    let rightHalf = array.slice(middleIndex);

    // call mergeSort on the left half
    leftHalf = mergeSort(leftHalf);

    // call mergeSort on the right half
    rightHalf = mergeSort(rightHalf);

    return merge(leftHalf, rightHalf);
        
};

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let dingus = mergeSort([9, 9, 3, 2, 1, 5, 4, 5, 2, 3, 4, 5, 6, 7, 1, 2, 8,]);

console.log(dingus);