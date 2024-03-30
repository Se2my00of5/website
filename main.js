const themeButton = document.querySelector("#themeButton")
const display = document.body

const canvas = document.querySelector("#myCanvas")
const pole = canvas.getContext("2d")

themeButton.onclick = () => { //обработка смены темы по нажатию
    if (themeButton.src.indexOf("sun") != -1) {
        // перевод на тёмную тему 
        themeButton.src = themeButton.src.replace("sun", "moon");
        // display.style.backgroundColor="black";
        display.style.background = "linear-gradient(225deg,rgb(41,51,66)9%,rgb(21,31,45)17%,rgb(0,0,0))";
        display.style.color = "white";
        //canvas.style.background = "#62544E"

    } else {
        // перевод на светлую
        themeButton.src = themeButton.src.replace("moon", "sun");
        display.style.background = "white";
        display.style.color = "black";
        // canvas.style.background = "#F8EAD9"
    }
};



//квадратик
pole.beginPath();
pole.rect(canvas.width - 40, 10, 30, 30)
pole.strokeStyle = "black"
pole.fillStyle = "white"
pole.stroke()
pole.fill()

//крестик
pole.beginPath();
pole.strokeStyle = "red"
pole.lineWidth = "3"
pole.lineCap = "round"
pole.moveTo(canvas.width - 35, 15)
pole.lineTo(canvas.width - 15, 35)
pole.moveTo(canvas.width - 15, 15)
pole.lineTo(canvas.width - 35, 35)
pole.stroke()

//ограничительная линия, всё что выше(+ 1-2px) не стирать
//можно название там писать
pole.beginPath();
pole.strokeStyle = "black"
pole.lineWidth = "2.3"
pole.moveTo(0, 50)
pole.lineTo(canvas.width, 50)
pole.stroke()

// закрытие canvas
var flag = false; // 0 - неактив, 1-6 - запущена игрулька
canvas.addEventListener("mouseup", function (event) {
    let x = event.offsetX;
    let y = event.offsetY;

    if (x >= canvas.width - 40 && x <= canvas.width - 10 && y >= 10 && y <= 40) {
        if(flag==2) CloseKlasters()//костыль для закрытия игры-кластеров
        
        canvas.style.opacity = "0";
        pole.clearRect(0, 51, canvas.width, canvas.height);
        pole.clearRect(0, 0, canvas.width - 42, 48);
        flag = false;
    }
})


const games = document.querySelectorAll("li")


games[0].onclick = () => {
    if (flag == 0) {
        flag = 1
        canvas.style.opacity = "1";
    }
}
games[2].onclick = () => {
    if (flag == 0) {
        flag = 3
        canvas.style.opacity = "1";
    }
}
games[3].onclick = () => {
    if (flag == 0) {
        flag = 4
        canvas.style.opacity = "1";
    }
}
games[4].onclick = () => {
    if (flag == 0) {
        flag = 5
        canvas.style.opacity = "1";
    }
}
games[5].onclick = () => {
    if (flag == 0) {
        flag = 6
        canvas.style.opacity = "1";
    }
}