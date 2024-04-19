function addButtonsA() {
    CloseInputsA()
    addGameNameA()
    addButtonSizeField()

}

function addGameNameA() {
    pole.beginPath()
    pole.font = "30px Trattatello, fantasy"
    pole.fillStyle = "#3F172C"

    pole.fillText("А*", 20, 35)
}



function buttonSizeField() {
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

let inputSizeField
function addButtonSizeField() {
    let cords = buttonSizeField()
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

    pole.fillStyle = "#3F172C"
    pole.font = "23px Trattatello, fantasy"
    pole.fillText("размер карты", cords.x0 + 4, cords.y0 + 20)

    inputSizeField = document.createElement('input')
    inputSizeField.type = 'text';
    inputSizeField.style.position = 'absolute';
    inputSizeField.style.width = "90px";
    inputSizeField.style.height = "32px"

    let left = (280 + canvas.width - 162) + "px"
    let top = (130 + 118) + "px"
    inputSizeField.style.left = left;
    inputSizeField.style.top = top;

    document.body.appendChild(inputSizeField);
}

let side
let minSide = 20
let maxSide = 80
function checkInputSizeField() {
    let value = inputSizeField.value

    let width = canvas.width - 195;
    let height = canvas.height - 90;

    if (checkInput(value) == true) {
        if (width / value >= minSide && height / value >= minSide) {
            return true
        }
    }
    return false
}

let field = [] // A - начало, B - конец, 0 - стенка, 1 - свободно
var active = false
function activateField() {
    if (boolActivateField() == true) {
        field = Array(n)
        for (let i = 0; i < n; i++) {
            field[i] = Array(n)
            for (let j = 0; j < n; j++) {
                field[i][j] = 1
            }
        }
        console.log(n)
        active = true
        paintField()
        addButtonChoiceSell()
        cordsStart = 0
        cordsEnd = 0
        addButtonFindWay()

    }
}

function clearField() {
    pole.beginPath()
    pole.clearRect(15, 65, canvas.width - 165 - 18, canvas.height - 15 - 65)
}
function boolActivateField() {
    let cords = buttonSizeField()
    if (cords.x0 + 101 < x && x < cords.x0 + 149 &&
        cords.y0 + 26 < y && y < cords.y1 - 1 &&
        checkInputSizeField() == true) {
        if (active == false) {
            n = inputSizeField.value
            return true
        }
        if (active == true && n != inputSizeField.value) {
            clearField()
            n = inputSizeField.value
            return true
        }

    }
    return false
}
let n
function paintField() {
    let width = canvas.width - 195;
    let height = canvas.height - 90;

    side = Math.min(maxSide, width / n, height / n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pole.beginPath()
            pole.rect(20 + i * side, 70 + j * side, side, side)
            pole.strokeStyle = 'black'

            if (field[i][j] == 1) {
                pole.fillStyle = 'white';
            }
            else if (field[i][j] == 0) {
                pole.fillStyle = 'black';
            }
            else if (field[i][j] == 'A') {
                pole.fillStyle = 'green';
            }
            else {
                pole.fillStyle = 'red';
            }

            pole.fill()
            pole.stroke()

        }
    }
}


function buttonChoiceSell() {
    let x0 = canvas.width - 160
    let x1 = x0 + 35
    let x2 = x1 + 35
    let x3 = x2 + 35
    let x4 = canvas.width - 20
    let y0 = 170
    let y1 = 205
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "x2": x2,
        "x3": x3,
        "x4": x4,
        "y1": y1,
        "lenX": x4 - x0,
        "lenY": y1 - y0
    }
}

let choicenSell = 0; // 1 - B, 2 - свобода, 3 - стенка, 4 - A

function ChoiceSell() {
    let cords = buttonChoiceSell()
    if (cords.x0 < x && x < cords.x4 &&
        cords.y0 < y && y < cords.y1) {

        addButtonChoiceSell()

        pole.beginPath()
        pole.fillStyle = "blue"
        if (cords.x0 < x && x < cords.x1 &&
            cords.y0 < y && y < cords.y1) {
            choicenSell = 1

            pole.arc(cords.x0 + (cords.x1 - cords.x0) / 2, cords.y0 + cords.lenY / 2, 7, 0, 2 * Math.PI)
            pole.fill()
        }

        if (cords.x1 < x && x < cords.x2 &&
            cords.y0 < y && y < cords.y1) {
            choicenSell = 2

            pole.arc(cords.x1 + (cords.x1 - cords.x0) / 2, cords.y0 + cords.lenY / 2, 7, 0, 2 * Math.PI)
            pole.fill()
        }

        if (cords.x2 < x && x < cords.x3 &&
            cords.y0 < y && y < cords.y1) {
            choicenSell = 3

            pole.arc(cords.x2 + (cords.x1 - cords.x0) / 2, cords.y0 + cords.lenY / 2, 7, 0, 2 * Math.PI)
            pole.fill()
        }

        if (cords.x3 < x && x < cords.x4 &&
            cords.y0 < y && y < cords.y1) {
            choicenSell = 4

            pole.arc(cords.x3 + (cords.x1 - cords.x0) / 2, cords.y0 + cords.lenY / 2, 7, 0, 2 * Math.PI)
            pole.fill()
        }

    }

}

function addButtonChoiceSell() {
    let cords = buttonChoiceSell()

    pole.beginPath()

    pole.strokeStyle = "black"
    //pole.lineWidth = 1;


    pole.fillStyle = "red"
    pole.rect(cords.x0, cords.y0, cords.x1 - cords.x0, cords.lenY)

    pole.fill()
    pole.stroke()
    pole.beginPath()

    pole.fillStyle = "white"
    pole.rect(cords.x1, cords.y0, cords.x2 - cords.x1, cords.lenY)

    pole.fill()
    pole.stroke()
    pole.beginPath()

    pole.fillStyle = "black"
    pole.rect(cords.x2, cords.y0, cords.x3 - cords.x2, cords.lenY)

    pole.fill()
    pole.stroke()
    pole.beginPath()

    pole.fillStyle = "green"
    pole.rect(cords.x3, cords.y0, cords.x4 - cords.x3, cords.lenY)

    pole.fill()
    pole.stroke()
}

let cordsStart = 0
let cordsEnd = 0

function clickCell() {
    let width = canvas.width - 195;
    let height = canvas.height - 90;
    let side = Math.min(maxSide, width / n, height / n)

    if (20 < x && x < 20 + side * n &&
        70 < y && y < 70 + side * n &&
        choicenSell != 0 && found==0) {


        let i = Math.floor((x - 20) / side)
        let j = Math.floor((y - 70) / side)
        console.log(x)

        if (choicenSell == 1) {
            if (cordsEnd != 0 && field[cordsEnd[0]][cordsEnd[1]] == 'B') {
                field[cordsEnd[0]][cordsEnd[1]] = 1
            }
            field[i][j] = 'B'
            cordsEnd = [i, j]
        }

        if (choicenSell == 2) {
            field[i][j] = 1
        }

        if (choicenSell == 3) {
            field[i][j] = 0
        }

        if (choicenSell == 4) {
            if (cordsStart != 0 && field[cordsStart[0]][cordsStart[1]] == 'A') {
                console.log(cordsStart)
                field[cordsStart[0]][cordsStart[1]] = 1
            }
            field[i][j] = 'A'
            cordsStart = [i, j]
        }

        paintField()
    }


}
/////////////


function buttonFindWay() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 220
    let y1 = 270
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

function addButtonFindWay() {
    let cords = buttonFindWay()
    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);

    pole.fillStyle = "white"
    pole.strokeStyle = "black"
    pole.fill();
    pole.stroke();

    pole.fillStyle = "#3F172C"
    pole.font = "35px Trattatello, fantasy"
    pole.fillText("Поиск", cords.x0 + 25, cords.y0 + 38)

}

function buttonComp() {
    let x0 = canvas.width - 165
    let x1 = canvas.width - 15
    let y0 = 220
    let y1 = 300
    return {
        "x0": x0,
        "y0": y0,
        "x1": x1,
        "y1": y1,
        "lenX": x1 - x0,
        "lenY": y1 - y0
    }
}

function addButtonComp() {
    let cords = buttonComp()
    pole.beginPath()
    pole.clearRect(cords.x0 - 3, cords.y0 - 3, cords.lenX + 6, cords.lenY + 6);
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

    pole.fillStyle = "#3F172C"
    pole.font = "35px Trattatello, fantasy"
    pole.fillText("_готово_", cords.x0 + 6, cords.y0 + 29)
    pole.font = "25px Trattatello, fantasy"
    pole.fillText("назад", cords.x0 + 38, cords.y0 + 67)
}
let found = 0

function clickbuttonFindWay() {
    let cords = buttonFindWay()
    if (cords.x0 < x && x < cords.x1 &&
        cords.y0 < y && y < cords.y1 &&
        found == 0 && cordsStart != 0 && cordsEnd != 0 && used1 == false) {
        used1 = true

        found = 1
        addButtonComp()

        findAndPaintWay()
    }

}

function backToFindWay() {
    let cords = buttonComp()
    if (found == 1 && used1 == false &&
        cords.x0 + 2 < x && x < cords.x1 - 2 &&
        cords.y1 - 40 < y && y < cords.y1 - 2) {
        used1 = true

        pole.beginPath()
        pole.clearRect(cords.x0 - 3, cords.y0 - 3, cords.lenX + 6, cords.lenY + 6);
        addButtonFindWay()
        paintField()
        found = 0

    }


}

function findAndPaintWay() {
    let graph = new Graph(n, field)
    let way = graph.findWay(cordsStart[0], cordsStart[1], cordsEnd[0], cordsEnd[1])
    console.dir(way)
    for (let i = 0; i < way.length; i++) {
        pole.beginPath()
        pole.fillStyle = 'blue'
        pole.arc(20 + way[i].x * side + side / 2, 70 + way[i].y * side + side / 2, side / 9, 0, 2 * Math.PI)
        
        pole.fill()
    }


}









////////////



function CloseInputsA() {

    try {
        inputSizeField.remove()
    }
    catch {
        1
    }


}
























function cord(x1, y1, n = -1) {
    let x, y, i

    if (n == -1) {
        x = Math.floor(x1 / y1);
        y = x1 % y1;
        i = x1;
    }
    else {
        i = x1 * n + y1;
        x = x1;
        y = y1;
    }
    return {
        "x": x,
        "y": y,
        "i": i
    }
}

class Graph {
    offset = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    newcords = []
    lenWays = []
    matrix = []

    constructor(n, field) {
        this.n = n
        this.field = field
    }

    oneStep(from) {
        this.newcords = []
        let x1, y1

        for (let j = 0; j < this.offset.length; j++) {
            x1 = from.x + this.offset[j][0];
            y1 = from.y + this.offset[j][1];

            if (x1 >= 0 && x1 < this.n && y1 >= 0 && y1 < this.n && this.field[x1][y1] != 0) {
                this.newcords.push(cord(x1, y1, this.n))
            }
        }
        
    }

    fillMatrix(from) { // cord

        for (let i = 0; i < n * n; i++) {
            this.matrix[i] = []
            for (let j = 0; j < n * n; j++) {
                this.matrix[i][j] = 0
            }
        }

        let tops = [from]
        let now
        
        while (tops.length>0) {
            now = tops[0]
            tops.shift()

            this.oneStep(now)

            let next
            for (let q = 0; q < this.newcords.length; q++) {
                next = this.newcords[q]

                if (this.matrix[now.i][next.i] == 0) {
                    this.matrix[now.i][next.i] = 1
                    this.matrix[next.i][now.i] = 1
                    tops.push(next)
                }
            }
            
            
        }
    }

    BFS(x, y) {
        let size = this.n * this.n
        let from = cord(x, y, this.n)

        this.fillMatrix(from)

        let queueTops = [from]

        this.lenWays = []
        for (let i = 0; i < size; i++) this.lenWays[i] = -1
        this.lenWays[from.i] = 0

        let viewed = []
        for (let i = 0; i < size; i++) viewed[i] = 0

        viewed[from.i] = 1

        let now
        while (queueTops.length>0) {
            now = queueTops[0]
            queueTops.shift()

            for (let q = 0; q < size; q++) {
                if (this.matrix[now.i][q] == 1 && viewed[q] == 0) {
                    this.lenWays[q] = this.lenWays[now.i] + 1
                    viewed[q] = 1;
                    queueTops.push(cord(q, this.n))
                    
                }
            }
        }
    }

    findWay(x1, y1, x2, y2) {
        let size = this.n * this.n
        this.BFS(x1, y1)

        //console.dir(this.lenWays)
        //console.dir(this.matrix)
        let end = cord(x2, y2, this.n)
        if (this.lenWays[end.i] == -1) {
            return -1;
        }
        let len = this.lenWays[end.i] - 1
        let way = [end]

        while (len >= 0) {
            for (let j = 0; j < size; j++) {
                if (this.matrix[way[way.length - 1].i][j] == 1 && this.lenWays[j] == len) {
                    way.push(cord(j, this.n))
                    len--
                    break
                }
            }
        }

        return way.reverse()
    }
}