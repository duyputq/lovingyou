let slideButtons = document.querySelectorAll('.slide__button');
let slideLetters = document.querySelectorAll('.slide__letter');
let slideCloses = document.querySelectorAll('.slide__letter-close');
let slideBody = document.querySelector('.blackBG');

let slideButtonSpecial = document.querySelector('.slide__button-special');
let slideLetterSpecial = document.querySelector('.slide__letter-special');
let slideCloseSpecial = document.querySelector('.slide__letter-close-special');

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

if (booleanCheckday == true) {
    slideButtonSpecial.addEventListener('click', function(){
        slideLetterSpecial.classList.add('slide__active');
        slideBody.classList.add('open');
    });
    
    slideCloseSpecial.addEventListener('click', function(){
        slideLetterSpecial.classList.remove('slide__active');
        slideBody.classList.remove('open');
    })
} else {
    slideButtonSpecial.addEventListener('click', function(){
        alert('Mở Khóa vào ngày 27/6')
    });
}

