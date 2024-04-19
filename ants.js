games[3].onclick = () => {
    if (flag == 0) {
        flag = 4
        canvas.style.opacity = "1"

        addButtonsAnts()


    }
}

window.addEventListener('resize', function(){
    
    if(flag==4){
        resizeCanvas()
        playCanvas()
        addButtonsAnts()

    } 
});


canvas.addEventListener("mouseup", function (event) {
    
    if (flag == 4) {
        x = event.offsetX;
        y = event.offsetY;

        addpoint()

        getGraph(coords, graf)

        Ants(graf, coords)

        clearPole()

    }
})
