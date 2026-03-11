(function(){
    'use strict'
    console.log('reading js');

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png',
            '4die.png', '5die.png', '6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 30
    };

    var loadingPage = document.querySelector(".loading-screen");
    var characterSelect = document.querySelector(".select-character");
    var gameScreen = document.querySelector(".game-screen");

    var p1Char = document.querySelector(".player1-char");
    var p2Char = document.querySelector(".player2-char");

    var playButton = document.querySelector(".play-btn");
    var startButton = document.querySelector(".start-game");
    var rollButton = document.querySelector(".roll");
    var passButton = document.querySelector(".pass");

    const dices = document.querySelector(".dices");
    const p1Score = document.querySelector(".p1-pts");
    const p2Score = document.querySelector(".p2-pts");

    rollButton.addEventListener("click", throwDice);
    passButton.addEventListener("click", passTurn);

    loadingPage.classList.remove("hidden");
    characterSelect.classList.add("hidden");
    gameScreen.classList.add("hidden");

    const rollSound = new Audio("audio/roll.mp3");
    const passSound = new Audio("audio/skip.mp3");
    const startSound = new Audio("audio/play.mp3");
    const snakeEyeSound = new Audio("audio/zero.mp3");
    const rollOneSound = new Audio("audio/oneroll.mp3");
    const winnerSound = new Audio("audio/winner.mp3");
    const clickSound = new Audio("audio/clicky.mp3");

    function showLoadingPage(){
        loadingPage.classList.remove("hidden");
        characterSelect.classList.add("hidden");
        gameScreen.classList.add("hidden");
    }

    function showCharacterSelect(){
        loadingPage.classList.add("hidden");
        characterSelect.classList.remove("hidden");
        gameScreen.classList.add("hidden");
    }

    function showGameScreen(){
        loadingPage.classList.add("hidden");
        characterSelect.classList.add("hidden");
        gameScreen.classList.remove("hidden");
    }

    playButton.addEventListener("click", function(){
        clickSound.currentTime = 0;
        clickSound.play();
        showCharacterSelect();
    });



    var player1Pic= document.querySelector(".player1-image");
    var player2Pic = document.querySelector(".player2-image");

    var player1Left = document.querySelector(".arrow-player1.left");
    var player1Right = document.querySelector(".arrow-player1.right");
    var player2Left = document.querySelector(".arrow-player2.left");
    var player2Right = document.querySelector(".arrow-player2.right");


    var player1img = [ "images/bear.png", "images/bunny.png", "images/fox.png"];
    var player2img = [ "images/bear.png", "images/bunny.png", "images/fox.png"];

    var player1Idx = 0;
    var player2Idx = 0;

    function changeP1Pic() {
        player1Pic.setAttribute("src", player1img[player1Idx]);
    }

    function changeP2Pic() {
        player2Pic.setAttribute("src", player2img[player2Idx]);
    }

    player1Left.addEventListener("click", function () {
        player1Idx--;

        if (player1Idx < 0) {
            player1Idx = player1img.length - 1;
        }

        changeP1Pic();
    });

    player1Right.addEventListener("click", function () {
        player1Idx++;

        if (player1Idx >= player1img.length) {
            player1Idx = 0;
        }

        changeP1Pic();
    });

    // player 2 arrows
    player2Left.addEventListener("click", function () {
        player2Idx--;

        if (player2Idx < 0) {
            player2Idx = player2img.length - 1;
        }

        changeP2Pic();
    });

    player2Right.addEventListener("click", function () {
        player2Idx++;

        if (player2Idx >= player2img.length) {
            player2Idx = 0;
        }

        changeP2Pic();
    });
    
    changeP1Pic();
    changeP2Pic();


    startButton.addEventListener("click", function(){

        startSound.currentTime = 0;
        startSound.play();

        p1Char.src = player1img[player1Idx];
        p2Char.src = player2img[player2Idx];

        gameData.index = Math.round(Math.random());

        showGameScreen();
        setUpTurn();
    });

    function setUpTurn() {
        if(gameData.score[0] >= gameData.gameEnd || gameData.score[1] >= gameData.gameEnd){
            return;
        }

        dices.innerHTML = `<p>${gameData.players[gameData.index]}'s turn</p>`;
    }

    function throwDice(){

        gameData.roll1 = Math.floor(Math.random()*6)+1;
        gameData.roll2 = Math.floor(Math.random()*6)+1;

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        dices.innerHTML = 
        // `<p>${gameData.players[gameData.index]}'s turn</p>
        `<div class="dice-row">
        <img src="images/${gameData.dice[gameData.roll1-1]}" alt="die1"> <img src="images/${gameData.dice[gameData.roll2-1]}" alt="die2">
        </div>`;

        if(gameData.roll1 === 1 && gameData.roll2 === 1){

            snakeEyeSound.currentTime = 0;
            snakeEyeSound.play();

            dices.innerHTML += `<p class="dice-msg"> Oh no! Snake Eyes! Back to 0...</p>`
            gameData.score[gameData.index] = 0;
            
            updateScore();

            if(checkWinner()){
                return;
            }

            switchPlayer();
            setTimeout(setUpTurn, 1800);
        }

        else if(gameData.roll1 === 1 || gameData.roll2 ===1){

            rollOneSound.currentTime = 0;
            rollOneSound.play();

            dices.innerHTML += `<p class="dice-msg">You rolled a 1! Switching turns...</p>`

            switchPlayer();
            setTimeout(setUpTurn, 1200);
        }

        else{
            gameData.score[gameData.index] += gameData.rollSum;
            updateScore();

            rollSound.currentTime = 0;
            rollSound.play();

            if(checkWinner()){
                return;
            }
        }
    }

    function passTurn(){
        passSound.currentTime = 0;
        passSound.play();

        switchPlayer();
        setUpTurn();
    }

    function switchPlayer(){
        gameData.index = gameData.index === 0 ? 1: 0;
    }

    function updateScore(){
        p1Score.innerHTML = `points: ${gameData.score[0]}`;
        p2Score.innerHTML = `points: ${gameData.score[1]}`;
    }

    function checkWinner(){
        if(gameData.score[gameData.index] >= gameData.gameEnd){

            winnerSound.currentTime = 0;
            winnerSound.play();

            dices.innerHTML = `<h2>${gameData.players[gameData.index]} wins! </h2>
            <button class="play-again">Play Again</button>`;

            rollButton.style.display = "none";
            passButton.style.display = "none";

            const playAgainBtn = document.querySelector(".play-again");
            playAgainBtn.addEventListener("click", resetGame);

            return true;
        }
        return false;
    }

    // passButton.addEventListener("click", function(){
    //     switchPlayer();
    //     setUpTurn();
    // });

    function resetGame(){

        winnerSound.pause();
        winnerSound.currentTime = 0;

        gameData.score = [0,0];

        gameData.roll1 = 0;
        gameData.roll2 = 0;
        gameData.rollSum = 0;

        rollButton.style.display = "block";
        passButton.style.display = "block";

        rollButton.disabled = false;
        passButton.disabled = false;

        updateScore();

        clickSound.currentTime = 0;
        clickSound.play();

        showLoadingPage();  
    }

})();