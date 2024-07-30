let timerDisplay = document.querySelector('.time');
let stopBtn = document.querySelector('#stopBtn');
let startBtn = document.querySelector('#startBtn');
let resetBtn = document.querySelector('#resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timer = null;

startBtn.addEventListener('click', ()=>{
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', ()=>{
    clearInterval(timer);
});

resetBtn.addEventListener('click', ()=>{
    clearInterval(timer);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;

        }
    }

    let secString = secs < 10 ? `0${secs}`: secs;
    let msecString = msec < 10 ? `0${msec}`: msec;
    let minString = mins < 10 ? `0${mins}`: mins;

    timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;


}

