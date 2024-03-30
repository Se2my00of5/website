/////////////////////////////////////////////////////////////////////////////////////////////////

//корды объектов (левый верх, правый низ)  

// корды кнопки рандом
const button_QualPoints_LeftTopX = canvas.width - 180
const button_QualPoints_LeftTopY = 100
const button_QualPoints_RightLowerX = canvas.width - 30
const button_QualPoints_RightLowerY = 165

// корды кнопки очистки
const button_Reset_LeftTopX = canvas.width - 180
const button_Reset_LeftTopY = 710
const button_Reset_RightLowerX = canvas.width - 30
const button_Reset_RightLowerY = 755

// корды кнопки поиска кластеров
const button_FindKlasters_LeftTopX = canvas.width - 180
const button_FindKlasters_LeftTopY = 190
const button_FindKlasters_RightLowerX = canvas.width - 30
const button_FindKlasters_RightLowerY = 230

// корды кнопки выбора количества кластеров
const button_QualKlasters_LeftTopX = canvas.width - 180
const button_QualKlasters_LeftTopY = 190
const button_QualKlasters_RightLowerX = canvas.width - 30
const button_QualKlasters_RightLowerY = 240

// корды background
const leftTopX = 40
const leftTopY = 85
const rightLowerX = 900
const rightLowerY = 760

/////////////////////////////////////////////////////////////////////////////////////////////////

// функции создания объектов/кнопок

function paintPoint(x,y){
    pole.beginPath()
    pole.fillStyle = "white"
    pole.arc(x, y, 4, 0, 2 * Math.PI)
    pole.fill();

    Points[Points.lenght] = Node(x,y);
}

function addGameName(){
    pole.beginPath()
    pole.font = "30px Trattatello, fantasy"
    pole.fillStyle = "#3F172C"

    pole.fillText("Кластеризация (обычка)", 20, 35)
}

function addBackground(){
    pole.beginPath()
    const gradient = pole.createLinearGradient(leftTopX, leftTopY, rightLowerX, leftTopY);
    
    gradient.addColorStop(0, "#0A083A");
    gradient.addColorStop(0.08, "black");
    gradient.addColorStop(0.92, "black");
    gradient.addColorStop(1, "#0A083A");
    pole.fillStyle = gradient

    pole.fillRect(leftTopX, leftTopY, rightLowerX - leftTopX, rightLowerY - leftTopY);
}

//кнопка перехода на выбор кол-ва кластеров
function addButtonTransferChooseQualKlasters(){
    pole.beginPath()

    pole.clearRect(button_FindKlasters_LeftTopX-2,
        button_FindKlasters_LeftTopY-2,
        button_FindKlasters_RightLowerX - button_FindKlasters_LeftTopX+4,
        button_FindKlasters_RightLowerY - button_FindKlasters_LeftTopY+20);
    
    pole.rect(button_FindKlasters_LeftTopX,
        button_FindKlasters_LeftTopY,
        button_FindKlasters_RightLowerX - button_FindKlasters_LeftTopX,
        button_FindKlasters_RightLowerY - button_FindKlasters_LeftTopY);

        pole.fillStyle = "white"
        pole.strokeStyle = "black"
        pole.fill();
        pole.stroke();

        pole.fillStyle = "#3F172C"
        pole.font = "17px Trattatello, fantasy"
        pole.fillText("кластеризировать", button_FindKlasters_LeftTopX+6, button_FindKlasters_LeftTopY+27)
    
}

//кнопка очистки поля
function addButtonReset(){
    pole.beginPath()
    pole.rect(button_Reset_LeftTopX,
        button_Reset_LeftTopY,
        button_Reset_RightLowerX - button_Reset_LeftTopX,
        button_Reset_RightLowerY - button_Reset_LeftTopY);
    pole.fillStyle = "red"
    pole.strokeStyle = "black"

    pole.fill();
    pole.stroke();

    pole.fillStyle = "black"
    pole.font = "23px Trattatello, fantasy"
    pole.fillText("очистка", button_Reset_LeftTopX+30, button_Reset_LeftTopY+30)
}

// кнопка рандооооом
function addButtonRandom(){
    pole.beginPath()
    pole.rect(button_QualPoints_LeftTopX,
        button_QualPoints_LeftTopY,
        button_QualPoints_RightLowerX - button_QualPoints_LeftTopX,
        button_QualPoints_RightLowerY - button_QualPoints_LeftTopY);
    pole.fillStyle = "white"
    pole.strokeStyle = "black"

    pole.moveTo(button_QualPoints_LeftTopX,button_QualPoints_LeftTopY+25)
    pole.lineTo(button_QualPoints_RightLowerX,button_QualPoints_LeftTopY+25)
    pole.moveTo(button_QualPoints_LeftTopX+100,button_QualPoints_LeftTopY+25)
    pole.lineTo(button_QualPoints_LeftTopX+100,button_QualPoints_RightLowerY)

    pole.fill();
    pole.stroke();

    pole.fillStyle = "green"
    pole.fillRect(button_QualPoints_LeftTopX+101,button_QualPoints_LeftTopY+26,
            48,38)

    pole.fillStyle = "#3F172C"
    pole.font = "23px Trattatello, fantasy"
    pole.fillText("нарандомить", button_QualPoints_LeftTopX+8, button_QualPoints_LeftTopY+20)

    inputQualPoints = document.createElement('input')
    inputQualPoints.type = 'text';
    inputQualPoints.style.position = 'absolute';
    inputQualPoints.style.width = "86px";
    inputQualPoints.style.height = "29px"
    inputQualPoints.style.left = "1195px";
    inputQualPoints.style.top = "270px";
    document.body.appendChild(inputQualPoints);
}

//кнопка выбора количества кластеров
function addButtonChooseQualKlasters(){
    pole.beginPath()
    pole.rect(button_QualKlasters_LeftTopX,
    button_QualKlasters_LeftTopY,
    button_QualKlasters_RightLowerX - button_QualKlasters_LeftTopX,
    button_QualKlasters_RightLowerY - button_QualKlasters_LeftTopY);

    pole.fillStyle = "white"
    pole.strokeStyle = "black"

    pole.moveTo(button_QualKlasters_LeftTopX,button_QualKlasters_LeftTopY+18)
    pole.lineTo(button_QualKlasters_RightLowerX,button_QualKlasters_LeftTopY+18)
    pole.fill();
    pole.stroke();
    //кнопки/////////////////////////////
    
        //красная
        pole.beginPath()
        pole.strokeStyle = "black"
        pole.fillStyle = "red"

        pole.rect(button_QualKlasters_LeftTopX,button_QualKlasters_LeftTopY+20,
            45,30)
        pole.fill()
        pole.stroke()
        //зелёная
        pole.beginPath()
        pole.strokeStyle = "black"
        pole.fillStyle = "green"

        pole.rect(button_QualKlasters_LeftTopX+105,button_QualKlasters_LeftTopY+19,
            45,31)
        pole.fill()
        pole.stroke();

    //конец кнопки///////////////////////

    pole.fillStyle = "#3F172C"
    pole.font = "17px Trattatello, fantasy"
    pole.fillText("кол-во кластеров", button_QualKlasters_LeftTopX+6, button_QualKlasters_LeftTopY+15)
    
    inputQualKlasters = document.createElement('input')
    inputQualKlasters.type = 'text';
    inputQualKlasters.style.position = 'absolute';
    inputQualKlasters.style.width = "51px";
    inputQualKlasters.style.height = "24px"
    inputQualKlasters.style.left = "1237px";//1237
    inputQualKlasters.style.top = "351px";
    document.body.appendChild(inputQualKlasters);

}

///////////////////////////////////////////////////////////////////////////////////////////////////

//bool функции активации 
                
function boolReset(){
    if(button_Reset_LeftTopX+2< x && x <button_Reset_RightLowerX-2 &&
    button_Reset_LeftTopY < y && y < button_Reset_RightLowerY)
        return true
    return false
}

function boolAddPoint(){
    if(boolChooseQualKlusters==false && leftTopX + 4 < x && x < rightLowerX - 4 && leftTopY + 4 < y && y < rightLowerY - 4)
        return true
    return false
}

function boolRandom(){
    if(boolChooseQualKlusters==false &&
        button_QualPoints_LeftTopX + 102 < x && x < button_QualPoints_LeftTopX + 149 &&
        button_QualPoints_LeftTopY + 26 < y && y < button_QualPoints_RightLowerY -1 &&
        checkInput()==true) return true
    return false
}

function boolStartKlasterization(){
    if(boolChooseQualKlusters==false && 
        button_FindKlasters_LeftTopX + 2 < x && x < button_FindKlasters_RightLowerX - 2 && 
        button_FindKlasters_LeftTopY + 2 < y && y < button_FindKlasters_RightLowerY - 2)
            return true
    return false
}

function boolCancelChooseQualKlasters(){
    if(boolChooseQualKlusters==true &&
        button_QualKlasters_LeftTopX+2< x && x <button_QualKlasters_LeftTopX+43 &&
        button_QualKlasters_LeftTopY+22 < y && y <button_QualKlasters_LeftTopY+48)
        return true
    return false
}

function boolSearchKlasters(){
    if(boolChooseQualKlusters==true &&
        button_QualKlasters_LeftTopX+107< x && x <button_QualKlasters_LeftTopX+43 &&
        button_QualKlasters_LeftTopY+158 < y && y <button_QualKlasters_LeftTopY+48)
        return true
    return false
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//функции действия объектов

function narandomiti(){
    if(boolRandom()==true){
        let value = Number(inputQualPoints.value)
        
        for(let i=0;i<value;i++){
            let randomX = getRandomInt(rightLowerX-leftTopX-4)+leftTopX+2;
            let randomY = getRandomInt(rightLowerY-leftTopY-4)+leftTopY+2;
            
            paintPoint(randomX,randomY)
        }
    }
}

function resetGame(){
    if(boolReset()==true){
        Points = []
        boolChooseQualKlusters=false
        inputQualPoints.remove()
        inputQualKlasters.remove()
        addBackground()
        addButtonTransferChooseQualKlasters()
        addButtonRandom()
    }
}

function addPoint(){
    if (boolAddPoint()==true) {
        paintPoint(x,y)
    }
}

function transferToChooseQualKlasters(){
    if(boolStartKlasterization()==true){   
        boolChooseQualKlusters = true
        addButtonChooseQualKlasters()
    }
}

function CancelChooseQualKlasters(){
    if(boolCancelChooseQualKlasters()){
        inputQualKlasters.remove()
        boolChooseQualKlusters=false
        addButtonTransferChooseQualKlasters()
    }

}
//////////////////////////////////////////////////////////////////////////////////////////////////////

// главные переменные/структура

var x = 0
var y = 0 

var boolChooseQualKlusters=false

function Node(x, y) {
    this.x = x;
    this.y = y;

}
var Points = []

// поле для ввода (в рандоме стоит)
var inputQualPoints;

//поле для ввода (в выборе кол-ва кластеров стоит)
var inputQualKlasters;

////////////////////////////////////////////////////////////////////////////////////////////////////////



// костыль для закрытия canvas
function CloseKlasters(){
    inputQualPoints.remove()
}

//проверка ввода(должно быть число)
function checkInput(){
    let value = inputQualPoints.value
    let f = true
    
    for(let i=0;i<value.length;i++){
        if((!(value[i]=="0" ||value[i]=="1" ||value[i]=="2" ||
                    value[i]=="3" ||value[i]=="4" ||value[i]=="5" ||
                    value[i]=="6" ||value[i]=="7" ||value[i]=="8" ||value[i]=="9")))
        {
            f=false;
        }
    }

    return f
} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

