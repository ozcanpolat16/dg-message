const messageElement = document.getElementById('message');
const countdownElement = document.getElementById('countdown');
const musicContainer = document.getElementById('music-container');
let confettiShown = false;

function formatCountdown(days, hours, minutes, seconds) {
    return `
        <div class="countdown-item">
            <span class="countdown-value">${days}</span>
            <span class="countdown-label">Gün</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${hours}</span>
            <span class="countdown-label">Saat</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${minutes}</span>
            <span class="countdown-label">Dakika</span>
        </div>
        <div class="countdown-item">
            <span class="countdown-value">${seconds}</span>
            <span class="countdown-label">Saniye</span>
        </div>
    `;
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
        countdownElement.style.display = 'none';
        messageElement.innerHTML = birthdayMessage;
        musicContainer.style.display = 'block';
        
        if (!confettiShown) {
            startConfetti();
            confettiShown = true;
        }
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = formatCountdown(days, hours, minutes, seconds);
        messageElement.innerHTML = waitingMessage;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown(); 