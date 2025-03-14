// JavaScript for toggling sections visibility based on nav link clicks
document.addEventListener('DOMContentLoaded', () => {
    // Select all sections and nav links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Hide all sections except the first one (Home section) on load
    // sections.forEach((section, index) => {
    //     if (index !== 0) {
    //         section.style.display = 'none';
    //     }
    // });


    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Get the target section id from the link's href
            const targetId = link.getAttribute('href').substring(1); // Remove the "#" from href

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the targeted section
            const targetSection = document.getElementById(targetId);
            targetSection.style.display = 'block';

            // Optionally, scroll to the top of the page or section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
