"use strick"

const qrInput = document.getElementById('qr-input');
// const darkMode = document.getElementById('dark-mode-con');
// const brightMode = document.getElementById('bright-mode');
const qrImg = document.querySelector('.qr-img');
const geneBtn = document.querySelector('.gene-btn');
const qrImgCon = document.querySelector('.qr-img-con');
const slider = document.querySelector('.slider');
const slide = document.querySelector('.slide');
const container = document.querySelector('.container');
const qrOperation = document.querySelector('.qr-operation');

slider.classList.add('s-a');
slide.classList.add('sl-a');

function generate_qr_code() {
    if (qrInput.value) {
        qrImgCon.classList.add('qr-img-add'); 
        qrInput.style = 'border: 1px solid rgba(0, 0, 0, 0.616)';
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrInput.value;
    }
    else {
        qrInput.style = 'border: 1px solid red';
    }
}

geneBtn.addEventListener('click' , generate_qr_code);

window.addEventListener('keydown' , (e) => {
    if (e.keyCode == 13) {
        generate_qr_code();
    }
});


slider.addEventListener('click' , (e) => {
    e.preventDefault();
    slider.classList.toggle('s-a');
    slide.classList.toggle('sl-a');
    slide.classList.toggle('slide-change');
    container.classList.toggle('body'); 
    qrOperation.classList.toggle('qroperate'); 
});