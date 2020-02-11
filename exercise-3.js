function cariMedian(arr) {

    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if(i > j) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    var median;
    
    if(arr.length % 2 == 0) {
        var medianIndex = arr.length / 2;
        median = (arr[medianIndex - 1] + arr[medianIndex]) / 2;
    } else {
        var medianIndex = (arr.length / 2) - 0.5
        median = arr[medianIndex];
    }

    return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5