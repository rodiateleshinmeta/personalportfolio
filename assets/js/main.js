// Menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    console.log(toggle);
    console.log(nav);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show'); //javascript css to display nav menu
        });
    }
};
showMenu('nav-toggle','nav-menu');

// Active and Remove Menu Mobile View
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementryById('nav-menu')
    navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click',linkAction ));

// Scroll Reveal Animation
const sr= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

// Scroll Home
sr.reveal('.home_title',{});
sr.reveal('.button', {delay: 200}); 
sr.reveal('.home_img',{delay: 400});
sr.reveal('.home_social-icon',{interval: 300});

// Scroll About
sr.reveal('.about_img',{});
sr.reveal('.about_subtitle', {delay: 200}); 
sr.reveal('.about_text',{delay: 400});

// Scroll skills
sr.reveal('.skills_subtitle',{});
sr.reveal('.skills_text', {delay: 200}); 
sr.reveal('.skills_data',{delay: 400});
sr.reveal('.skills_img',{delay: 300});

// Scroll work
sr.reveal('.work_img',{interval: 200});

// Scroll contact
sr.reveal('.contact_input',{interval: 300});