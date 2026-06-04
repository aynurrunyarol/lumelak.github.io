document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.desplegable');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.classList.add('open');
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.classList.remove('open');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const sentinel = document.querySelector('#nav-sentinel');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add('fixed');
                document.body.classList.add('fixed-nav');
            } else {
                nav.classList.remove('fixed');
                document.body.classList.remove('fixed-nav');
            }
        });
    });

    observer.observe(sentinel);
});

document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

});