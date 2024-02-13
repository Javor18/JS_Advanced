function previousDay(year, month, day){
    let date = new Date(year, month, day);
    date.setDate(day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);