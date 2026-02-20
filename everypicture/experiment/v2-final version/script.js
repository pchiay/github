(function(){
    "use strict";
    console.log("reading js");
    
    const chain = document.querySelector('#chain');
    const sign = document.querySelector('#sign');
    const cats = document.querySelector('#cats');
    const cups = document.querySelector('#cups');

    const keychain = document.querySelector('#keychain');
    keychain.style.display = 'none';

    const signs = document.querySelector('#signs');
    signs.style.display = 'none';

    const cards = document.querySelector('#cards');
    cards.style.display = 'none';

    const redcups = document.querySelector('#redcups');
    redcups.style.display = 'none';


    chain.addEventListener('click', function(){
        console.log('mouse is over area 1');
        keychain.style.display = 'block';

    });

    sign.addEventListener('click', function(){
        console.log('mouse is over area 2');
        signs.style.display = 'block';
    });

    cats.addEventListener('click', function(){
        console.log('mouse is over area 3');
        cards.style.display = 'block';
    });

    cups.addEventListener('click', function(){
        console.log('mouse is over area 4');
        redcups.style.display = 'block';
    });
})();