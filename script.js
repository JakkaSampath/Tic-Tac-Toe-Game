let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turnO=true;

const winpatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];



boxes.forEach((box) =>{
box.addEventListener("click",()=>{
    if(turnO=== true){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();

});
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};

const showWinner=(pos1)=>{
    msg.innerText=`Winner is ${pos1}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}; 
const checkwinner=()=>{
        for(let pattern of winpatterns){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                    showWinner(pos1);
                    return;
                }
            }
        }
        checkDraw();
};

const checkDraw = () => {
    let filled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            filled = false;
            break;
        }
    }
    if (filled) {
         msg.innerText = "It's a Draw!";
        msgcontainer.classList.remove("hide");
    }
};


const resetbox=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

newbtn.addEventListener("click", resetbox);
resetbtn.addEventListener("click", resetbox);