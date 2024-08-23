document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.step-logo');
    const steps = document.querySelectorAll('.step-info');

    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            const stepNumber = logo.getAttribute('data-step');
            const isActive = logo.classList.contains('active');

            // Remove active class from all logos and hide all steps
            logos.forEach(img => img.classList.remove('active'));
            steps.forEach(step => step.classList.remove('active'));
            
            // If the clicked logo was not active, activate it and show its step
            if (!isActive) {
                logo.classList.add('active');
                document.getElementById('step' + stepNumber).classList.add('active');
            }
        });
    });
});
