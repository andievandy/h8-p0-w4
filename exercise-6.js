function digitPerkalianMinimum(angka) {
    var minimumDigit = 0;
    for(var i = 1; i <= angka; i++) {
        if(angka % i === 0) {
            var j = angka / i;
            if(i > j) break;
            var num = String(i)+String(j);
            if(minimumDigit == 0 || num.length < minimumDigit) minimumDigit = num.length;
        }
    }
    return minimumDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2