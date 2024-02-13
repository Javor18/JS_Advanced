function mathOperations(num1, num2, operator){
    let result;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else if (operator === '%') {
        result = num1 % num2;
    } else if (operator === '**') {
        result = num1 ** num2;
    }
    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
mathOperations(4, 2, '/');
mathOperations(3, 3, '%');
mathOperations(2, 3, '**');
mathOperations(5, 6, '-');

// Output
// 11
// 16.5
// 2
// 0
// 8
// -1