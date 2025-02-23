let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score")

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")

const  genCompChoice=()=>{
   let options=["rock","paper","scissors"];
    const randomIndex= Math.floor(Math.random()*3);
   // multply with 3 so that we can get random num between 0 to 2 array length and using floor()
   return options[randomIndex];
}

const drawGame=()=>{
    msg.innerText="Game was draw, Play Agian.."
      msg.style.backgroundColor="#081b31"
    console.log("draw")
}

const showWinner=(userWin,userChoice,compChoice)=>{
 if(userWin){
    msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor="green"
    userScore++;
    userScorePara.innerText=userScore;
 }else{
    msg.innerText=`You Lost.. ${compChoice} beats your ${userChoice}`
      msg.style.backgroundColor="red"
    compScore++;
    compScorePara.innerText=compScore;
 }
}

const playGame=(userChoice)=>{
    console.log(userChoice)
    console.log("-----");
    const compChoice=genCompChoice();
    console.log(compChoice)
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
    
    showWinner(userWin,userChoice,compChoice)
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
})