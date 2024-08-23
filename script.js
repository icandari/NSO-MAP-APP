const pinsContainer = document.getElementById('pins-container');
const infoBox = document.getElementById('location-info');
let activePin = null;
let isAnimating = false;

// Define the pins with step number, location, and explanation
const pinsData = [
    { id: 1, top: '20%', left: '30%', step: 'Step 1', location: 'Welcome Center', explanation: 'Start here for your tour!', image: 'images/pin1.png' },
    { id: 2, top: '40%', left: '60%', step: 'Step 2', location: 'Library', explanation: 'Find all your study materials.', image: 'images/pin2.png' },
    { id: 3, top: '60%', left: '50%', step: 'Step 3', location: 'Cafeteria', explanation: 'Grab a bite here!', image: 'images/pin3.png' }
];

const pins = document.querySelectorAll('.pin');

pins.forEach((pinElement, index) => {
    const pinData = pinsData[index];
    pinElement.style.backgroundImage = `url('${pinData.image}')`;

    pinElement.addEventListener('click', () => {
        if (activePin === pinElement || isAnimating) {
            // Ignore click if already animating or clicking the same pin
            return;
        }

        // Start animation if there is an active pin
        if (activePin) {
            infoBox.classList.add('leave');
            isAnimating = true;

            // Wait for the leave animation to finish before updating content
            setTimeout(() => {
                // Remove active class from previously active pin
                activePin.classList.remove('active');
                infoBox.classList.remove('leave');
                infoBox.classList.add('enter');

                // Get the current pin data
                const pinInfo = pinsData[index];
                const header = `<h2>${pinInfo.step}: ${pinInfo.location}</h2>`;
                const paragraph = `<p>${pinInfo.explanation}</p>`;

                // Set the info box with the current pin's information
                infoBox.innerHTML = header + paragraph;

                // Add active class to the clicked pin
                pinElement.classList.add('active');
                activePin = pinElement;

                // Reset the animation state
                setTimeout(() => {
                    infoBox.classList.remove('enter');
                    isAnimating = false;
                }, 500); // Match this with the duration of your animation
            }, 500); // Match this with the duration of the slide-out animation
        } else {
            // No active pin, just show new info
            const pinInfo = pinsData[index];
            const header = `<h2>${pinInfo.step}: ${pinInfo.location}</h2>`;
            const paragraph = `<p>${pinInfo.explanation}</p>`;

            // Set the info box with the current pin's information
            infoBox.innerHTML = header + paragraph;

            // Show the info box with animation
            infoBox.classList.add('enter');
            pinElement.classList.add('active');
            activePin = pinElement;
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('pin')) {
        // Clicked outside any pin: hide info and remove active class
        if (activePin) {
            activePin.classList.remove('active');
            activePin = null;
        }
        if (!isAnimating) {
            infoBox.classList.remove('enter');
            infoBox.classList.add('leave');
            setTimeout(() => {
                infoBox.classList.remove('leave');
                infoBox.innerHTML = 'Select a pin to see the details here.';
            }, 500); // Match this with the duration of the slide-out animation
        }
    }
});
