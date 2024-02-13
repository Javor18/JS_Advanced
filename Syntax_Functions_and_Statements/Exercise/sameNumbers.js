function sameNumbers(number){
    let numberToString = number.toString();
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
        if (numberToString[i] !== numberToString[i + 1] && numberToString[i + 1] !== undefined) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);