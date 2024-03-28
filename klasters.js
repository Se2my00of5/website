var leftTopX = 40
const leftTopY = 85
const rightLowerX = 900
const rightLowerY = 760



games[1].onclick = ()=>{
    if(flag==0){
        flag=2
        canvas.style.opacity = "1";

        pole.font = "30px Trattatello, fantasy"
        pole.fillStyle = "#3F172C"

        pole.fillText("Кластеризация (обычка)", 20 , 35)


        const gradient = pole.createLinearGradient(leftTopX,leftTopY,rightLowerX,leftTopY);
        gradient.addColorStop(0, "#0A083A");
        gradient.addColorStop(0.08, "black");
        gradient.addColorStop(0.92, "black");
        gradient.addColorStop(1, "#0A083A");
        pole.fillStyle = gradient

        pole.fillRect(leftTopX,leftTopY,rightLowerX-leftTopX,rightLowerY-leftTopY);
    }
}

canvas.addEventListener("mouseup",function(event){

    if(flag==2){
        let x = event.offsetX;
        let y = event.offsetY;
        
        if(leftTopX<x && x<rightLowerX && leftTopY<y && y<rightLowerY){
            pole.beginPath()
            pole.fillStyle = "white"
            pole.arc(x,y,4,0,2*Math.PI)
            pole.fill();
        }

    }


})


/*canvas.onmouseup = (event)=>{
    if(flag==2){
        const x = event.offsetX;
        const y = event.offsetY;
        if(leftTopX<x && x<rightLowerX && leftTopY<y && y<rightLowerY){
            pole.fillStyle = "white"
            pole.moveTo(x,y)
            pole.arc(x,y,4,0,2*Math.PI)
            pole.fill();
        }

    }
    
}
*/