function circleArea(input) {
    let inputType = typeof(input);
    let result;

    if (inputType === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        result = `We can not calculate the circle area, because we receive a ${inputType}.`;
        console.log(result);
    }
}

circleArea(5);
circleArea('name');