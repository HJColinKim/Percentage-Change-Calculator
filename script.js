'use strict';

//Stock Percentage Increase Calculator
const initialValue = document.getElementById("initial-value");
const finalValue = document.getElementById("final-value");
const calculateButton = document.getElementById("calculate-btn");
const percentageChange = document.getElementById("percentage-increase");
const difference = document.getElementById("difference");

const entireCalculator = document.querySelector('.calculator');
const infoButton = document.getElementById(`info-btn`);
const closeModalBTN = document.querySelector('.close-modal');
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const background = document.querySelector(`body`);

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


calculateButton.addEventListener('click', function(){
    let calculatedAnswer = 100 * (Number(finalValue.value) - Number(initialValue.value))/Math.abs(Number(initialValue.value));
    // percentageChange.textContent = `${Math.round(calculatedAnswer)}%`;

    if (Number(initialValue.value)===0){
        percentageChange.textContent = `0%`;
    } else {
        percentageChange.textContent = `${Math.round(calculatedAnswer)}%  
        ${calculatedAnswer>0 ? '▲' : '▼'}`;
    }

    difference.textContent = `Difference ${Math.round(Number(finalValue.value) - Number(initialValue.value))}`;

    if (calculatedAnswer>0){
        entireCalculator.classList.add(`fade-in-colour-profit`);
        entireCalculator.classList.remove(`fade-in-colour-loss`);
        percentageChange
    } 

    if (calculatedAnswer<0){
        entireCalculator.classList.add(`fade-in-colour-loss`);
        entireCalculator.classList.remove('fade-in-colour-profit');
    }

    if (calculatedAnswer === 0 || Number(initialValue.value)===0){
        entireCalculator.classList.remove(`fade-in-colour-loss`);
        entireCalculator.classList.remove('fade-in-colour-profit');
    }
    
 
})

// Modal Configuration Section 

infoButton.addEventListener(`click`, function(){
    openModal();
}) 

closeModalBTN.addEventListener(`click`, function(){
    closeModal();
})

overlay.addEventListener(`click`,function(){
    closeModal();
})

document.addEventListener('keydown', function(keyPressed){
    if (keyPressed.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    };
})

// Dark Mode Button Configurations 
const darkModeBTN = document.getElementById(`dark-mode`);
let darkMode = false; 

darkModeBTN.addEventListener('click', function(){
    darkMode = !darkMode
    if (darkMode){
        darkModeBTN.textContent = "🌛";
        darkModeBTN.style.backgroundColor = 'Black';
        darkModeBTN.classList.add(`fade-in-colour-dark`);
        darkModeBTN.classList.remove('fade-in-colour-light');

        entireCalculator.classList.add(`fade-in-colour-dark`);
        entireCalculator.classList.remove('fade-in-colour-light'); //Fades Calculator into black 

        entireCalculator.classList.add('fade-light-text'); //Calculator text turns white 
        entireCalculator.classList.remove('fade-dark-text');

        background.classList.add('fade-dark-background');//Changes the background to dark 
        background.classList.remove('fade-light-background');

        modal.style.backgroundColor = 'Black';
        modal.style.color = 'White';

    } else {
        darkModeBTN.textContent = "🌞";
        darkModeBTN.style.backgroundColor = 'White';
        darkModeBTN.classList.remove(`fade-in-colour-dark`);
        darkModeBTN.classList.add('fade-in-colour-light');

        entireCalculator.classList.add('fade-in-colour-light');
        entireCalculator.classList.remove('fade-in-colour-dark');

        entireCalculator.classList.add('fade-dark-text');
        entireCalculator.classList.remove('fade-light-text');

        background.classList.remove('fade-dark-background');
        background.classList.add('fade-light-background');

        modal.style.backgroundColor = 'White';
        modal.style.color = 'Black';


    }
})