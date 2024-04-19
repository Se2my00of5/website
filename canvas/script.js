const display = document.body

var canvas = document.querySelector("#myCanvas")
var pole = canvas.getContext("2d")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function resizeCanvas() {
    canvas.width = display.offsetWidth - canvas.offsetLeft - 50
    canvas.height = display.offsetHeight - canvas.offsetTop - 100
}



resizeCanvas()
playCanvas()


var x,y
// закрытие canvas
var flag = false; // 0 - неактив, 1-6 - запущена игрулька



var timeouts = []
function clearTimeOutsId(){
    for(let i=0;i<timeouts.length;i++){
        clearTimeout(timeouts[i]);
    }
}

function playCanvas(){
    //квадратик
   



    //ограничительная линия
    //можно название там писать
    pole.beginPath();
    pole.strokeStyle = "black"
    pole.lineWidth = "2.3"
    pole.moveTo(0, 50)
    pole.lineTo(canvas.width, 50)
    pole.stroke()
}



