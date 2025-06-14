document.addEventListener('DOMContentLoaded', function () {
    const beep = new Audio('beep.mp3');
    const startBtn = document.querySelector('.btn-start');
    const session = document.querySelector('.minutes');
    let myInterval;
    let state = true;

    const appTimer = () => {
        const sessionAmount = Number.parseInt(session.textContent);

        if (state) {
            state = false;
            let totalSeconds = sessionAmount * 60;

            const updateSeconds = () => {
                const minuteDiv = document.querySelector('.minutes');
                const secondDiv = document.querySelector('.seconds');

                totalSeconds--;

                let minutesLeft = Math.floor(totalSeconds / 60);
                let secondsLeft = totalSeconds % 60;

                secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
                minuteDiv.textContent = `${minutesLeft}`;

                if (minutesLeft === 0 && secondsLeft === 0) {
                    beep.play();
                    clearInterval(myInterval);
                    state = true;
                }
            };

            updateSeconds(); // immediate update
            myInterval = setInterval(updateSeconds, 1000);
        } else {
            alert('Session has already started');
        }
    };

    startBtn.addEventListener('click', appTimer);
});