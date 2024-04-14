const navbar = document.querySelector('.navbar');
const loading = document.querySelector('.loading');
const headerContentSpan = document.querySelector('.header-content span');
const scrollToTop = document.querySelector('.scroll-to-top');
const about=document.querySelector('.about');
const navLinks=document.querySelectorAll('.nav-link')
window.addEventListener('scroll', function () {
    if (window.scrollY >= headerContentSpan.offsetTop) {
        navbar.style.backgroundColor = "#fff";
    }
    else {
        navbar.style.backgroundColor = "transparent";
    }
    if (window.scrollY >= about.offsetTop) {
        scrollToTop.classList.remove('opacity-0','invisible');
    }
    else {
        scrollToTop.classList.add('opacity-0','invisible');
    }   
})

window.addEventListener('load', function () {
    setTimeout(function () {
        loading.classList.add('opacity-0', 'invisible');
        document.body.style.overflow = 'auto';
    }, 2000)
})

scrollToTop.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

for(let i=0;i<navLinks.length;i++){
navLinks[i].addEventListener('click',function(e){
e.preventDefault();
navLinks.forEach((item)=>{
    item.classList.remove('active');
})
navLinks[i].classList.add('active');
let currentId=this.getAttribute("href");
let targetSection=document.querySelector(currentId);
window.scroll({
    top: targetSection.offsetTop,
    behavior: 'smooth'
})
})
}

