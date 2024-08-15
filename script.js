const board = {
    main : document.getElementById("board"),  
    size : "s2",
    desidCheck : false,
    deletCheck : false,
    e : null,
    get color(){
        return document.getElementById("T-color").value;
    }

}

board.draw = function(e,size){
    if(!board.desidCheck) return;
    
    let mouseX = e.clientX ? e.clientX : e.touches[0].clientX,
        mouseY = e.clientY ? e.clientY : e.touches[0].clientY;

    board.ctx.fillStyle = board.color;
    board.ctx.fillRect(mouseX, mouseY, size, size)
}

board.remove = function(e,size){
    if (!board.desidCheck) return;

    let mouseX = e.clientX ? e.clientX : e.touches[0].clientX,
    mouseY = e.clientY ? e.clientY : e.touches[0].clientY;
    board.ctx.clearRect(mouseX, mouseY, size, size);

}

board.desid = function (e) {
    let size ;
    switch (board.size) {
        case "s1":
            size = 20
            break;
        case "s2":
            size = 15
            break;
        case "s3":
            size = 10
            break;
    }
    
    if (this.deletCheck) {
        board.remove(e,size)
    }else{
        board.draw(e,size)
    }
}

board.graph = function() {
    this.canvas = document.getElementById("board");
    this.ctx = this.canvas.getContext("2d");
    window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {

        board.canvas.width = window.innerWidth;
        board.canvas.height = window.innerHeight;
    }   
    resizeCanvas()
}

board.events = function(){

    function desid() {
        board.main.addEventListener("mousedown",()=>board.desidCheck = true
        )
        
        board.main.addEventListener("mousemove",(e)=>board.desid(e)
        )

        board.main.addEventListener("mouseup",()=>board.desidCheck = false
        )

        board.main.addEventListener("mouseleave",()=>board.desidCheck = false
        )
        
        // for touch
        board.main.addEventListener("touchstart",()=>board.desidCheck = true
        )
        
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
        document.getElementById("s1").addEventListener("click",()=>{
            board.deletCheck = false;
            board.size = "s1";
        })

        document.getElementById("s2").addEventListener("click",()=>{
            board.deletCheck = false;
            board.size = "s2";
        })

        document.getElementById("s3").addEventListener("click",()=>{
            board.deletCheck = false;
            board.size = "s3";
        })
    }

    desid()
    clear()
    delet()
    color()
    size()
}





board.render = function(){
    this.events();
    this.graph()
}











document.body.onload = function(){
    document.body.style.display="block";
    board.render()
}



