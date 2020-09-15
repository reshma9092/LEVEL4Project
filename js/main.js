let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// To check if the buttons are working
// rock_div.addEventListener('click',function(){
//     console.log("You clicked on Rock");
// })
// paper_div.addEventListener('click',function(){
//     console.log("You clicked on Paper");
// })
// scissors_div.addEventListener('click',function(){
//     console.log("You clicked on Scissors");
// })


function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r"){
        return "Rock";
    }
    if (letter === "p"){
        return "Paper";
    }
    else
        return "Scissors";
}

function win(userChoice, computerChoice) {
    // console.log("Win");
    userScore++;
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // console.log(userChoice);
    // console.log(computerChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. YOU WIN !`;
}

function lose(userChoice, computerChoice) {
    // console.log("Lose");
    computerScore++;
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // console.log(userChoice);
    // console.log(computerChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. YOU LOSE !`;
}

function draw(userChoice, computerChoice) {
    // console.log("Draw");
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // console.log(userChoice);
    // console.log(computerChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals  ${convertToWord(computerChoice)}. IT'S A DRAW !`;
}

function game(userChoice) {
    //console.log("aaa"+userChoice);  
    
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        // To check if the logic of winning is correct
        // case "rs":
        // case "pr":
        // case "sp":  
        //     console.log("User Wins");
        //     break;
        // case "rp":
        // case "ps":
        // case "sr":
        //     console.log("User Loses");
        //     break;
        // case "rr":
        // case "pp":
        // case "ss":
        //     console.log("Its a draw");
        //     break;      
        case "rs":
        case "pr":
        case "sp":  
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;    
    }
}


function main() {
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}

main();


