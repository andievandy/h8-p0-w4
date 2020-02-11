function cariModus(arr) {
    var occurences = [];
    for(var i = 0; i < arr.length; i++) {
        var found = false;

        for(var j = 0; j < occurences.length; j++) {
            if(occurences[j][0] === arr[i]) {
                occurences[j][1]++;
                found = true;
                break;
            }
        }

        if (found == false) {
            occurences[occurences.length] = [arr[i], 1];
        }
    }

    if(occurences.length <= 1) return -1;

    var modus = [];

    for(var i = occurences.length - 1; i >= 0; i--) {
        if(modus.length === 0 || modus[1] <= occurences[i][1]) {
            modus = occurences[i];
        }
    }

    if(modus[1] === 1) return -1;
    else return modus[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1