//zmienne i obiekty

let yourChoice = "";
let aIChoice = "";

let played = 0;
let wins = 0;
let losses = 0;
let draws = 0;



//wybor gracza
const paper = document.querySelector("img:nth-of-type(1)");
const stone = document.querySelector("img:nth-of-type(2)");
const scissors = document.querySelector("img:nth-of-type(3)");

paper.addEventListener("click", () => {
    yourChoice = paper.getAttribute("data-option");
    paper.classList.add("border");
    stone.classList.remove("border");
    scissors.classList.remove("border");

})
stone.addEventListener("click", () => {
    yourChoice = stone.getAttribute("data-option");
    paper.classList.remove("border");
    stone.classList.add("border");
    scissors.classList.remove("border");
})
scissors.addEventListener("click", () => {
    yourChoice = scissors.getAttribute("data-option");
    paper.classList.remove("border");
    stone.classList.remove("border");
    scissors.classList.add("border");
})

//wybor AI

const choices = ["paper", "stone", "scissors"];
let index = Math.floor(Math.random() * choices.length);
aIChoice = choices[index];

//gra 

const whoWon = () => {
    played++;


    if (yourChoice === aIChoice) {
        document.querySelector("span[data-summary='who-win']").textContent = "DRAW";
        draws++;
    } else if (yourChoice === "paper" && aIChoice === "stone") {
        document.querySelector("span[data-summary='who-win']").textContent = "YOU";
        document.querySelector("span[data-summary='who-win']").style.color = "green";
        wins++;
    } else if (yourChoice === "paper" && aIChoice === "scissors") {
        document.querySelector("span[data-summary='who-win']").textContent = "Computer";
        document.querySelector("span[data-summary='who-win']").style.color = "red";
        losses++;
    } else if (yourChoice === "stone" && aIChoice === "paper") {
        document.querySelector("span[data-summary='who-win']").textContent = "Computer";
        document.querySelector("span[data-summary='who-win']").style.color = "red";
        losses++;
    } else if (yourChoice === "stone" && aIChoice === "scissors") {
        document.querySelector("span[data-summary='who-win']").textContent = "YOU";
        document.querySelector("span[data-summary='who-win']").style.color = "green";
        wins++;
    } else if (yourChoice === "scissors" && aIChoice === "stone") {
        document.querySelector("span[data-summary='who-win']").textContent = "Computer";
        document.querySelector("span[data-summary='who-win']").style.color = "red";
        losses++;
    } else if (yourChoice === "scissors" && aIChoice === "paper") {
        document.querySelector("span[data-summary='who-win']").textContent = "YOU";
        document.querySelector("span[data-summary='who-win']").style.color = "green";
        wins++;
    }
}


const play = function () {
    if (!(paper.classList.contains("border") || stone.classList.contains("border") || scissors.classList.contains("border"))) {
        alert("Choose image!!!!");

    }
    document.querySelector("span[data-summary='your-choice']").textContent = yourChoice;
    document.querySelector("span[data-summary='ai-choice']").textContent = aIChoice;
    whoWon();
    //played games summary
    document.querySelector(".played  span").textContent = played;
    document.querySelector(".wins  span").textContent = wins;
    document.querySelector(".losses  span").textContent = losses;
    document.querySelector(".draws  span").textContent = draws;
}
const btnStart = document.querySelector(".start");
btnStart.addEventListener("click", play);
