function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';

    var result = '';

    for(var i = 0; i < kata.length; i++) {
        var charIndex = -1;
        for(var j = 0; j < kamus.length; j++) {
            if(kata[i] == kamus[j]) {
                charIndex = j;
                break;
            }
        }
        if(charIndex === -1) result += kata[i];
        else {
            charIndex++;
            if(charIndex === kamus.length) charIndex = 0;
            result += kamus[charIndex];
        }
    }

    return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu