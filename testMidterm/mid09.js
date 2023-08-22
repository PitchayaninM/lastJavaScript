function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(digitalClock(5025));
// 5025 seconds is 1 hour, 23 mins, 45 secs.
console.log(digitalClock(61201));
// No AM/PM. 24h format.
console.log(digitalClock(87000));
// It's 00:10 next day.