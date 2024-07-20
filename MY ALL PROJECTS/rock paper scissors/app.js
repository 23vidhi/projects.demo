let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};


const showinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const GenCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * choices.length);
    return options[randIdx];
};

const playGame = (userchoice) => {



    const compchoice = GenCompChoice();

    if (userchoice === compchoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissors, paper
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock, scissors
            userWin = compchoice === "scissors" ? false : true;
        } else (userchoice === "scissors");
        {
            //rock, paper
            userWin = compchoice === "rock" ? false : true;
        }
        showinner(userWin, userchoice, compchoice);
    }



};




choices.forEach(choice => {
    choice.addEventListener("click", () => {

        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});





