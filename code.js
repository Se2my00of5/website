const themeButton = document.querySelector("#themeButton")
const display = document.body

console.dir(themeButton)
console.dir(display)

themeButton.onclick = () => { //обработка смены темы по нажатию
    
    if (themeButton.src.indexOf("sun")!=-1){
        // перевод на тёмную тему
        themeButton.src=themeButton.src.replace("sun","moon");
       // display.style.backgroundColor="black";
        display.style.background = "linear-gradient(225deg,rgb(41,51,66)9%,rgb(21,31,45)17%,rgb(0,0,0))";
        display.style.color = "white";
    }
    else{
        // перевод на светлую
        themeButton.src=themeButton.src.replace("moon","sun");
        display.style.background="white";
        display.style.color = "black";
    }
    
};

