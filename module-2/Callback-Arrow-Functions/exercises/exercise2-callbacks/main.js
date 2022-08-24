const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  
const getTime = function(func){
    let curTime = new Date();
    func(curTime)
}

getTime(returnTime)