(function(){
    'use strict'
    console.log('reading js');

    var loadingPage = document.querySelector(".loading-screen");
    var characterSelect = document.querySelector(".select-character");

    var playButton = document.querySelector(".play-button");

    loadingPage.classList.remove("hidden");
    characterSelect.classList.add("hidden");

    function showLoadingPage(){
        loadingPage.classList.remove("hidden");
        characterSelect.classList.add("hidden");
    }

    function showCharacterSelect(){
        loadingPage.classList.add("hidden");
        characterSelect.classList.remove("hidden");
    }

    playButton.addEventListener("click", function(){
        showCharacterSelect();
    });

})();