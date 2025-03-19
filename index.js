const endDate = new Date("19 March, 2025 18:40:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis = (60 * 60 * 1000);
    const oneMinInMillis = (60 * 1000);
    const oneSecInMillis = (1000);

    const days = Math.floor(distancePending / oneDayInMillis);
    const hours = Math.floor((distancePending % oneDayInMillis) / oneHourInMillis);
    const mins = Math.floor((distancePending % oneHourInMillis) / oneMinInMillis);
    const secs = Math.floor((distancePending % oneMinInMillis) / oneSecInMillis);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totalDistance = endDate - startDate;
    const perDistance = (distanceCovered / totalDistance) * 100;

    // Access the first progress-bar element correctly and update its width
    const progressBar = document.getElementsByClassName("progress-bar")[0];
    if (progressBar) {
        progressBar.style.width = perDistance + "%";
    }

    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";

        // Ensure progress-bar exists before setting its width to 100%
        if (progressBar) {
            progressBar.style.width = "100%";
        }
    }
}, 1000);
