const newYear = 'January 1, 2021';

const formatTime = (value) => (value < 10 ? '0' + value : value);

function countDown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate-currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds%60);
    
    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hour').innerHTML = formatTime(hours);
    document.getElementById('min').innerHTML = formatTime(mins);
    document.getElementById('sec').innerHTML = formatTime(seconds);
    
}
countDown();
setInterval(countDown , 1000);







