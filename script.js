

const nav_toggler = document.querySelector(".nav-toggle-section");
const nav_sec = document.querySelector(".nav-sec");
const nav_items = document.querySelector("nav-items");

// nav toggler
nav_toggler.addEventListener('click', () => {
    nav_toggler.classList.toggle("active");
    nav_sec.classList.toggle("open");
})

// nav select
document.addEventListener('click', (e) => {
    if(e.target.closest(".nav-items")){
        nav_toggler.classList.toggle("active");
        nav_sec.classList.toggle("open");
    }
})

// nav sticky
window.addEventListener('scroll', () => {
    const nav = document.querySelector("nav")
    if(pageYOffset > 100){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
})
    