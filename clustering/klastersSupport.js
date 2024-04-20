//отрисовка объектов
function addButtonsKlaster() {
    addGameNameKlasters()

    addBackground()

    CloseInputsKlasters()

    addButtonReset()

    addButtonRandom()
    if (boolChooseQualKlusters == 0) addButtonTransferChooseQualKlasters()
    else {
        addButtonChooseQualKlasters()
        boolChooseQualKlusters = 1
    }

    filterPoints()
    coloringPoints()
}

function updateCords() {
    button_K_Means()
    button_C_Means()
    button_Ostov()
    buttonComplete()
    buttonReset()
    buttonFindKlasters()
    buttonQualKlasters()
    buttonRandom()

}
/////////////////////////////////////////////////////////////////////////////////////////////////

//корды объектов (левый верх, правый низ)  

function buttonRandom() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 90
    let y1 = 155
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

function buttonReset() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = canvas.height - 85
    let y1 = canvas.height - 40
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

function buttonFindKlasters() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 180
    let y1 = 220
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

function buttonQualKlasters() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 180
    let y1 = 230
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

function buttonComplete() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 180
    let y1 = 260
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}
function button_K_Means() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 280
    let y1 = 320
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}
function button_C_Means() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 320
    let y1 = 360
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}
function button_Ostov() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 360
    let y1 = 400
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

function background() {
    let x0 = 15
    let x1 = canvas.width - 180
    let y0 = 65
    let y1 = canvas.height - 15
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

// функции создания объектов/кнопок

function paintPoint(x, y, color = "white") {
    pole.beginPath()
    pole.fillStyle = color
    pole.arc(x, y, r, 0, 2 * Math.PI)
    pole.fill();
}
function paintPointHalf(x, y, color = "white") {
    pole.beginPath()
    pole.fillStyle = color
    pole.arc(x, y, r, 0, Math.PI)
    pole.fill();
}

function addGameNameKlasters() {
    pole.beginPath()
    pole.font = "30px Trattatello, fantasy"
    pole.fillStyle = "#000000"

    pole.fillText("Кластеризация", 20, 35)
}

function addBackground() {
    let cords = background()
    pole.beginPath()
    const gradient = pole.createLinearGradient(cords.x0, cords.y0, cords.x1, cords.y0);

    gradient.addColorStop(0, "#0A083A");
    gradient.addColorStop(0.08, "black");
    gradient.addColorStop(0.92, "black");
    gradient.addColorStop(1, "#0A083A");
    pole.fillStyle = gradient

    pole.fillRect(cords.x0, cords.y0, cords.lenX, cords.lenY);
}

//кнопка перехода на выбор кол-ва кластеров
function addButtonTransferChooseQualKlasters() {
    let cords = buttonFindKlasters()
    pole.beginPath()

    pole.clearRect(cords.x0 - 2, cords.y0 - 2, cords.lenX + 4, cords.lenY + 40);

    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);

    pole.fillStyle = "white"
    pole.strokeStyle = "black"
    pole.fill();
    pole.stroke();

    pole.fillStyle = "#000000"
    pole.font = "17px Trattatello, fantasy"
    pole.fillText("кластеризировать", cords.x0 + 6, cords.y0 + 27)

}

//кнопка очистки поля
function addButtonReset() {
    let cords = buttonReset()

    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);
    pole.fillStyle = "red"
    pole.strokeStyle = "black"

    pole.fill();
    pole.stroke();

    pole.fillStyle = "black"
    pole.font = "23px Trattatello, fantasy"
    pole.fillText("очистка", cords.x0 + 30, cords.y0 + 30)
}

// кнопка рандооооом ..........ещё место инпута надо
function addButtonRandom() {
    let cords = buttonRandom()
    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);
    pole.fillStyle = "white"
    pole.strokeStyle = "black"

    pole.moveTo(cords.x0, cords.y0 + 25)
    pole.lineTo(cords.x1, cords.y0 + 25)
    pole.moveTo(cords.x0 + 100, cords.y0 + 25)
    pole.lineTo(cords.x0 + 100, cords.y1)

    pole.fill();
    pole.stroke();

    pole.fillStyle = "green"
    pole.fillRect(cords.x0 + 101, cords.y0 + 26,
        48, 38)

    pole.fillStyle = "#000000"
    pole.font = "23px Trattatello, fantasy"
    pole.fillText("нарандомить", cords.x0 + 8, cords.y0 + 20)

    inputQualPoints = document.createElement('input')
    inputQualPoints.type = 'text';
    inputQualPoints.style.position = 'absolute';
    inputQualPoints.style.width = "90px";
    inputQualPoints.style.height = "32px"

    let left = (280 + canvas.width - 164) + "px"
    let top = (130 + 116) + "px"
    inputQualPoints.style.left = left;
    inputQualPoints.style.top = top;

    document.body.appendChild(inputQualPoints);
}

//кнопка выбора количества кластеров
function addButtonChooseQualKlasters() {
    let cords = buttonQualKlasters()

    pole.beginPath()
    pole.clearRect(cords.x0 - 2, cords.y0 - 2, cords.lenX + 4, cords.lenY + 4);

    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);

    pole.fillStyle = "white"
    pole.strokeStyle = "black"

    pole.moveTo(cords.x0, cords.y0 + 18)
    pole.lineTo(cords.x1, cords.y0 + 18)
    pole.fill();
    pole.stroke();
    //кнопки/////////////////////////////

    //красная
    pole.beginPath()
    pole.strokeStyle = "black"
    pole.fillStyle = "red"

    pole.rect(cords.x0, cords.y0 + 20, 45, 30)
    pole.fill()
    pole.stroke()
    //зелёная
    pole.beginPath()
    pole.strokeStyle = "black"
    pole.fillStyle = "green"

    pole.rect(cords.x0 + 105, cords.y0 + 19,
        45, 31)
    pole.fill()
    pole.stroke();

    //конец кнопки///////////////////////

    pole.fillStyle = "#000000"
    pole.font = "17px Trattatello, fantasy"
    pole.fillText("кол-во кластеров", cords.x0 + 6, cords.y0 + 15)

    inputQualKlasters = document.createElement('input')
    inputQualKlasters.type = 'text';
    inputQualKlasters.style.position = 'absolute';
    inputQualKlasters.style.width = "51px";
    inputQualKlasters.style.height = "24px"

    let left = (280 + canvas.width - 120) + "px"
    let top = (130 + 199) + "px"
    inputQualKlasters.style.left = left;
    inputQualKlasters.style.top = top;

    //inputQualKlasters.style.left = "1237px";//1237
    //inputQualKlasters.style.top = "351px";
    document.body.appendChild(inputQualKlasters);

}

//кнопка готово
function addButtonComplete() {
    let cords = buttonComplete()
    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);

    pole.fillStyle = "white"
    pole.strokeStyle = "black"
    pole.fill();
    pole.stroke();

    pole.beginPath()
    pole.rect(cords.x0, cords.y1 - 42, cords.lenX, 42)

    pole.fillStyle = "red"
    pole.fill();
    pole.stroke();

    pole.fillStyle = "#000000"
    pole.font = "35px Trattatello, fantasy"
    pole.fillText("   готово", cords.x0 + 6, cords.y0 + 29)
    pole.font = "25px Trattatello, fantasy"
    pole.fillText("назад", cords.x0 + 38, cords.y0 + 67)

}

function addButton_K_Means() {
    let cords = button_K_Means()
    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);

    if (bool_K_Means == 0) {
        pole.fillStyle = "green"
    }
    else {
        pole.fillStyle = "red"
    }
    pole.strokeStyle = "black"
    pole.fill();
    pole.stroke();

    pole.fillStyle = "#000000"
    pole.font = "28px Trattatello, fantasy"
    pole.fillText("K_Means", cords.x0 + 18, cords.y0 + 30)

}
function addButton_C_Means() {
    let cords = button_C_Means()
    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);

    if (bool_C_Means == 0) {
        pole.fillStyle = "green"
    }
    else {
        pole.fillStyle = "red"
    }
    pole.strokeStyle = "black"
    pole.fill();
    pole.stroke();

    pole.fillStyle = "#000000"
    pole.font = "28px Trattatello, fantasy"
    pole.fillText("C_Means", cords.x0 + 18, cords.y0 + 30)

}
function addButton_Ostov() {
    let cords = button_Ostov()
    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);

    if (bool_Ostov == 0) {
        pole.fillStyle = "green"
    }
    else {
        pole.fillStyle = "red"
    }
    pole.strokeStyle = "black"
    pole.fill();
    pole.stroke();

    pole.fillStyle = "#000000"
    pole.font = "28px Trattatello, fantasy"
    pole.fillText("Ostov", cords.x0 + 40, cords.y0 + 30)

}

///////////////////////////////////////////////////////////////////////////////////////////////////

//bool функции активации 

function boolReset() {
    let cords = buttonReset()
    if (cords.x0 + 2 < x && x < cords.x1 - 2 &&
        cords.y0 + 2 < y && y < cords.y1 - 2)
        return true
    return false
}

function boolAddPoint() {
    let cords = background()
    if (boolChooseQualKlusters == 0 && cords.x0 + r < x && x < cords.x1 - r && cords.y0 + r < y && y < cords.y1 - r)
        return true
    return false
}

function boolRandom() {
    let cords = buttonRandom()
    if (boolChooseQualKlusters == 0 &&
        cords.x0 + 101 < x && x < cords.x0 + 149 &&
        cords.y0 + 26 < y && y < cords.y1 - 1 &&
        checkInput(inputQualPoints.value) == true) return true
    return false
}

function boolStartKlasterization() {
    let cords = buttonFindKlasters()
    if (boolChooseQualKlusters == 0 &&
        cords.x0 + 2 < x && x < cords.x1 - 2 &&
        cords.y0 + 2 < y && y < cords.y1 - 2)
        return true
    return false
}

function boolCancelChooseQualKlasters() {
    let cords = buttonQualKlasters()
    if (boolChooseQualKlusters == 1 &&
        cords.x0 + 2 < x && x < cords.x0 + 43 &&
        cords.y0 + 22 < y && y < cords.y0 + 48)
        return true
    return false
}

function boolSearchKlasters() {
    let cords = buttonQualKlasters()
    if (boolChooseQualKlusters == 1 && checkInputQualKlaters(inputQualKlasters.value) == true &&
        cords.x0 + 107 < x && x < cords.x0 + 150 &&
        cords.y0 + 21 < y && y < cords.y0 + 49)
        return true
    return false
}

function boolBackToChooseQualKlasters() {
    let cords = buttonComplete()
    if (boolChooseQualKlusters == 2 &&
        cords.x0 + 2 < x && x < cords.x1 - 2 &&
        cords.y1 - 40 < y && y < cords.y1 - 2)
        return true
    return false
}

function boolActivate_K_Means() {
    let cords = button_K_Means()
    if (boolChooseQualKlusters == 2 &&
        cords.x0 + 1 < x && x < cords.x1 - 1 &&
        cords.y0 + 1 < y && y < cords.y1 - 1)
        return true
    return false
}
function boolActivate_C_Means() {
    let cords = button_C_Means()
    if (boolChooseQualKlusters == 2 &&
        cords.x0 + 1 < x && x < cords.x1 - 1 &&
        cords.y0 + 1 < y && y < cords.y1 - 1)
        return true
    return false
}
function boolActivate_Ostov() {
    let cords = button_Ostov()
    if (boolChooseQualKlusters == 2 &&
        cords.x0 + 1 < x && x < cords.x1 - 1 &&
        cords.y0 + 1 < y && y < cords.y1 - 1)
        return true
    return false
}


////////////////////////////////////////////////////////////////////////////////////////////////////

//функции действия объектов

function narandomiti() {
    if (boolRandom() == true) {
        let cords = background()
        let value = Number(inputQualPoints.value)

        for (let i = 0; i < value; i++) {
            let randomX = getRandomInt(cords.lenX - 2 * r) + cords.x0 + r;
            let randomY = getRandomInt(cords.lenY - 2 * r) + cords.y0 + r;

            paintPoint(randomX, randomY)
            Points[Points.length] = Node(randomX, randomY)
        }
    }
}

function resetGame() {
    if (boolReset() == true) {
        let cords = buttonComplete()
        let cords1 = button_Ostov()
        Points = []
        boolChooseQualKlusters = 0
        inputQualPoints.remove()
        try {
            inputQualKlasters.remove()
        }
        catch {
            1
        }
        bool_C_Means=0
        bool_K_Means=0
        bool_Ostov=0

        pole.clearRect(cords.x0 - 2, cords.y0 - 2, cords.lenX + 4, cords1.y1 - cords.y0 + 4)
        addBackground()
        addButtonTransferChooseQualKlasters()
        addButtonRandom()
    }
}

function addPoint() {
    if (boolAddPoint() == true) {
        paintPoint(x, y)
        Points[Points.length] = Node(x, y)
    }
}

function transferToChooseQualKlasters() {
    if (boolStartKlasterization() == true && used2 == false) {
        boolChooseQualKlusters = 1
        addButtonChooseQualKlasters()

        used2 = true

    }
}

function CancelChooseQualKlasters() {
    if (boolCancelChooseQualKlasters() == true && used2 == false) {
        inputQualKlasters.remove()
        addButtonTransferChooseQualKlasters()
        boolChooseQualKlusters = 0

        used2 = true
    }
}

function SearchKlasters() {
    if (boolSearchKlasters() == true) {
        let k = Number(inputQualKlasters.value)

        {
            deleteNaloshPoints(32)
            addBackground()
            coloringPoints()
        }

        K_Means(k)
        C_Means(k)
        ostovKlasters(k)

        addButtonComplete()
        addButton_K_Means()
        addButton_C_Means()
        addButton_Ostov()
        inputQualKlasters.remove()
        boolChooseQualKlusters = 2
    }

}

function BackToChooseQualKlasters() {
    if (boolBackToChooseQualKlasters() == true) {
        let cords = buttonComplete()
        let cords1 = button_Ostov()

        boolChooseQualKlusters = 0;
        bool_C_Means=0
        bool_K_Means=0
        bool_Ostov=0

        pole.clearRect(cords.x0 - 2, cords.y0 - 2, cords.lenX + 4, cords1.y1 - cords.y0 + 4)
        addButtonTransferChooseQualKlasters()
        addBackground()
        coloringPoints()
    }
}

function activate_K_Means() {
    if (boolActivate_K_Means() == true) {
        bool_K_Means = (bool_K_Means + 1) % 2
        addButton_K_Means()
    }
}
function activate_C_Means() {
    if (boolActivate_C_Means() == true) {
        bool_C_Means = (bool_C_Means + 1) % 2
        addButton_C_Means()
    }
}
function activate_Ostov() {
    if (boolActivate_Ostov() == true) {
        bool_Ostov = (bool_Ostov + 1) % 2
        addButton_Ostov()
    }
}

function coloringKlasters() {
    let cords1 = button_K_Means()
    let cords2 = button_Ostov()

    if (boolChooseQualKlusters == 2 &&
        cords1.x0 + 1 < x && x < cords2.x1 - 1 &&
        cords1.y0 + 1 < y && y < cords2.y1 - 1) {
        let k = Number(inputQualKlasters.value)

        addBackground()
        coloringPoints()

        if (bool_Ostov == 1) {
            coloringKlasters_Ostov()

        }

        if (bool_C_Means + bool_K_Means == 2) {
            coloringKlasters_C_Means(k)
            coloringKlastersHalf_K_Means(k)
        }
        else if (bool_C_Means == 1) {
            coloringKlasters_C_Means(k)
        }
        else if (bool_K_Means == 1) {
            coloringKlasters_K_Means(k)
        }

    }
}

function deleteNaloshPoints(d = 16) {
    let flag = 0
    while (flag == 0) {
        flag = 1
        for (let i = 0; i < Points.length; i++) {
            for (let j = i + 1; j < Points.length; j++) {
                if (distance(Points[i], Points[j]) < d) {
                    flag = 0
                    Points.splice(j, 1)
                    break
                }
            }
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

// главные переменные/структура



var r = 8

var boolChooseQualKlusters = 0
var bool_K_Means = 0
var bool_C_Means = 0
var bool_Ostov = 0

function Node(x, y) {
    return { "x": x, "y": y }
}

function edge(a, b, d) {
    return { "a": a, "b": b, "d": d }
}

var Points = []

function color(r, g, b) {
    return { "r": r, "g": g, "b": b }
}
// поле для ввода (в рандоме стоит)
let inputQualPoints;

//поле для ввода (в выборе кол-ва кластеров стоит)
let inputQualKlasters;

var colors_K_Means;// цвета для кластеров
var klasters_K_Means;// кластеры
var centroids_K_Means// центры кластеров

var klasters_C_Means
var centroids_C_Means
var colors_C_Means
var colorsPoints_C_Means

var edges
var ostovEdges
var ostovGraph
var colors_Ostov

////////////////////////////////////////////////////////////////////////////////////////////////////////

function filterPoints() {
    let cords = background()
    for (let i = 0; i < Points.length;) {
        if (!(cords.x0 + 2 <= Points[i].x && Points[i].x <= cords.x1 - 2 &&
            cords.y0 + 2 <= Points[i].y && Points[i].y <= cords.y1 - 2)) {
            Points.splice(i, 1)
        }
        else {
            i++
        }
    }
}

function coloringPoints(color = "white") {
    for (let i = 0; i < Points.length; i++) {
        paintPoint(Points[i].x, Points[i].y, color)
    }
}

// костыль для закрытия canvas
function CloseInputsKlasters() {

    try {
        inputQualPoints.remove()
    }
    catch {
        1
    }
    try {
        inputQualKlasters.remove()
    }
    catch {
        1
    }

}

//проверка ввода(должно быть число)
function checkInput(value) {
    let f = true

    if (value == "") return false

    for (let i = 0; i < value.length; i++) {
        if ((!(value[i] == "0" || value[i] == "1" || value[i] == "2" ||
            value[i] == "3" || value[i] == "4" || value[i] == "5" ||
            value[i] == "6" || value[i] == "7" || value[i] == "8" || value[i] == "9"))) {
            f = false;
        }
    }

    return f
}

// проверка value:  0 < value <= кол-ва точек
function checkInputQualKlaters(value) {
    let f = checkInput(value)

    if (f == true) {
        if (value.length == 0 || value <= 0 || value > Points.length) {
            f = false
        }
    }

    return f
}

// квадрат расстояния между точками а и б
function distance2(a, b) {
    let x = Math.pow(a.x - b.x, 2)
    let y = Math.pow(a.y - b.y, 2)
    return x + y
}

function distance(a, b) {
    let x = Math.pow(a.x - b.x, 2)
    let y = Math.pow(a.y - b.y, 2)
    return Math.sqrt(x + y)
}

function drawCentroids() {
    for (let i = 0; i < centroids_K_Means.length; i++) {
        pole.beginPath()
        pole.fillStyle = "white"
        pole.arc(centroids_K_Means[i].x, centroids_K_Means[i].y, 8, 0, 2 * Math.PI)
        pole.fill();
    }
}

// рандом int от 0 до max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function mixColors(indPoint, k) {
    let resultColor = colors_C_Means[0]
    let koef1 = klasters_C_Means[0][indPoint]

    for (let i = 1; i < k; i++) {
        let koef2 = klasters_C_Means[i][indPoint]
        resultColor = mixTwoColor(resultColor, colors_C_Means[i], calcKoef(koef1, koef2))
        koef1 += koef2
    }

    return resultColor
}

function colorsForKlasters_C_Means(k) {
    colors_C_Means = []
    for (let i = 0; i < k; i++) {
        colors_C_Means[i] = getRandomColorRGB()
    }
}
function colorsForPoints_C_Means(k) {
    colorsForKlasters_C_Means(k)

    colorsPoints_C_Means = []
    for (let i = 0; i < Points.length; i++) {
        colorsPoints_C_Means[i] = colorFromRGBToHTML(mixColors(i, k))
    }
}
function coloringKlasters_C_Means(k) {
    colorsForPoints_C_Means(k)
    for (let i = 0; i < Points.length; i++) {
        paintPoint(Points[i].x, Points[i].y, colorsPoints_C_Means[i])
    }
}

function colorsForKlasters_K_Means(k) {
    colors_K_Means = []
    for (let i = 0; i < k; i++) {
        colors_K_Means[i] = getRandomColorHTML()
    }
}
function coloringKlasters_K_Means(k) {
    colorsForKlasters_K_Means(k)

    for (let i = 0; i < klasters_K_Means.length; i++) {
        for (let j = 0; j < klasters_K_Means[i].length; j++) {
            paintPoint(klasters_K_Means[i][j].x, klasters_K_Means[i][j].y, colors_K_Means[i])
        }
    }
}
function coloringKlastersHalf_K_Means(k) {
    colorsForKlasters_K_Means(k)

    for (let i = 0; i < klasters_K_Means.length; i++) {
        for (let j = 0; j < klasters_K_Means[i].length; j++) {
            paintPointHalf(klasters_K_Means[i][j].x, klasters_K_Means[i][j].y, colors_K_Means[i])
        }
    }
}

function colorsForKlasters_Ostov() {
    colors_Ostov = []
    for (let i = 0; i < connectComp.length; i++) {
        colors_Ostov[i] = getRandomColorHTML()
    }
}
function coloringKlasters_Ostov() {
    findConnectComp()
    colorsForKlasters_Ostov()

    for (let i = 0; i < connectComp.length; i++) {
        for (let edge of connectCompEdges[i]) {
            pole.beginPath()
            pole.moveTo(edge.x.x, edge.x.y)
            pole.lineTo(edge.y.x, edge.y.y)
            pole.strokeStyle = colors_Ostov[i]
            pole.stroke()
        }
    }

    for (let edge of ostovEdges) {
        pole.beginPath()
        pole.moveTo(edge.a.x, edge.a.y)
        pole.lineTo(edge.b.x, edge.b.y)
        pole.strokeStyle = "white"
        //pole.stroke()
    }

}

function K_Means(k) {
    let cords = background()
    //объявляем центры
    centroids_K_Means = []
    for (let i = 0; i < k; i++) {
        centroids_K_Means[i] = Node(getRandomInt(cords.lenX - 4) + cords.x0 + 2, getRandomInt(cords.lenY - 4) + cords.y0 + 2)
    }

    let WCSS = -1; //текущее отклонение

    while (true) { //крутим пока разница между отклонениями не станет меньше 10
        let newWCSS = 0
        let dist = 0

        // объявляем/переобъявляем кластеры

        klasters_K_Means = Array(centroids_K_Means.length)
        for (let i = 0; i < klasters_K_Means.length; i++) {
            klasters_K_Means[i] = []
        }

        // раскидываем точки по кластерам
        for (let i = 0; i < Points.length; i++) {
            let ind = 0
            let minDist = 999999

            // определяем в какой кластер кинуть
            for (let j = 0; j < centroids_K_Means.length; j++) {
                dist = distance2(Points[i], centroids_K_Means[j])

                if (minDist > dist) {
                    minDist = dist
                    ind = j
                }
            }
            // считаем отклонение и кидаем в кластер
            newWCSS += distance2(Points[i], centroids_K_Means[ind])
            klasters_K_Means[ind][klasters_K_Means[ind].length] = Points[i]
        }

        let newCentroids = []
        let boolQualKlasters = true
        // переопределяем центры
        for (let i = 0; i < klasters_K_Means.length; i++) {
            let sumX = 0, sumY = 0, count = 0
            for (let j = 0; j < klasters_K_Means[i].length; j++) {
                sumX += klasters_K_Means[i][j].x
                sumY += klasters_K_Means[i][j].y
                count++
            }
            if (count != 0)
                newCentroids[i] = Node(Math.floor(sumX / count) + 1, Math.floor(sumY / count) + 1)
            else {
                boolQualKlasters = false
                newCentroids[i] = Node(getRandomInt(cords.lenX - 4) + cords.x0 + 2, getRandomInt(cords.lenY - 4) + cords.y0 + 2)
            }

        }

        if (Math.abs(WCSS - newWCSS) < 1 && boolQualKlasters == true) { // break while
            break
        }

        // обновляем текущее отклонение и центры
        centroids_K_Means = newCentroids
        WCSS = newWCSS
    }
}

function C_Means(k, m = 2) {
    let cords = background()

    //инициализация массива кластеров кластер|точка = принадлежность к кластеру(0.0 - 0.99)
    // и массива растояний центройд|точка = растояние между ними
    klasters_C_Means = Array(k)
    let dist = Array(k)
    for (let i = 0; i < k; i++) {
        klasters_C_Means[i] = Array(Points.length)
        dist[i] = Array(Points.length)
    }

    //заполнение массива кластеров .. суммы принадлежностей одной точки к всем кластерам = 1
    for (let i = 0; i < Points.length; i++) {
        let suma = 0
        for (let j = 0; j < k; j++) {
            let temp = 0

            if (suma < 950) {
                temp = getRandomInt(1000)

                while (suma + temp > 1000) {
                    temp = getRandomInt(1000)
                }
            }
            else if (suma <= 1000) {
                temp = getRandomInt(50)

                while (suma + temp > 1000) {
                    temp = getRandomInt(50)
                }
            }

            suma += temp
            klasters_C_Means[j][i] = temp / 1000
        }
        if (suma != 1000) {
            klasters_C_Means[k - 1][i] += (1000 - suma) / 1000
        }
    }
    centroids_C_Means = Array(k)
    let epsilonNow = 0, epsilonNew = 10000
    while (Math.abs(epsilonNew - epsilonNow) > 0.001) {
        epsilonNow = epsilonNew
        epsilonNew = 0

        //обновляем корды центройдов и считаем длину точек до центройдов
        for (let i = 0; i < k; i++) {
            let chislitelX = 0
            let chislitelY = 0
            let znamenatel = 0

            for (let j = 0; j < Points.length; j++) {
                chislitelX += Points[j].x * Math.pow(klasters_C_Means[i][j], m)
                chislitelY += Points[j].y * Math.pow(klasters_C_Means[i][j], m)
                znamenatel += Math.pow(klasters_C_Means[i][j], m)
            }

            centroids_C_Means[i] = Node(chislitelX / znamenatel, chislitelY / znamenatel)
            for (let j = 0; j < Points.length; j++) {
                dist[i][j] = distance(centroids_C_Means[i], Points[j])
            }
        }
        let suma
        //обновление принадлежности кластерам
        for (let i = 0; i < Points.length; i++) {
            for (let j = 0; j < k; j++) {
                suma = 0

                for (let q = 0; q < k; q++) {
                    suma += Math.pow(dist[j][i], 2) / Math.pow(dist[q][i], 2)
                }

                suma = Math.pow(suma, 1 / (m - 1))
                suma = Math.pow(suma, -1)

                klasters_C_Means[j][i] = suma
            }
            epsilonNew += suma
        }
    }




}

function createEdges() {
    edges = []
    for (let i = 0; i < Points.length; i++) {
        for (let j = i + 1; j < Points.length; j++) {
            edges[edges.length] = edge(Points[i], Points[j], distance2(Points[i], Points[j]))
        }
    }

    edges.sort((a, b) => {
        if (a.d > b.d) return 1
        return -1
    })
}

function createOstovKraskala() {
    createEdges()

    let topsInOstov = new Set()
    topsInOstov.add(Points[0])
    ostovEdges = []

    while (topsInOstov.size != Points.length) {
        for (let edge of edges) {
            let flag = topsInOstov.has(edge.a) + topsInOstov.has(edge.b)
            if (flag == 1) {
                ostovEdges[ostovEdges.length] = edge
                topsInOstov.add(edge.a)
                topsInOstov.add(edge.b)
                break
            }
        }
    }
}

function ostovKlasters(k) {
    createOstovKraskala()
    ostovEdges.sort((a, b) => {
        if (a.d > b.d) return -1
        return 1
    })

    ostovEdges.splice(0, k - 1)
}

var maxY = 0
function createGraph() {
    maxY = 0
    for (let edge of ostovEdges) {
        maxY = Math.max(maxY, edge.a.y, edge.b.y)
    }
    maxY++

    ostovGraph = {}
    for (let edge of ostovEdges) {
        let a = edge.a.x * maxY + edge.a.y
        let b = edge.b.x * maxY + edge.b.y

        if (a in ostovGraph == false) {
            ostovGraph[a] = []
        }
        if (b in ostovGraph == false) {
            ostovGraph[b] = []
        }

        ostovGraph[a].push(b)
        ostovGraph[b].push(a)
    }
}
var connectComp = []
var connectCompEdges = []
var hasTops = new Set()
function dfs(graph, start) {
    let visited = []; // save a visited nodes 
    let needVisit = [];  // save a need-to-visit nodes

    needVisit.push(start);  // start search with start node

    // looping for need-to-visit list
    while (needVisit.length !== 0) {
        let node = needVisit.shift(); // take a nodes which in first position in array
        if (!visited.includes(node)) { // if this node is not visited,
            visited.push(node); // add to visited list (now visit)

            const tmp = (!graph[node] ? [] : graph[node])
            needVisit = [...tmp, ...needVisit]
            // dfs is depth first, So, nodes connected to this node has more high priority than original nodes in need-to-visit list
        }
    }
    connectComp.push(visited)
    hasTops = new Set([...hasTops, ...new Set(visited)])
}
function findConnectComp() {
    createGraph()
    hasTops = new Set()
    connectComp = []
    for (let edge of ostovEdges) {
        let a = edge.a.x * maxY + edge.a.y
        let b = edge.b.x * maxY + edge.b.y

        if (hasTops.has(a) == false) {
            dfs(ostovGraph, a)
        }

        if (hasTops.has(b) == false) {
            dfs(ostovGraph, b)
        }
    }

    let temp = new Set()
    connectCompEdges = []
    for (let i = 0; i < connectComp.length; i++) {
        connectCompEdges[i] = []
        for (let j = 0; j < connectComp[i].length; j++) {
            for (let q = 0; q < ostovGraph[connectComp[i][j]].length; q++) {
                let a = connectComp[i][j]
                let b = ostovGraph[connectComp[i][j]][q]
                if (a > b) {
                    [a, b] = [b, a]
                }

                let temp1 = a + b
                if (temp.has(temp1) == false) {
                    a = Node(Math.floor(a / maxY), a % maxY)
                    b = Node(Math.floor(b / maxY), b % maxY)
                    connectCompEdges[i].push(Node(a, b))
                    temp.add(temp1)
                }

            }
        }
    }
    console.dir(connectCompEdges)
}
