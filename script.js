
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".newgame")
let resetBtn = document.querySelector(".reset")


let turn0 = true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0 == true){
            box.innerText = "O"
            box.style.color = "white";
            turn0 = false;
        }else{
            box.innerText = "X"
            box.style.color = "black";

            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

let checkWinner = ()=>{
    for (pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText
        if(pos1 != "" &&pos2 != "" &&pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
        }
    }
}
 let disableBoxes =()=>{
    for(box of boxes){
        box.disabled = true;
    }
 }
 let enableBoxes =()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }

let showWinner = (pos1)=>{
msgContainer.classList.remove("hide");
msg.innerText = `Congratulations Winner is ${pos1}`
disableBoxes();
}



let resetGame =()=>{
    msgContainer.classList.add("hide");
    enableBoxes();
    turn0 =true;

}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);