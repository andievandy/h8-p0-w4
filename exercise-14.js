function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = [];
    for(var i = 0; i < arrPenumpang.length; i++) {
        var penumpang = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }

        var startLocation = -1;
        var finishLocation = -1;

        for(var j = 0; j < rute.length; j++){
            if(penumpang.naikDari === rute[j]) {
                startLocation = j;
            } else if (penumpang.tujuan === rute[j]) {
                finishLocation = j;
            }
        }

        var distance = finishLocation - startLocation;
        var cost = 2000;
        penumpang.bayar = distance * cost;

        result[result.length] = penumpang;
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]