let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('fa-xmark');
   navbar.classList.toggle('active');
 }

 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('header nav a');
// //--------nav anchortag colors----//
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        //for(declartion,condition,increation)

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
               links.classList.remove('active');
                document.querySelector('header nav a[href *=' + id + ']').classList.add('active');
            });
        };//---for--
    });
// Sticky Navbar//
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// Remove Toggle//
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
}

// Scroll Reveal //
ScrollReveal({
    distance: '80px', duration:2000, delay: 200,
});

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, skills-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});