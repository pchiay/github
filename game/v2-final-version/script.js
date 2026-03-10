(function(){
    'use strict'
    console.log('reading js');

    var loadingPage = document.querySelector(".loading-screen");
    var characterSelect = document.querySelector(".select-character");
    var gameScreen = document.querySelector(".game-screen");

    var p1Char = document.querySelector(".player1-char");
    var p2Char = document.querySelector(".player2-char");

    var playButton = document.querySelector(".play-btn");
    var startButton = document.querySelector(".start-game");

    loadingPage.classList.remove("hidden");
    characterSelect.classList.add("hidden");
    gameScreen.classList.add("hidden");

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
        p1Char.src = player1img[player1Idx];
        p2Char.src = player2img[player2Idx];

        showGameScreen();
    });



})();