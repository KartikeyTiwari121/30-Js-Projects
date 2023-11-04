let [seconds, minutes, hours] = [0, 0, 0];
//here we made an array with their respective values on RHS.

let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    displayTime.innerHTML = h +":"+ m +":"+ s;
}
//now we have to execute this function every second, for that we will use JS's time interval.

function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}




