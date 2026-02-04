(function () {
    "use strict";
    console.log("reading js");

    const form = document.querySelector('form');
    const madlib = document.querySelector('#story');

    // const initSection = document.querySelector('#madlib-questions');
    // const finSection = document.querySelector('#madlib-output');


    form.addEventListener('submit', function(event){
        event.preventDefault();

        const noun1 = document.querySelector('#noun1').value;
        const adjective1 = document.querySelector('#adjective1').value;
        const adjective2= document.querySelector('#adjective2').value;
        const verb1 = document.querySelector('#verb1').value;
        const verb2 = document.querySelector('#verb2').value;
        const verb3 = document.querySelector('#verb3').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value;

        let myText;

        if(noun1 == ''){
            myText = 'please provide a noun';
            document.querySelector('#noun1').focus();
        } else if(adjective1 == ''){
            myText = 'please provide an adjective';
            document.querySelector('#adjective1').focus();
        } else if(adjective2 == ''){
            myText = 'please provide another adjective';
            document.querySelector('#adjective2').focus();
        } else if (verb1 == ''){
            myText = 'please provide a verb';
            document.querySelector('#verb1').focus();
        } else if (verb2 == ''){
            myText = 'please provide a verb';
            document.querySelector('#verb2').focus();
        } else if (verb3 == ''){
            myText = 'please provide a verb';
            document.querySelector('#verb3').focus();
        } else if (noun2 == ''){
            myText = 'please provide a verb';
            document.querySelector('#noun2').focus();
        } else if (noun3 == ''){
            myText = 'please provide a verb';
            document.querySelector('#noun3').focus();
        } else{
            myText = `You’re always a <strong>${noun1}.</strong><br> Living in your own <strong>${adjective1}</strong> world. Do you wonder what the <strong>${adjective2}</strong> world is like? <br> If you <strong>${verb1}</strong> out what will it be like? Will they <strong> ${verb2}</strong> or <strong>${verb3}</strong> me? <br> No use being in my own mind. Curiosity peaks his delight. <br> So did he know we reached out for a <strong>${noun2}</strong>. <br> And so he left for all he knows on his own <strong>${noun3}</strong>`;  

            const textFields = document.querySelectorAll('input[type="text"]');

            // loop through all inputs to reset them to an empty string
            for(let i = 0; i < textFields.length; i++){
                textFields[i].value = '';
            }

        }

        document.querySelector('#madlib-output').scrollIntoView({behavior: 'smooth'});

        madlib.innerHTML= myText;

        // initSection.className = 'moveUp';
        // finSection.className = 'showing';

    });

})();