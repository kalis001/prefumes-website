const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});
const close_btn = document.getElementById('close')
close_btn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
function myFunction() {
    var x = document.getElementById("myEmail").pattern;
}