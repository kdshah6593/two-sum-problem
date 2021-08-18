// Given array of numbers, return every pair of numbers that can be added up to a given target
// [5,-2,4,9,1] target=6 answer=[ [5,1] ]

// this will use two for loops to check each pair

function bruteForceTwoSum(arr, sum) {
    let pairs = [];

    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = i+1; j < arr.length; j++) {
            if ( arr[i] + arr[j] === sum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

function binarySearchTwoSum(arr, sum) {
    let sorted = arr.sort();
    let pairs = [];
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const currentSum = sorted[i] + sorted[j];

        if (currentSum === sum) {
            pairs.push([sorted[i], sorted[j]])
            i += 1;
            j -= 1;
        } else if (currentSum > sum) {
            j -= 1;
        } else {
            i += 1;
        }
    }

    return pairs
}

function binaryMatch(array, number) {
    let start = 0
    let end = array.length - 1
    
    while (start < end) {
        let mid = Math.floor((start+end)/2)

        if (number === array[mid]) {
            return true
        } else if (number < array[mid]) {
            end = mid - 1
        } else if (number > array[mid]) {
            start = mid + 1
        }
    }
    return false
}

function hashTwoSum(arr, sum) {
    const pairs = [];
    const hash = {}

    for ( let i = 0; i < arr.length; i++) {
        
        if (hash[sum-arr[i]]) {
            pairs.push([sum - arr[i], arr[i]])
        } else {
            hash[arr[i]] = sum - arr[i]
        }
    }
    return pairs;
}