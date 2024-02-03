let user_score = 0;

let userScore = document.getElementById("user_score");

let computer_score = 0;

let compScore = document.getElementById("computer_score");

let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");

let playAgain = document.querySelector("#playAgain");

let userChoice = document.querySelectorAll(".choice");

let msg = document.getElementById("turn");

userChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
        if (choice.getAttribute("id") == "circle") {
            userChoice = "O";
        }
        else {
            userChoice = "X";
        }
    })
});

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turnU = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnU == true) {
            if (userChoice == "O") {
                box.innerHTML = "O";
                turnU = false;
                msg.innerHTML = "Computers Turn";  
            }
            else {
                box.innerHTML = "X";
                turnU = false;
                msg.innerHTML = "Computers Turn";   
            }
        }
        else {
            if (userChoice == "O") {
                box.innerHTML = "X";
                turnU = true;
                msg.innerHTML = "Your Turn";
            }
            else {
                box.innerHTML = "O";
                turnU = true;
                msg.innerHTML = "Your Turn";
            }
        }
        box.disabled = true;
        checkWinner();
    })
});
let pos0Value, pos1Value, pos2Value;
const checkWinner = () => {
    for (let pattern of winPattern) {
        pos0Value = boxes[pattern[0]].innerHTML;
        pos1Value = boxes[pattern[1]].innerHTML;
        pos2Value = boxes[pattern[2]].innerHTML;

        if (pos0Value != "" && pos1Value != "" && pos2Value != "") {
            if (pos0Value === pos1Value && pos1Value === pos2Value) {
                showWinner(pos0Value);
            }
        }
    }
};

const showWinner = (pos0Value) => {
    if (pos0Value == userChoice) {
        msg.innerHTML = "You Wins ";
        user_score++;
        userScore.innerHTML = user_score;
    }
    else {
        msg.innerHTML = "Computer Wins ";
        computer_score++;
        compScore.innerHTML = computer_score;
    }
    boxDisable();
};

const boxDisable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const boxEnable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML ="";
    }
};

reset.addEventListener('click', () =>{
    turnU = true;
    boxEnable();
    msg.innerHTML = "Play Your Move";
});

playAgain.addEventListener('click', () =>{
    turnU = true;
    boxEnable();
    msg.innerHTML = "Play Your Move";
    user_score = 0;
    userScore.innerHTML = "0";
    computer_score = 0;
    compScore.innerHTML = "0";
});