// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for project cards
const projectCards = document.querySelectorAll('.card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

document.querySelector('a[href^="mailto:"]').addEventListener('click', function(event) {
    if (!window.navigator.userAgent.includes('Email')) {
        alert("No email client is set up on this device.");
        event.preventDefault();  // Stops default behavior if no email client is found
    }
});
