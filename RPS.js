let buttons = document.querySelectorAll(".buttons");
let buttonL = document.getElementsByClassName("button-layout");
let scores = document.getElementById("score");
let trying = document.getElementById("tries");


let value;
let comp;
const score ={
    wins:0,
    lose:0,
    tied:0,
    Tries:0
}

for (let divs of buttons){
    let result;
    divs.addEventListener("click",() =>{
    value = String(divs.innerText);
    console.log(value);
    val = Math.random()
    if(0<val<=1/3){
        comp = "Rock";
        console.log("Rock");

    }
    else if(1/3<val<=2/3){
       comp = "Paper"; 
       console.log("Paper");

    }
    else{
        comp = "Scissors";
        console.log("Scissors");

    }
    
    if(value===comp){
        console.log("Tied");
        score.tied++;
        score.Tries++;
        result = "Tied";
    }
    else if(value==="Rock" & comp==="Paper" || value==="Paper" & comp==="Scissors" || value==="Scissors" & comp==="Rock"){
        score.Tries++;
        score.lose++;
        console.log("Lose");
        result = "Lost";
    }
    else{
        score.Tries++;
        score.wins++;
        console.log("Win");
        result = "Won";
    }
    
    scores.innerHTML = `<h2>SCORE</h2><p>${score.wins}</p><h2>COMP S</h2><p>${score.lose}</p>`;
    trying.innerHTML = `        <h2>TRIES</h2><p>${score.Tries}</p>`;
    alert(`The computer has picked ${comp} and you have picked ${value} so you have ${result}`);
    console.log(score);
    
    });
}

