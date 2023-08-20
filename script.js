const menuToggle = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function(){
    nav.classList.toggle('navSlide');
});

var counter = 2;
setInterval (function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if (counter > 6){
        counter = 1;
    }
},5000);


window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        } else{
            reveals[i].classList.remove('active');
        }
    }

}

// const expcontainer = document.querySelector('#pastexperience');
// const expcards = document.querySelector('.experiencecards');

// // Keep Track for Mouse Down
// let isPressedDown = false;

// // Cursor X Space
// let cursorXSpace;

// expcontainer.addEventListener("mousedown",(e)=>{
//     isPressedDown = true;
//     cursorXSpace = e.offsetX - expcards.offsetLeft;
// });

// window.addEventListener("mouseup",(e)=>{
//     isPressedDown = false;
// });

// expcontainer.addEventListener("mousemove",(e)=>{
//     if (!isPressedDown) return;
//     e.preventDefault();
//     expcards.style.left = `${e.offsetX - cursorXSpace}px`;
//     boundCards();
// });


// expcontainer.addEventListener("touchdown",(e)=>{
//     isPressedDown = true;
//     cursorXSpace = e.clientX - expcards.offsetLeft;
// });

// window.addEventListener("touchup",(e)=>{
//     isPressedDown = false;
// });

// expcontainer.addEventListener("touchmove",(e)=>{
//     if (!isPressedDown) return;
//     e.preventDefault();
//     expcards.style.left = `${e.clientX - cursorXSpace}px`;
//     boundCards();
// });

const expcontainer = document.querySelector('#pastexperience');
const expcards = document.querySelector('.experiencecards');

// Keep Track for Mouse Down or Touch Start
let isPressedDown = false;
let cursorXSpace;

// Function to handle both mouse and touch events
function startDragging(e) {
    isPressedDown = true;

    if (e.type === 'mousedown') {
        cursorXSpace = e.offsetX - expcards.offsetLeft;
    } else if (e.type === 'touchstart') {
        cursorXSpace = e.touches[0].clientX - expcards.getBoundingClientRect().left;
    }
}

function stopDragging() {
    isPressedDown = false;
}

function handleDragging(e) {
    if (!isPressedDown) return;
    e.preventDefault();

    let clientX;
    if (e.type === 'mousemove') {
        clientX = e.clientX;
    } else if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
    }

    expcards.style.left = `${clientX - cursorXSpace}px`;
    boundCards();
}

expcontainer.addEventListener("mousedown", startDragging);
expcontainer.addEventListener("touchstart", startDragging);

window.addEventListener("mouseup", stopDragging);
window.addEventListener("touchend", stopDragging);

expcontainer.addEventListener("mousemove", handleDragging);
expcontainer.addEventListener("touchmove", handleDragging);

function boundCards() {
    const container_rect = expcontainer.getBoundingClientRect();
    const cards_rect = expcards.getBoundingClientRect();

    if (parseInt(expcards.style.left) > 0) {
        expcards.style.left = 0;
    } else if (cards_rect.right < container_rect.right) {
        expcards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
}




function boundCards(){
    const container_rect = expcontainer.getBoundingClientRect();
    const cards_rect = expcards.getBoundingClientRect();

    if (parseInt(expcards.style.left) > 0){
        expcards.style.left = 0;
    } else if (cards_rect.right < container_rect.right){
        expcards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
};

// Mobile Drag & Drop Code
// Position Variable
let posX1;
let posX2;
let initialPosition;
let finalPosition;

expcontainer.addEventListener("touchstart",dragStart);
expcontainer.addEventListener("touchmove",dragMove);
expcontainer.addEventListener("touchend",dragEnd);

function dragStart(e){
    e.preventDefault();
    initialPosition = expcards.offsetLeft;
    if (e.type == 'touchstart'){
        posX1 = e.touches[0].clientX;
    } else {
        posX1 = e.clientX;
        document.onmouseup = dragEnd;
        document.onmousemove = dragMove;
    };
};

function dragMove(e){
    if (e.type == 'touchmove'){
        posX2 = posX1 - e.touches[0].clientX;
        posX1 = e.touches[0].clientX;
    } else {
        posX2 = posX1 - e.clientX;
        posX1 = e.clientX;
    };
    expcards.style.left = `${expcards.offsetLeft - posX2}px`;
};

function dragEnd(e){
    finalPosition = expcards.offsetLeft;
    
    // Clean up the event handlers
    document.onmouseup = null;
    document.onmousemove = null;
};