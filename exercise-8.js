function tukarBesarKecil(kalimat) {
    var kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var kamusKecil = 'abcdefghijklmnopqrstuvwxyz';

    var result = '';

    for(var i = 0; i < kalimat.length; i++) {
        var isLowerCase = false;
        var charIndex = -1;
        for(var j = 0; j < kamusKecil.length; j++) {
            if(kalimat[i] == kamusKecil[j]) {
                charIndex = j;
                isLowerCase = true;
                break;
            } else if(kalimat[i] == kamusBesar[j]) {
                charIndex = j;
                isLowerCase = false;
                break;
            }
        }

        if(charIndex == -1) {
            result += kalimat[i];
        } else {
            if(isLowerCase == true) {
                result += kamusBesar[charIndex];
            } else {
                result += kamusKecil[charIndex];
            }
        }
    }
    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"