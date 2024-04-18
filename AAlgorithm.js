games[0].onclick = () => {
    if (flag == 0) {
        flag = 1
        canvas.style.opacity = "1"

        
        addButtonsA()
    }
}

window.addEventListener('resize', function(){
    resizeCanvas()
    playCanvas()
    if(flag==1){
        addButtonsA()
    } 
});

var used1
canvas.addEventListener("mouseup", function (event) {
    
    if (flag == 1) {
        x = event.offsetX;
        y = event.offsetY;
        
        used1 = false
        activateField()
        backToFindWay()
        clickbuttonFindWay()
        
        ChoiceSell()
        clickCell()
    }
})

