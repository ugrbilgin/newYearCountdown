const newYear = 'January 1, 2021';

function countDown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate-currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60 ;
    const seconds = Math.floor(totalSeconds%60);
    
    document.getElementById('days').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = mins;
    document.getElementById('sec').innerHTML = seconds;
    
}
countDown();
setInterval(countDown , 1000);







