games[1].onclick = () => {
    if (flag == 0) {
        flag = 2
        canvas.style.opacity = "1"

        updateCords()
        addButtonsKlaster()
    }
}

window.addEventListener('resize', function(){
    resizeCanvas()
    playCanvas()
    if(flag==2){
        updateCords()
        addButtonsKlaster()
    } 
});

var used2 // костыль ... не позволяет срабатывать двум кнопкам одновренно( которые наложены дург на друга)
canvas.addEventListener("mouseup", function (event) {
    
    if (flag == 2) {
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

    }
})

