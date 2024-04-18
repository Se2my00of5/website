games[3].onclick = () => {
    if (flag == 0) {
        flag = 4
        canvas.style.opacity = "1"

        addButtonsAnts()


    }
}

window.addEventListener('resize', function(){
    resizeCanvas()
    playCanvas()
    if(flag==4){
        addButtonsAnts()

    } 
});

var used4
canvas.addEventListener("mouseup", function (event) {
    
    if (flag == 4) {
        x = event.offsetX;
        y = event.offsetY;
        
        used4 = false

        addpoint()

        getGraph(coords, graf)

        Ants(graf, coords)

        clearPole()

    }
})
