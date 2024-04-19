
canvas.style.opacity = "1"

        
addButtonsA()


window.addEventListener('resize', function(){
    

        resizeCanvas()
        playCanvas()
        addButtonsA()

});

var used1
canvas.addEventListener("mouseup", function (event) {
    

        x = event.offsetX;
        y = event.offsetY;
        
        used1 = false
        activateField()
        backToFindWay()
        clickbuttonFindWay()
        
        ChoiceSell()
        clickCell()

})

