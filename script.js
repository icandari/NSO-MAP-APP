document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.step-logo');
    const steps = document.querySelectorAll('.step-info');

    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            const stepNumber = logo.getAttribute('data-step');
            const isActive = logo.classList.contains('active');

            if (isActive) {
                // If the logo is already active, remove the active class and reset the transform
                logo.classList.remove('active');
                logo.style.transform = 'none';
                document.getElementById('step' + stepNumber).classList.remove('active');
            } else {
                // Remove active class from all logos and hide all steps
                logos.forEach(img => {
                    img.classList.remove('active');
                    img.style.transform = 'none';
                });
                steps.forEach(step => step.classList.remove('active'));

                // Activate the clicked logo and show its step
                logo.classList.add('active');
                logo.style.transform = 'scale(1.7)'; // Add this line to scale the logo
                document.getElementById('step' + stepNumber).classList.add('active');
            }
        });
    });
});