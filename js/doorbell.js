const doorbellButton = document.getElementById('doorbell-button');
const hoverSound = document.getElementById('hover-sound');
const buttonSound = document.getElementById('button-sound');

doorbellButton.addEventListener('mouseover', () => {
    // Play hover sound when cursor hovers over the doorbell
    hoverSound.play();
});

doorbellButton.addEventListener('click', () => {
    // Play button sound when the doorbell button is clicked
    buttonSound.play();

    // Add a class to trigger the button press animation
    doorbellButton.classList.add('pressed');

    // Remove the class after a short delay to reset the animation
    setTimeout(() => {
        doorbellButton.classList.remove('pressed');
    }, 300);
});
