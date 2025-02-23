let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turnO=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked")
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWin=checkWin();
        if(count==9 && !isWin){
           drawGame();
        }
    })
})


const drawGame=()=>{
   msg.innerText="Your game was draw";
   msgContainer.classList.remove("hide")
   disableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const checkWin=()=>{
    
     for(let pattern of winPatterns){
     // console.log(pattern)
    //  console.log(pattern[0], pattern[1],pattern[2])
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]])
  //  console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText)
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){// i.e no positon should be empty then only it iwill check for winning
          if(pos1Val===pos2Val && pos2Val===pos3Val){
            //console.log("winner",pos1Val)
            showWinner(pos1Val);
            return true;
          }
    }

     }
}
const showWinner=(winner)=>{
  msg.innerText=`Congratulations , Winner is ${winner}`; 
   msgContainer.classList.remove("hide")
   disableBoxes();

}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);