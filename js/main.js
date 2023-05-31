let slideButtons = document.querySelectorAll('.slide__button');
let slideLetters = document.querySelectorAll('.slide__letter');
let slideCloses = document.querySelectorAll('.slide__letter-close');
let slideBody = document.querySelector('.blackBG');


slideButtons.forEach(function(slideButton,index){

    let slideLetter = slideLetters[index]
    let slideClose = slideCloses[index]
    

    slideButton.addEventListener('click', function(){
        slideLetter.classList.add('slide__active');
        console.log(slideButton);
        slideBody.classList.add('open');
    });
    
    slideClose.addEventListener('click', function(){
        slideLetter.classList.remove('slide__active');
        slideBody.classList.remove('open');
    })
    
})