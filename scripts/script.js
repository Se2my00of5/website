

document.addEventListener("DOMContentLoaded", function() {
    
    var ant = this.querySelector("#ant");
    ant.addEventListener("click", function(){
        window.location = 'ant/ant.html';
    })

    var astar = this.querySelector("#astar");
    astar.addEventListener("click", function(){
        
        window.location = 'astar/astar.html';
    })

    var authors = this.querySelector("#authors");
    authors.addEventListener("click", function(){
        window.location = 'authors/authors.html';
    })

    var brain = this.querySelector("#brain");
    brain.addEventListener("click", function(){
        window.location = 'brain/brain.html';
    })

    var clustering = this.querySelector("#clustering");
    clustering.addEventListener("click", function(){
        window.location = 'clustering/clustering.html';
    })

    var genetics = this.querySelector("#genetics");
    genetics.addEventListener("click", function(){
        window.location = 'genetics/genetics.html';
    })

    var tree = this.querySelector("#tree");
    tree.addEventListener("click", function(){
        window.location = 'tree/tree.html';
    })
});