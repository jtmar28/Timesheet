const timeForm = document.querySelector('#timeForm');
const timeSheetForm = document.querySelector('#timeSheetForm');
const clockIn = document.querySelector('#clockIn');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const list = document.querySelector('#shiftTable');
const formTime = document.querySelector('#time');
const shiftTableBody = document.querySelector('#shiftTableBody');
const filter = document.querySelector('#search');
const currentTimeForm = document.querySelector('#currentTimeForm');
const inputFieldTimeForm = document.querySelector('#inputFieldTimeForm');


getEventListeners();

function getEventListeners(){
    document.addEventListener('DOMContentLoaded',getEmployeeNameFromLS);
    clockIn.addEventListener('click', employeeTime);
    timeSheetForm.addEventListener('submit', addEmployeeTime);
    list.addEventListener('click', deleteEmployee);
    filter.addEventListener('keyup',searchEmployee);
    document.addEventListener('click', clockOutTd);
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
    const employ = document.createElement('tr');
    employ.id = 'Employee';
    shiftTableBody.appendChild(employ);
    const tdEmployeeName = document.createElement('td');
    const tdCurrentTime = document.createElement('td');
    const tdCurrentEndTime = document.createElement('td');
    tdCurrentEndTime.className = 'clockOutTd';
    const tdCurrentDate = document.createElement('td');
    const tdDelete = document.createElement('td');
    tdEmployeeName.appendChild(document.createTextNode(`${firstName.value} ${lastName.value}`));
    tdCurrentTime.appendChild(document.createTextNode(formTime.value.substr(12,19)));
    tdCurrentDate.appendChild(document.createTextNode(formTime.value.substr(0,11)));
    addEmployeeNameIntoLs(`${firstName.value} ${lastName.value}`);
    console.log(formTime.value.substr(12,19));
    console.log(formTime.value.substr(0,11));
    employ.appendChild(tdEmployeeName);
    employ.appendChild(tdCurrentDate);
    employ.appendChild(tdCurrentTime);
    employ.appendChild(tdCurrentEndTime);
    employ.appendChild(tdDelete);
    const a = document.createElement('a');
    a.className = 'delete';
    a.innerHTML = '<i class="fas fa-user-minus"></i>';
    tdDelete.appendChild(a);
    firstName.value = '';
    lastName.value = '';
    formTime.value = '';
    //addEmployeeTimeIntoLs(employ.value);
    e.preventDefault();
}
function getEmployeeNameFromLS(){
    let employName;
    if(localStorage.getItem('employeeName') === null){
        employName = [];
    }else{
        employName = JSON.parse(localStorage.getItem('employeeName'));
    }
    employName.forEach(function(employeeName){
        const employ = document.createElement('tr');
        employ.id = 'Employee';
        shiftTableBody.appendChild(employ);
        const tdEmployeeName = document.createElement('td');
        tdEmployeeName.id = 'employeeId';
        const tdDelete = document.createElement('td');
        tdEmployeeName.appendChild(document.createTextNode(employeeName));
        
        employ.appendChild(tdEmployeeName);
        const a = document.createElement('a');
        a.className = 'delete';
        a.innerHTML = '<i class="fas fa-user-minus"></i>';
        tdDelete.appendChild(a);
        employ.appendChild(tdDelete);
    });
}
// function getEmployeeDateFromLS(){
//     let employDate;
//     if(localStorage.getItem('employeeDate') === null){
//         employeDate = [];
//     }else{
//         employDate = JSON.parse(localStorage.getItem('employeeDate'));
//     }
//     employDate.forEach(function(employeeDate){
//         const tdCurrentDate = document.createElement('td');
//         tdCurrentDate.appendChild(document.createTextNode(employeeDate));
//         document.getElementById('Employee').insertBefore(tdCurrentDate,document.getElementById('employeeId'));
//     });
// }
function addEmployeeNameIntoLs(employeeName){
    let employName;
    
    if(localStorage.getItem('employeeName') === null){
        employName = [];
    }else{
        employName = JSON.parse(localStorage.getItem('employeeName'));
    }
    employName.push(employeeName);
    localStorage.setItem('employeeName',JSON.stringify(employName));
    
}
function addEmployeeDateIntoLs(employeeDate){
    let employDate;
    if(localStorage.getItem('employeeDate') === null){
        employeDate = [];
    }else{
        employDate = JSON.parse(localStorage.getItem('employeeDate'));
    }
    employeDate.push(employeeDate);
    localStorage.setItem('employeeDate', JSON.stringify(employDate));
}
function deleteEmployee(e){
    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
}
function searchEmployee(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('#Employee').forEach(function(employee){
        const person = employee.firstChild.textContent;
        if(person.toLowerCase().indexOf(text) != -1){
            employee.style.display = 'table-row';
        }else{
            employee.style.display = 'none';
        }
    });
}
function clockOutTd(e){
    if(e.target.innerHTML === ''){
        if(e.target.classList.contains('clockOutTd')){
            e.target.parentElement.style.border= '5px solid green';
            e.target.parentElement.className = 'selected';
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
            e.target.innerHTML = `${hour} : ${minute}`;
            setInterval(function removeBorder(){
                if(e.target.parentElement.classList.contains('selected')){
                    e.target.parentElement.style.border= 'none';
                    e.target.parentElement.classList.remove('selected');
                }
            }, 1000);
        }
    }
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