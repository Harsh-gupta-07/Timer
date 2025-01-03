const time = document.getElementById("timer")
let elapsed = 0
let interval = null
const startbtn = document.getElementById("start").addEventListener("click", start)
const stopbtn = document.getElementById("stop").addEventListener("click", stop)
const resetbtn = document.getElementById("reset").addEventListener("click", reset)


function padding(val){
    return String(val).padStart(2,"0")
}



function timeInc(){
    elapsed++;
    let minutes = Math.floor(elapsed/60)
    let seconds = elapsed%60
    time.innerText = `${padding(minutes)}:${padding(seconds)}`
}



function start(){
    addInterval()
}

function addInterval(){
    if (interval){
        clearInterval(interval)
        interval = setInterval(timeInc, 1000)
    }else{
        interval = setInterval(timeInc, 1000)
    }
}



function stop(){
    clearInterval(interval)
}



function reset(){
    clearInterval(interval)
    elapsed = 0
    time.innerText= "00:00"
}