
const newYears = `1 Jan ${new Date().getFullYear() + 1}`;
const dateNewYear = document.getElementById("dateNewYear");
const newTitles = document.querySelectorAll('h1');

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalMilliseconds = newYearsDate - currentDate;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600%24);
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);

    if(newTitles.length>0){
        newTitles[0].innerHTML = days;
        newTitles[1].innerHTML = hours;
        newTitles[2].innerHTML = minutes;
        newTitles[3].innerHTML = seconds;
    }    
}

countDown();

setInterval(countDown, 1000);

function getWeekday(date) {
    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const newYearsDate = new Date(date);
    const dayOfWeek = newYearsDate.getDay();
    return weekdays[dayOfWeek];
}
const dayOfWeek = getWeekday(newYears);

dateNewYear.innerHTML = `${dayOfWeek} ${newYears}`;