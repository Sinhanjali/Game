let userScore = 0;
let compScore = 0;
let msg = document.getElementById("msg");
let userScoreValue = document.getElementById("user_score");
let comprScoreValue = document.getElementById("computer_score");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const showWinner = (userWin, user_choice, compChoice)=>{
    let text;
    if(userWin)
    {
        userScore++;
        userScoreValue.innerHTML = userScore;
        text = "You Win Yours " + user_choice + " beats computers " +compChoice;
        msg.innerHTML = text;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comprScoreValue.innerHTML = compScore;
        text = "You Lost Computers " + compChoice + " beats yours " + user_choice;
        msg.innerHTML = text;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (user_choice) => {
    console.log("User choice ", user_choice);
    const compChoice = genCompChoice();
    console.log("compChoice", compChoice);

    if (user_choice === compChoice) {
        text = "Draw You both choose the same" ;
        msg.innerHTML = text;
        msg.style.backgroundColor = "grey";
    }
    else {
        let userWin = true;
        if(user_choice === "rock")
        {
            userWin = compChoice === "scissor" ?true:false;
        }
        else if(user_choice === "paper")
        {
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "paper" ?true:false;
        }
        showWinner(userWin, user_choice, compChoice);
    }
      
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const user_choice = choice.getAttribute("id");
        playGame(user_choice);
    });
});