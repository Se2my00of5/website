
canvas.style.opacity = "1"

        
addButtonsKlaster()
    


window.addEventListener('resize', function(){
    
    
    resizeCanvas()
    playCanvas()
    addButtonsKlaster()
    
});

var used2 // костыль ... не позволяет срабатывать двум кнопкам одновренно( которые наложены дург на друга)
canvas.addEventListener("mouseup", function (event) {
    
        x = event.offsetX;
        y = event.offsetY;
        used2 = false

        //очистка поля
        resetGame()

        //добавление точки на поле
        addPoint()

        //нарандомить точек
        narandomiti()

        //возврат к выбору кол-ва кластеров
        BackToChooseQualKlasters()

        //поиск кластеров
        SearchKlasters()

        //отмена выбора кол-ва кластеров
        CancelChooseQualKlasters()

        //начало кластеризации
        transferToChooseQualKlasters()

        activate_K_Means()
        activate_C_Means()
        activate_Ostov()
        coloringKlasters()

    
})

