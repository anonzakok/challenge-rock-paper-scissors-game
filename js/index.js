const handOptions = {
    rock: "/assets/Rock.png",
    paper: "/assets/Paper.png",
    scissors: "/assets/Scissors.png",
};
let SCOREUSER = 0;
let SCORECP = 0;

const pickUserHand = (hand) => {
    const audioClickElem = document.querySelector(".click");
    audioClickElem.play();
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userPickImage").src = handOptions[hand];
    let cpHand = piackComputerHand();
    referee(hand, cpHand);
};

const piackComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
};

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
        setScoreComputer(SCORECP + 1);
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScoreUser(SCOREUSER + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
        setScoreComputer(SCORECP + 1);
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScoreUser(SCOREUSER + 1);
    }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
        setScoreComputer(SCORECP + 1);
    }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScoreUser(SCOREUSER + 1);
    }
};

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
    document.querySelector(".decisionMobile h1").innerText = decision;
    const audioWinElem = document.querySelector(".win");
    const audioLoseElem = document.querySelector(".lose");
    const audioMissElem = document.querySelector(".miss");
    if (decision == "YOU WIN!") {
        audioWinElem.play();
    } else if (decision == "YOU LOSE!") {
        audioLoseElem.play();
    } else if (decision == "It's a tie!") {
        audioMissElem.play();
    }
};

const setScoreUser = (score) => {
    SCOREUSER = score;
    document.querySelector(".score .user").innerText = score;
};
const setScoreComputer = (score) => {
    SCORECP = score;
    document.querySelector(".score .computer").innerText = score;
};
const playAgain = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
};