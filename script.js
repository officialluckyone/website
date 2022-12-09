const menuToggle = document.querySelector('.toggle-menu input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

var counter = 2;
setInterval (function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if (counter > 6){
        counter = 1;
    }
},5000);