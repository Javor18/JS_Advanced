function stringLenght(str1, str2, str3) {
    let totalLength = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(totalLength / 3);
    console.log(totalLength);
    console.log(averageLength);
}

stringLenght('chocolate', 'ice cream', 'cake');
stringLenght('pasta', '5', '22.3')