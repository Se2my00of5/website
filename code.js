const themeButton = document.querySelector("#themeButton")
const display = document.body

console.dir(themeButton)
console.dir(display)

themeButton.onclick = () => { //обработка смены темы по нажатию
    
    if (themeButton.src.indexOf("sun")!=-1){
        // перевод на тёмную тему
        themeButton.src=themeButton.src.replace("sun","moon");
       // display.style.backgroundColor="black";
        display.style.background = "linear-gradient(0deg, #000000 25%, #191D29 75%)";

    }
    else{
        // перевод на светлую
        themeButton.src=themeButton.src.replace("moon","sun");
        display.style.background="white";
        
    }
    
};

