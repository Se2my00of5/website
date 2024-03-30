games[1].onclick = () => {
    if (flag == 0) {
        flag = 2
        canvas.style.opacity = "1";
        
        addGameName()
        
        addBackground()
        
        addButtonReset()
        
        addButtonRandom()
        
        addButtonTransferChooseQualKlasters()
    }
}


canvas.addEventListener("click", function(event) {
    if (flag == 2) {
        x = event.offsetX;
        y = event.offsetY;

        //очистка поля
        resetGame()

        //добавление точки на поле
        addPoint()

        //нарандомить точек
        narandomiti()

        //начало кластеризации
        transferToChooseQualKlasters()
            
        //отмена выбора кол-ва кластеров
        CancelChooseQualKlasters()
    }
})

