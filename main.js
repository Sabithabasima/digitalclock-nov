

function clockTime(){
    let date = new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    let sec=date.getMilliseconds()

    clock.innerHTML=`${hour}hr:${minute}min:${second}s:${sec}ms`
    setTimeout(()=>{clockTime()},1000)
}
clockTime()