const style = document.createElement('style');
style.textContent = `
    body.menu-open {
        overflow: hidden;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.toggle('show');
        document.body.classList.toggle('menu-open');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            document.body.classList.remove('menu-open');
        }
    });

    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show the confirmation popup
            
            const popup = document.getElementById('confirmation-popup');
            popup.style.display = 'flex';
        });
    }

    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            
            alert('Thank you for your inquiry. We will get back to you soon!');
        });
    }

    const closePopup = document.getElementById('close-popup');
    if (closePopup) {
        closePopup.addEventListener('click', function() {
            const popup = document.getElementById('confirmation-popup');
            popup.style.display = 'none';
        });
    }
});