const buyBtns = document.querySelectorAll('.js-buy-ticket')   
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
const linkClose = document.querySelector('.js-modal-link');

//ham hien thi
function showBuyTickets(){
    modal.classList.add('open')
}
//ham dong
function hideBuyTickets(){
    modal.classList.remove('open')
}
//lap qua tung the button va nghe hanh vi click
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}
//nghe hanh vi click vao butoon close
linkClose.addEventListener('click', hideBuyTickets)

modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
})