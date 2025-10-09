// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Optional: Add a subtle shadow to the sticky header on scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// Accordion functionality
        document.querySelectorAll('.accordion-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const accordionContent = button.nextElementSibling;

                // Toggle icon visibility
                const icon = button.querySelector('.accordion-icon');
                icon.querySelector('.icon-plus').classList.toggle('hidden');
                icon.querySelector('.icon-minus').classList.toggle('hidden');

                // Toggle content visibility
                if (accordionContent.style.maxHeight) {
                    accordionContent.style.maxHeight = null;
                } else {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                } 
            });
        });        