const time = document.getElementById("timer")
let elapsed = 0
let interval = null
// let minutes=0

function padding(val){
    return String(val).padStart(2,"0")
}

function timeinc(){
    elapsed++;
    let minutes = Math.floor(elapsed/60)
    let seconds = elapsed%60
    time.innerText = `${padding(minutes)}:${padding(seconds)}`
}

function start(){
    interval = setInterval(timeinc,1000)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    elapsed = 0
    time.innerText= "00:00"
}