const header = document.getElementById('header');
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
});


const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});