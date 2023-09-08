const checkTypeNumber = (givenNumber) => {

    //validasi tipe data parameter
    if (typeof givenNumber === 'undefined') {
        return "Error: Bro where is the parameter? ";
    }
    if (typeof givenNumber !== 'number') {
        return "Error: Invalid data type";
    }

    //cek angka ganjil atau genap
    if (givenNumber % 2 == 0) {
        return "GENAP"
    }
    else {
        return "GANJIL"
    }

}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());