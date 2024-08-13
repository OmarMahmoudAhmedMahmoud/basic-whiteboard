const board = {
    main : document.getElementById("board"),  
    size : "s2",
    desidCheck : false,
    // deletCheck : false,
    e : null,
    get color(){
        return document.getElementById("T-color").value;
    }

}

board.draw = function(e){
    if(!board.desidCheck) return;
    
    
    let mouseX = e.clientX,
        mouseY = e.clientY;
    console.log(board.size);
    
    let pixel = `
    <div class = "pixel ${board.size}" 
        style = "background-color:${board.color};
                top:${mouseY}px;left:${mouseX}px;">
    </div>
    `;
    board.main.innerHTML+=pixel;
}

board.remove = function(){
    
}






board.events = function(){

    function desid() {
        board.main.addEventListener("mousedown",()=>board.desidCheck = true
        )
        
        board.main.addEventListener("mousemove",(e)=>board.draw(e)
        )

        board.main.addEventListener("mouseup",()=>board.desidCheck = false
        )
    }

    // function delet() {

    //     document.getElementById("icon-rm").addEventListener("click",
    //         ()=>{
    //             board.delet = true;
    //         }
    //     )
    // }

    function color() {

        document.getElementById("T-color").addEventListener("change",
            ()=>{
                // board.delet = false;
            }
        )
    }

    function size() {
        document.getElementById("s1").addEventListener("click",()=>{
            // board.delet = false;
            board.size = "s1";
        })

        document.getElementById("s2").addEventListener("click",()=>{
            // board.delet = false;
            board.size = "s2";
        })

        document.getElementById("s3").addEventListener("click",()=>{
            // board.delet = false;
            board.size = "s3";
        })
    }

    desid()
    // delet()
    color()
    size()
}


board.render = function(){
    this.events();
}

document.body.onload = function(){
    document.body.style.display="block";
    board.render()
}



