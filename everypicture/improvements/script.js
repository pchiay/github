(function(){
    "use strict";
    console.log("reading js");

     document.querySelector('.close1').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay1').className = 'hidden';
    });

     document.querySelector('.close2').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay2').className = 'hidden';
    });

     document.querySelector('.close3').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay3').className = 'hidden';
    });

     document.querySelector('.close4').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay4').className = 'hidden';
    });

      document.querySelector('.close5').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay5').className = 'hidden';
    });

     document.querySelector('keydown', function (event) {
        if(event.key === 'Ecscape'){
            document.querySelector('#overlay1').className = 'hidden';
            document.querySelector('#overlay2').className = 'hidden';
            document.querySelector('#overlay3').className = 'hidden';
            document.querySelector('#overlay4').className = 'hidden';
            document.querySelector('#overlay5').className = 'hidden';
        }
    });

    document.querySelector('.open1').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay1').className = 'showing';
    });

    document.querySelector('.open2').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay2').className = 'showing';
    });

    document.querySelector('.open3').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay3').className = 'showing';
    });

    document.querySelector('.open4').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay4').className = 'showing';
    });

    document.querySelector('.open5').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#overlay5').className = 'showing';
    });


})();