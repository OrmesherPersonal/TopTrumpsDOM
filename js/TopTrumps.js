//cards class 
class Cards {
    constructor(name, image, wins, losses, kos, submissions, height) {
        this._name = name;
        this._image = image;
        this._wins = wins;
        this._losses = losses;
        this._kos = kos;
        this._submissions = submissions;
        this._height = height;
    }
    get name() {
        return this._name;
    }
    get image() {
        return this._image;
    }
    get wins() {
        return this._wins;
    }
    get losses() {
        return this._losses;
    }
    get kos() {
        return this._kos;
    }
    get submissions() {
        return this._submissions;
    }
    get height() {
        return this._height;
    }
}

// create constant variables to access html elements
const wonwins = document.getElementById("whowinshand");

const startGameBtn = document.getElementById("startgame_btn");
const continueBtn = document.getElementById("continuegame_btn");

const namePlayer1 = document.getElementById("name1");
const imagePlayer1 = document.getElementById("image1");
const winsPlayer1 = document.getElementById("wins1");
const lossesPlayer1 = document.getElementById("losses1");
const kosPlayer1 = document.getElementById("kos1");
const submissionsPlayer1 = document.getElementById("submissions1");
const heightPlayer1 = document.getElementById("height1");

const namePlayer2 = document.getElementById("name2");
const imagePlayer2 = document.getElementById("image2");
const winsPlayer2 = document.getElementById("wins2");
const lossesPlayer2 = document.getElementById("losses2");
const kosPlayer2 = document.getElementById("kos2");
const submissionsPlayer2 = document.getElementById("submissions2");
const heightPlayer2 = document.getElementById("height2");

const winsPlayer1Button = document.getElementById("submitbuttonwins1");
const lossesPlayer1Button = document.getElementById("submitbuttonlosses1");
const kosPlayer1Button = document.getElementById("submitbuttonkos1");
const submissionsPlayer1Button = document.getElementById("submitbuttonsubmissions1");
const heightPlayer1Button = document.getElementById("submitbuttonheight1");

const winsPlayer2Button = document.getElementById("submitbuttonwins2");
const lossesPlayer2Button = document.getElementById("submitbuttonlosses2");
const kosPlayer2Button = document.getElementById("submitbuttonkos2");
const submissionsPlayer2Button = document.getElementById("submitbuttonsubmissions2");
const heightPlayer2Button = document.getElementById("submitbuttonheight2");

const activePlayer1 = document.getElementById("player1");
const activePlayer2 = document.getElementById("player2");

// create arrays to store game information
let player1cards = [];
let player2cards = [];
let currentPlayer = 1;
let lastPlayer = 1;
let cards = [];
let cardsTheSame = [];
let card = [];
let player1Score;
let player2Score;

// initailise cards
let card1 = new Cards("Georges St. Pierre", "georgestpierre.png", 26, 2, 8, 6, 177);
cards.push(card1);
let card2 = new Cards("Micheal Bisping", "michealbisping.png", 30, 9, 17, 3, 187);
cards.push(card2);
let card3 = new Cards("Dan Henderson", "danhenderson.png", 32, 15, 17, 1, 185);
cards.push(card3);
let card4 = new Cards("Tony Ferguson", "tonyferguson.png", 25, 3, 12, 8, 182);
cards.push(card4);
let card5 = new Cards("Khabib Nurmagomedov", "khabibnurmagomedov.png", 28, 0, 8, 10, 177);
cards.push(card5);
let card6 = new Cards("Conor Mcgregor", "conormcgregor.png", 21, 4, 18, 1, 172);
cards.push(card6);
let card7 = new Cards("Nate Diaz", "natediaz.png", 20, 11, 5, 11, 182);
cards.push(card7);
let card8 = new Cards("Jon Jones", "jonjones.png", 25, 1, 10, 6, 193);
cards.push(card8);
let card9 = new Cards("Daniel Cormier", "danielcormier.png", 22, 2, 10, 5, 180);
cards.push(card9);
let card10 = new Cards("Stipe Miocic", "stipemiocic.png", 19, 2, 15, 0, 193);
cards.push(card10);
let card11 = new Cards("Francis Ngannou", "francisngannou.png", 14, 3, 10, 4, 193);
cards.push(card11);
let card12 = new Cards("Chuck Liddell", "chuckliddell.png", 21, 9, 13, 1, 187);
cards.push(card12);
let card13 = new Cards("Tito Ortiz", "titoortiz.png", 20, 12, 10, 4, 187);
cards.push(card13);
let card14 = new Cards("Anderson Silva", "andersonsilva.png", 34, 10, 23, 3, 187);
cards.push(card14);
let card15 = new Cards("Max Holloway", "maxholloway.png", 21, 4, 10, 2, 180);
cards.push(card15);
let card16 = new Cards("Jose Aldo", "josealdo.png", 28, 5, 17, 1, 170);
cards.push(card16);
let card17 = new Cards("Frankie Edgar", "frankieedgar.png", 23, 7, 7, 4, 167);
cards.push(card17);
let card18 = new Cards("B.J. Penn", "bjpenn.png", 16, 14, 7, 6, 175);
cards.push(card18);
let card19 = new Cards("Diego Sanchez", "diegosanchez.png", 29, 12, 10, 6, 177);
cards.push(card19);
let card20 = new Cards("Donald Cerrone", "donaldcerrone.png", 36, 13, 10, 17, 182);
cards.push(card20);
let card21 = new Cards("Leon Edwards", "leonedwards.png", 18, 3, 6, 3, 182);
cards.push(card21);
let card22 = new Cards("Robbie Lawler", "robbielawler.png", 28, 14, 20, 1, 180);
cards.push(card22);
let card23 = new Cards("Demian Maia", "demianmaia.png", 27, 9, 3, 13, 182);
cards.push(card23);
let card24 = new Cards("Jorge Masvidal", "jorgemasvidal.png", 34, 13, 15, 2, 180);
cards.push(card24);
let card25 = new Cards("Amanda Nunes", "amandanunes.png", 18, 4, 13, 3, 172);
cards.push(card25);
let card26 = new Cards("Ronda Rousey", "rondarousey.png", 12, 2, 2, 9, 167);
cards.push(card26);
let card27 = new Cards("Henry Cejudo", "henrycejudo.png", 15, 2, 7, 0, 162);
cards.push(card27);
let card28 = new Cards("Demetrious Johnson", "demetriousjohnson.png", 29, 3, 5, 12, 160);
cards.push(card28);
let card29 = new Cards("Israel Adesanya", "israeladesanya.png", 18, 0, 14, 0, 193);
cards.push(card29);
let card30 = new Cards("Quintin Jackson", "quintinjackson.png", 38, 13, 20, 4, 185);
cards.push(card30);

//play game when start game button pressed
const playGame = () => {
    shuffle(cards);
    dealCards(cards);
    activePlayer1.classList.toggle("activeplayer");
    Game();
}

// shuffle cards at beginning of game
const shuffle = (cards) => {
    cards.sort(() => Math.random() - 0.5);
}

// deal cards to 2 equal piles
const dealCards = (cards) => {

    let cardCounter = 0;

    for (i = 0; i < cards.length; i++) {
        if (cardCounter % 2 == 0) {
            player1cards.push(cards[i]);
            cardCounter++;
        }
        else {
            player2cards.push(cards[i]);
            cardCounter++;
        }
    }
};

// play game
const Game = () => {
    // alert(`Game Rules 
    // Pick a statistic all categories exept losses are highest wins for losses the lowest value wins, 
    // player 1 goes first then whoever wins the last hand gets to pick the next category
    // first player to win all cards is the winner
    // `)
    //   while (player1cards.length != 0 && player2cards.length != 0) {

    resetPlayerButtonBackgroundColor();
    wonwins.style.visibility = "hidden";

    continueBtn.style.display = "block";
    startGameBtn.style.display = "none";
    imagePlayer1.style.height = "25vh";
    imagePlayer2.style.height = "25vh";

    if (currentPlayer == 1) {
        if (lastPlayer != currentPlayer) {
            activePlayer1.classList.toggle("activeplayer");
            activePlayer2.classList.toggle("activeplayer");
        }

        //enable player 1 buttons 
        disablePlayer1Buttons(false);

        // show player 1 card details when player 1 in play
        revealPlayer1();

        // hide player 2 card details when player 1 in play
        hidePlayer2();

        winsPlayer1Button.onclick = () => selectionFunction(player1cards[0].wins, player2cards[0].wins, "wins", 1);
        lossesPlayer1Button.onclick = () => selectionFunction(player1cards[0].losses, player2cards[0].losses, "losses", 1);
        kosPlayer1Button.onclick = () => selectionFunction(player1cards[0].kos, player2cards[0].kos, "kos", 1);
        submissionsPlayer1Button.onclick = () => selectionFunction(player1cards[0].submissions, player2cards[0].submissions, "submissions", 1);
        heightPlayer1Button.onclick = () => selectionFunction(player1cards[0].height, player2cards[0].height, "height", 1);

        //disable player 2 buttons when player 1 in play
        disablePlayer2buttons(true);
    }
    else {

        if (lastPlayer != currentPlayer) {
            activePlayer1.classList.toggle("activeplayer");
            activePlayer2.classList.toggle("activeplayer");
        }

        //enable player 2 buttons 
        disablePlayer2buttons(false);

        // show player 2 card details when player 2 in play
        revealPlayer2();

        // hide player 1 card details when player 2 in play
        hidePlayer1();

        winsPlayer2Button.onclick = () => selectionFunction(player1cards[0].wins, player2cards[0].wins, "wins", 2);
        lossesPlayer2Button.onclick = () => selectionFunction(player1cards[0].losses, player2cards[0].losses, "losses", 2);
        kosPlayer2Button.onclick = () => selectionFunction(player1cards[0].kos, player2cards[0].kos, "kos", 2);
        submissionsPlayer2Button.onclick = () => selectionFunction(player1cards[0].submissions, player2cards[0].submissions, "submissions", 2);
        heightPlayer2Button.onclick = () => selectionFunction(player1cards[0].height, player2cards[0].height, "height", 2);

        // disable player 1 buttons when player 2 in play
        disablePlayer1Buttons(true);
    }
}

// function to show player 1 card details
const revealPlayer1 = () => {

    namePlayer1.textContent = player1cards[0].name;
    imagePlayer1.src = `../img/fighters/${player1cards[0].image}`;
    winsPlayer1.textContent = player1cards[0].wins;
    lossesPlayer1.textContent = player1cards[0].losses;
    kosPlayer1.textContent = player1cards[0].kos;
    submissionsPlayer1.textContent = player1cards[0].submissions;
    heightPlayer1.textContent = player1cards[0].height;
}

// function to show player 2 card details
const revealPlayer2 = () => {

    namePlayer2.textContent = player2cards[0].name;
    imagePlayer2.src = `../img/fighters/${player2cards[0].image}`;
    winsPlayer2.textContent = player2cards[0].wins;
    lossesPlayer2.textContent = player2cards[0].losses;
    kosPlayer2.textContent = player2cards[0].kos;
    submissionsPlayer2.textContent = player2cards[0].submissions;
    heightPlayer2.textContent = player2cards[0].height;
}

// function to hide player 1 card details
const hidePlayer1 = () => {
    namePlayer1.textContent = "Player1";
    imagePlayer1.src = `../img/questionmark.png`;
    winsPlayer1.textContent = "???";
    lossesPlayer1.textContent = "???";
    kosPlayer1.textContent = "???";
    submissionsPlayer1.textContent = "???";
    heightPlayer1.textContent = "???";
}

// function to hide player 2 card details
const hidePlayer2 = () => {
    namePlayer2.textContent = "Player2";
    imagePlayer2.src = `../img/questionmark.png`;
    winsPlayer2.textContent = "???";
    lossesPlayer2.textContent = "???";
    kosPlayer2.textContent = "???";
    submissionsPlayer2.textContent = "???";
    heightPlayer2.textContent = "???";
}

// function to disable player 1 buttons when player 2 in play
const disablePlayer1Buttons = (disable) => {
    winsPlayer1Button.disabled = disable;
    lossesPlayer1Button.disabled = disable;
    kosPlayer1Button.disabled = disable;
    submissionsPlayer1Button.disabled = disable;
    heightPlayer1Button.disabled = disable;
}

// function to disable player 2 buttons when player 1 in play
const disablePlayer2buttons = (disable) => {
    winsPlayer2Button.disabled = disable;
    lossesPlayer2Button.disabled = disable;
    kosPlayer2Button.disabled = disable;
    submissionsPlayer2Button.disabled = disable;
    heightPlayer2Button.disabled = disable;
}

// function to reveal winning player once a category in selected
const selectionFunction = (player1, player2, category, player) => {
    if (player == 1) {
        revealPlayer2();
    }
    else {
        revealPlayer1();
    }

    if (category == "losses") {
        if (player1 > player2) {
            lossesPlayer1Button.style.color = "red"
            alertCompareScores(2);
            player2Wins();
        }
        else {
            lossesPlayer2Button.style.color = "red"
            alertCompareScores(1);
            player1Wins();
        }
    }


    else if (player1 > player2) {
        switch (category) {
            case "wins": winsPlayer1Button.style.color = "red"
                break;
            case "kos": kosPlayer1Button.style.color = "red"
                break;
            case "submissions": submissionsPlayer1Button.style.color = "red"
                break;
            case "height": heightPlayer1Button.style.color = "red"
                break;
        }
        alertCompareScores(1);
        player1Wins();
    }
    else if (player1 < player2) {
        switch (category) {
            case "wins": winsPlayer2Button.style.color = "red"
                break;
            case "kos": kosPlayer2Button.style.color = "red"
                break;
            case "submissions": submissionsPlayer2Button.style.color = "red"
                break;
            case "height": heightPlayer2Button.style.color = "red"
                break;
        }
        alertCompareScores(2);
        player2Wins();
    }
    else {
        alertCompareScores(3);
        itsADraw();
    }
}

// function to display winning player
const alertCompareScores = (winner) => {
    wonwins.style.visibility = "visible";
    if (winner == "1") {
        wonwins.textContent = "Player 1 Wins press next card to continue";
    }
    else if (winner == "2") {
        wonwins.textContent = "Player 2 Wins press next card to continue";
    }
    else {
        wonwins.textContent = "It's a draw press next card to continue";
    }
}

// function to reset buttons when next players go
const resetPlayerButtonBackgroundColor = () => {
    winsPlayer1Button.style.color = "#38474b";
    winsPlayer2Button.style.color = "#38474b";
    lossesPlayer1Button.style.color = "#38474b";
    lossesPlayer2Button.style.color = "#38474b";
    kosPlayer1Button.style.color = "#38474b";
    kosPlayer2Button.style.color = "#38474b";
    submissionsPlayer1Button.style.color = "#38474b";
    submissionsPlayer2Button.style.color = "#38474b";
    heightPlayer1Button.style.color = "#38474b";
    heightPlayer2Button.style.color = "#38474b";
}

// continue with the game pnce button pressed
const continueGame = () => {
    disablePlayer1Buttons(true);
    disablePlayer2buttons(true);
    continueBtn.onclick = () => Game();
}

// if player one wins collect player 2's card check if any cards in draw pile if so collect cards and move own card to bottom of plie
const player1Wins = () => {
    if (cardsTheSame.length > 0) {
        checkIfAnyCardsInDrawPile(1);
    }
    card = player2cards.shift();
    player1cards.push(card);
    card = player1cards.shift();
    player1cards.push(card);
    lastPlayer = currentPlayer;
    currentPlayer = 1;
    if (player1cards.length != 0 && player2cards.length != 0) {
        continueGame();
    }
    else {
        endGame();
    }
}

// if player one wins collect player 1's card check if any cards in draw pile if so collect cards and move own card to bottom of plie
const player2Wins = () => {
    if (cardsTheSame.length > 0) {
        checkIfAnyCardsInDrawPile(2);
    }
    card = player1cards.shift();
    player2cards.push(card);
    card = player2cards.shift();
    player2cards.push(card);
    lastPlayer = currentPlayer;
    currentPlayer = 2;
    if (player1cards.length != 0 && player2cards.length != 0) {
        continueGame();

    }
    else {
        endGame();
    }
}

// if a draw put cards in array to be collected by the next winner
const itsADraw = () => {
    card = player1cards.shift();
    cardsTheSame.push(card);
    card = player2cards.shift();
    cardsTheSame.push(card);
    lastPlayer = currentPlayer;
    continueGame();
}

// check if any cards in draw pile
const checkIfAnyCardsInDrawPile = (player) => {
    let arraylength = cardsTheSame.length;
    for (let i = 0; i < arraylength; i++) {
        if (player == 1) {
            card = cardsTheSame.shift();
            player1cards.push(card);
        }
        else {
            card = cardsTheSame.shift();
            player2cards.push(card);
        }
    }
}

// end game
const endGame = () => {
    player1cards.length === 0 ? alert(`Player 2 is the winner`) : alert(`Player 1 is the winner`);
}

// start game when start game button pressed this is the entry to all javascript
startGameBtn.addEventListener("click", () => playGame());