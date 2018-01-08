'use strict';

const num1 = Math.floor(Math.random()*(9-6+1)+6);
const num2 = Math.floor(Math.random()*(14-11+1)+11) - num1;

document.addEventListener('DOMContentLoaded', ()=>{
    const arrow1 = document.getElementById("arrow1");
    const arrow1Line = document.getElementById("arrow1-line");
    const arrow2 = document.getElementById("arrow2");
    const arrow2Line = document.getElementById("arrow2-line");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const num1Nest = document.getElementById("input1nest");
    const num2Nest = document.getElementById("input2nest");
    const answer = document.getElementById("answer");
    const num1place = document.getElementById("num1place");
    const num2place = document.getElementById("num2place");

    num1Input.focus();
    num1place.innerHTML = num1.toString();
    num2place.innerHTML = num2.toString();

    arrow1Line.setAttribute('d','M0,110 C0,50 '+(num1*39)+',50 '+(num1*39)+',100');
    num1Nest.style.left = (num1*20+20)+'px';

    arrow2Line.setAttribute('d','M0,110 C0,70 '+(num2*39-8)+',70 '+(num2*39-8)+',100');
    arrow2.style.left = (num1*38+50)+'px';
    num2Nest.style.left = (num1*38+40)+(num2*38/2)+'px';



    num1Input.addEventListener("keyup", (event)=>{
        if (parseInt(event.key) === num1) {
            arrow2.style.opacity = '1';
            num2Nest.style.opacity = '1';
            num1Nest.innerHTML = event.key;
            num1place.style.backgroundColor = "#fff";
            num2Input.focus();
        } else {
            num1Input.style.color = '#f00';
            num1place.style.backgroundColor = "#ffaa40";
        }
    });
    num2Input.addEventListener("keyup", (event)=>{
        if (parseInt(event.key) === num2) {
            arrow2.style.opacity = '1';
            num2Nest.innerHTML = event.key;
            num2place.style.backgroundColor = "#fff";

            answer.innerHTML = '<input maxlength="2" id="answerInput">';

            const answerInput = document.getElementById("answerInput");
            answerInput.focus();
            answerInput.addEventListener("keyup", () => {
                parseInt(answerInput.value) === num1 + num2
                    ? answer.innerHTML = num1 + num2
                    : answerInput.value.length > 1 ? answerInput.style.color = '#f00' : null;
            });
        } else {
            num2Input.style.color = '#f00';
            num2place.style.backgroundColor = "#ffaa40"
        }
    });
});

