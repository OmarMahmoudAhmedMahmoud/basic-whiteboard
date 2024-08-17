const board = {
    main : document.getElementById("board"),  
    size : "10",
    desidCheck : false,
    deletCheck : false,
    e : null,
    get color(){
        return document.getElementById("T-color").value;
    }

}

board.draw = function(e){
    if(!board.desidCheck) return;
    
    let mouseX = e.clientX ? e.clientX : e.touches[0].clientX,
        mouseY = e.clientY ? e.clientY : e.touches[0].clientY;

    board.ctx.lineWidth = board.size;
    board.ctx.lineCap = "round";
    board.ctx.strokeStyle = board.color;

    board.ctx.lineTo(mouseX, mouseY);
    board.ctx.stroke();
    board.ctx.beginPath();
    board.ctx.moveTo(mouseX, mouseY);
}

board.remove = function(e){
    if (!board.desidCheck) return;

    let mouseX = e.clientX ? e.clientX : e.touches[0].clientX,
    mouseY = e.clientY ? e.clientY : e.touches[0].clientY;
    board.ctx.clearRect(mouseX, mouseY, board.size, board.size);

}

board.desid = function (e) {
    if (this.deletCheck) {
        board.remove(e)
    }else{
        board.draw(e)
    }
}

board.graph = function() {
    this.canvas = document.getElementById("board");
    this.ctx = this.canvas.getContext("2d");
    // window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
        board.canvas.width = window.innerWidth;
        board.canvas.height = window.innerHeight;
    }   

    resizeCanvas()
}

board.print = function() {
    window.print()
}
board.events = function(){

    function desid() {
        board.main.addEventListener("mousedown",()=>{
            board.ctx.beginPath();
            board.desidCheck = true;
        })
        
        board.main.addEventListener("mousemove",(e)=>board.desid(e)
        )

        board.main.addEventListener("mouseup",()=>board.desidCheck = false
        )

        board.main.addEventListener("mouseleave",()=>board.desidCheck = false
        )
        
        // for touch
        board.main.addEventListener("touchstart",()=>{
            board.ctx.beginPath();
            board.desidCheck = true;
        })
        
        board.main.addEventListener("touchmove",(e)=>board.desid(e)
        )

        board.main.addEventListener("touchend",()=>board.desidCheck = false
        )

    }

    function delet() {

        document.getElementById("icon-rm").addEventListener("click",
            ()=>{
                board.deletCheck = true;
            }
        )
    }

    function clear() {

        document.getElementById("icon-cl").addEventListener("click",
            ()=>{
                board.ctx.clearRect(0, 0, board.canvas.width, board.canvas.height);
            }
        )
    }

    function color() {

        document.getElementById("T-color").addEventListener("change",
            ()=>{
                board.deletCheck = false;
            }
        )
    }

    function size() {

        document.getElementById("input-size").addEventListener("change",()=>{
            board.deletCheck = false;
            board.size = document.getElementById("input-size").value ;
            document.getElementById("aside-range").innerHTML = document.getElementById("input-size").value;
        })
        document.getElementById("input-size").addEventListener("input",()=>{
            document.getElementById("aside-range").innerHTML = document.getElementById("input-size").value;
        })
    
    }

    function print() {

        document.getElementById("icon-pr").addEventListener("click",()=>board.print())
        
    }

    desid()
    clear()
    delet()
    color()
    size()
    print() 
}





board.render = function(){
    this.events();
    this.graph()
}











document.body.onload = function(){
    document.body.style.display="block";
    board.render()
}



