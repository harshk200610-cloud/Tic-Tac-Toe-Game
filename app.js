let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let messagecont = document.querySelector(".msg");
let msg = document.querySelector("#message");
 
let turn0 = true;

const winningpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if(turn0){
        box.innerText = "O";
        turn0 = false;
    }else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    checkWin();
    });
});
const checkWin = () => {
    for(let pattern of winningpatterns) {
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
      
       if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner", pos1val);
                showwinner(pos1val);
            }
       } 
    }
};
const showwinner = (winner) =>{
    msg.innerText = `Congratulations,  Winner is ${winner}`;
    messagecont.classList.remove("hide");
    disable();
}
const resetgame = () =>{
    turn0 = true;
    enable();
    messagecont.classList.add("hide");

};
const disable = () => {
    for(let box of boxes){
        box.disabled = true;
    }

}
const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame)
