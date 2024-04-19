function addButtonsAnts() {
    addGameNameAnts()

    addButtonGetPath()

    addBackground()

    addButtonReset()

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
function addGameNameAnts() {
    pole.beginPath()
    pole.font = "30px Trattatello, fantasy"
    pole.fillStyle = "#000000"

    pole.fillText("Муравьиный алгоритм", 20, 35)

}

function buttonGetPath() {
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

function addButtonGetPath() {

    let cords = buttonGetPath()
    pole.beginPath()
    pole.rect(cords.x0, cords.y0, cords.lenX, cords.lenY);
    pole.fillStyle = "green"
    pole.strokeStyle = "black"

    pole.fill();
    pole.stroke();

    pole.fillStyle = "#000000"
    pole.font = "23px Trattatello, fantasy"
    pole.fillText("Получить путь", cords.x0 + 4, cords.y0 + 40)
    
}

function boolGetPath() {
    let cords = buttonGetPath()
    if (cords.x0 < x && x < cords.x1 && cords.y0 < y && y < cords.y1) return true
    return false
}

function paintpoint(x, y, color = "white") {
    pole.beginPath()
    pole.fillStyle = color
    pole.arc(x, y, r, 0, 2 * Math.PI)
    pole.fill();
}

function booladdpoint() {
    let cords = background()
    if (cords.x0 + r < x && x < cords.x1 - r && cords.y0 + r < y && y < cords.y1 - r)
        return true
    return false
}

function addpoint() {
    if (booladdpoint() == true) {
        paintpoint(x, y)
        coords.push([x, y, 0])
    }
}

var coords = []
var graf = []

function clearPole() {
    if (boolReset() == true) {

        coords = []
        graf = []
   
        addBackground()
    }
}


function getGraph(coords, graf){
    if (boolGetPath() == true){
        for (let i = 0; i < coords.length; i++){

            let edge = [];
            for (let j = 0; j < coords.length; j++){

                if (i == j){
                    edge.push(0);
                } else{
                    edge.push(Math.pow(Math.pow(coords[i][0] - coords[j][0], 2) + Math.pow(coords[i][1] - coords[j][1], 2), 0.5));
                }

            }
            graf.push(edge);

        }
    }

}

//////////////////////////////////////////////////

function selectVertex(probability){
    let a = Math.random();
    let summa = 0;
    let index = probability.length - 1;

    for (let i = 0; i < probability.length; i++){
        summa += probability[i];
        if (a < summa){
            index = i;
            break;
        }
    }
    return index;
}

function LengthPath(localpath, graph){
    let summ = 0;
    for (let i = 0; i < localpath.length - 1; i++){
        summ += graph[localpath[i]][localpath[i + 1]];
    }
    summ += graph[localpath[localpath.length - 1]][localpath[0]];
    return summ;
}

function Path (coords){
    if (boolGetPath() == true){
        pole.strokeStyle = "white"

        for (let i = 0; i < coords.length; i++){
            if (coords[i][2] == 0){
                pole.moveTo(coords[i][0], coords[i][1]);
                break;
            }
        }

        for (let k = 1; k < coords.length; k++){
            for (let j = 0; j < coords.length; j++){
                if (coords[j][2] == k){
                    pole.lineTo(coords[j][0], coords[j][1]);
                    pole.stroke();
                    break;
                }
            } 
        }
        for (let i = 0; i < coords.length; i++){
            if (coords[i][2] == 0){
                pole.lineTo(coords[i][0], coords[i][1]);
                pole.stroke();
                break;
            }
        }
    }
}

function number(path, coords){
    for (let i = 0; i < path.length; i++){
        coords[path[i]][2] = i;
    }
}

///////////////////////////////////////////////////////////////

function Ants(graph, coords){
        let pheromone = [];
        for (let i = 0; i < graph.length; i++){
            pheromone[i] = [];
    
            for (let j = 0; j < graph.length; j++){
                pheromone[i][j] = 1;
            }
        }

        let alpha = 1, beta = 5, Q = 100;
        let path = Array(graph.length).fill(0);
        let pathLength = 1000000;

        for (let i = 0; i < 1000; i++){
    
            for (let j = 0; j < graph.length; j++){
                let visited = Array(graph.length).fill(0);
                let localpath = Array(graph.length).fill(0);
                visited[j] = 1;
                let k = 1;
                localpath[0] = j;

                for (let g = graph.length - 1; g > 0; g--){
                    let probability = Array(graph.length).fill(0);

                    for (let h = 0; h < graph.length; h++){

                        if (visited[h] == 0){
                            probability[h] = Math.pow(pheromone[j][h], alpha) * Math.pow((1/graph[j][h]), beta);
                        }
                    }

                    let summ = 0;
                    for (let t = 0; t < graph.length; t++){
                        summ += probability[t];
                    }

                    for (let t = 0; t < graph.length; t++){
                        probability[t] /= summ;
                    }

                    let index;
                        index = selectVertex(probability);
                    visited[index] = 1;

                    localpath[k] = index;
                    k++;

                }

                let plength = 0;
                plength = LengthPath(localpath, graph);
            

                if (plength < pathLength){
                    pathLength = plength;
                    path = localpath;
                }

                for(let v = 0; v < graph.length; v++){
                    for(let w = 0; w < graph.length; w++){
                        pheromone[v][w] *= 0.6;
                        if (pheromone[v][w] < 0.01){
                            pheromone[v][w] = 0.01;
                        }
                    }
                }

                for (let v = 0; v < graph.length - 1; v++){
                    pheromone[localpath[v]][localpath[v + 1]] += Q / plength;
                }

            }
        }

        number(path, coords);
        Path(coords);

}
