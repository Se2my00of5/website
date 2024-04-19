
canvas.style.opacity = "1"

addButtonsAnts()


window.addEventListener('resize', function(){
    

        resizeCanvas()
        playCanvas()
        addButtonsAnts()

});


canvas.addEventListener("mouseup", function (event) {
    

        x = event.offsetX;
        y = event.offsetY;

        addpoint()

        getGraph(coords, graf)

        Ants(graf, coords)

        clearPole()


})
