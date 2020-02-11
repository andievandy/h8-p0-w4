function fpb(angka1, angka2) {
    // var maxNumber = angka1 > angka2 ? angka1 : angka2;
    // for(var i = maxNumber; i >= 1; i--) {
    //     if(angka1 % i === 0 && angka2 % i === 0) return i;
    // }

    var r = 0;
    while(angka1 % angka2 > 0) {
        r = angka1 % angka2;
        angka1 = angka2;
        angka2 = r;
    }
    return r;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1