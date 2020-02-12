function urutkanAbjad(str) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';

    var result = '';

    for(var i = 0; i < kamus.length; i++) {
        for(var j = 0; j < str.length; j++) {
            if(kamus[i] == str[j]) {
                result += str[j];
            }
        }
    }
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'