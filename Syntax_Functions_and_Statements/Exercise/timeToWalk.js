function timeToWalk(steps, stepLength, speed){
let distance = steps * stepLength;
    let time = Math.round(distance / speed * 3.6);
    let rest = Math.floor(distance / 500);
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    console.log(`${hours < 10 ? 0 : ''}${hours}:${minutes + rest < 10 ? 0 : ''}${minutes + rest}:${seconds < 10 ? 0 : ''}${seconds}`);
}

timeToWalk(4000, 0.60, 5);