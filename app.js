const timeForm = document.querySelector('#timeSheetForm');
const clockIn = document.querySelector('#clockIn');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const list = document.querySelector('#shiftTable');
const formTime = document.querySelector('#time');
getEventListeners();

function getEventListeners(){
    clockIn.addEventListener('click', employeeTime);
}

function employeeTime(e){
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let year = time.getFullYear();
    if(hour < 10){
        hour = `0${hour}`;
    }
    if(minute < 10){
        minute = `0${minute}`;
    }
    if(second < 10){
        second = `0${second}`;
    }
    if(month < 10){
        month = `0${month}`;
    }
    if(day < 10){
        day = `0${day}`;
    }
    formTime.value = `${month} ${day}, ${year} ${hour} : ${minute}`;
    e.preventDefault();
}
//Current Date function
function clock(){
    const clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    if(hour < 10){
        hour = `0${hour}`;
    }
    if(minute < 10){
        minute = `0${minute}`;
    }
    if(second < 10){
        second = `0${second}`;
    }
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
}
//Current Time Function
function date(){
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    if(month < 10){
        month = `0${month}`;
    }
    if(day < 10){
        day = `0${day}`;
    }
    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = day;
    document.getElementById('year').innerHTML = year;
}
setInterval(date,100);
setInterval(clock,100);