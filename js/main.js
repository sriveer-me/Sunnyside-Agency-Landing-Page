let hamburgerIcon = document.getElementById('nav-bar__hamburger-icon');
let navBar = document.getElementById('nav-bar');

hamburgerIcon.addEventListener('click',function(el){
    navBar.classList.toggle('show-menu');
});