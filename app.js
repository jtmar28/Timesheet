const timeForm = document.querySelector('#timeForm');
const timeSheetForm = document.querySelector('#timeSheetForm');
const clockIn = document.querySelector('#clockIn');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const list = document.querySelector('#shiftTable');
const formTime = document.querySelector('#time');
// const employDate = document.querySelector('#employeeDate');
// const employName = document.querySelector('#employeeName');

getEventListeners();

function getEventListeners(){
    clockIn.addEventListener('click', employeeTime);
    timeSheetForm.addEventListener('submit', addEmployeeTime);
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
function addEmployeeTime(e){
    const employ = document.querySelector('#employ');
    employ.className = 'Selected';
    const tdEmployeeName = document.createElement('td');
    const tdCurrentTime = document.createElement('td');
    const tdCurrentDate = document.createElement('td');
    const tdDelete = document.createElement('td');
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let year = time.getFullYear();
    tdEmployeeName.appendChild(document.createTextNode(`${firstName.value} ${lastName.value}`));
    tdCurrentTime.appendChild(document.createTextNode(`${hour} : ${minute}`));
    tdCurrentDate.appendChild(document.createTextNode(`${month} ${day}, ${year}`));
    employ.appendChild(tdEmployeeName);
    employ.appendChild(tdCurrentDate);
    employ.appendChild(tdCurrentTime);
    employ.appendChild(tdDelete);
    const a = document.createElement('a');
    a.innerHTML = '<i class="fas fa-user-minus"></i>';
    tdDelete.appendChild(a);
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