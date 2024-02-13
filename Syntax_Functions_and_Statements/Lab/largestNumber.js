// function takeLargestNum(num1, num2, num3) {
//     let result;
//     if (num1 > num2 && num1 > num3) {
//         result = num1;
//     } else if (num2 > num1 && num2 > num3){
//         result = num2;
//     } else {
//         result = num3;
//     }
//     console.log(`The largest number is ${result}.`);
// }

function takeLargestNum(num1, num2, num3) {
    let result = Math.max(num1, num2, num3);
    console.log(`The largest number is ${result}.`);
}

takeLargestNum(5, -3, 16);
takeLargestNum(-3, -5, -22.5);