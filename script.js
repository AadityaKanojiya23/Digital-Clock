let  hrs = document.getElementById('hrs')
let  min = document.getElementById('min')
let  sec = document.getElementById('sec')

setInterval(()=>{
    let currentTime = new Date()

console.log(currentTime.getSeconds());

hrs.innerHTML = (currentTime.getHours()<10?"0" : "") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
  /// ye ? marks wala syntax ky ahai ?? 
  //Answer :- condition ? value_which_true : value_which_falue  ( ye shortcut hai if-else ka ) 

  /*
   // hours
    if (h < 10) {
        hrs.innerHTML = "0" + h
    } else {
        hrs.innerHTML = h
    }

    // minutes
    if (m < 10) {
        min.innerHTML = "0" + m
    } else {
        min.innerHTML = m
    }

    // seconds
    if (s < 10) {
        sec.innerHTML = "0" + s
    } else {
        sec.innerHTML = s
    }
  */
},1000)


