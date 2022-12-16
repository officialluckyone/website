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