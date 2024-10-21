const inputDate = document.querySelector('#date');
const today = new Date();

const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];

const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];

inputDate.min = firstDayOfMonth;
inputDate.max = lastDayOfMonth;

const group = document.querySelector("#group");
const inputHour = document.querySelector("#time");

group.addEventListener('input', () => {
    if(group != null && group != ""){
        fetch("/api/getAllGroups")
        .then(response =>  response.json())
        .then(data => {
            inputHour.min = data.StartTime;
            inputHour.max = data.EndTime;
            inputHour.disabled = false;
        })
        .catch(error => {
            console.error("Error getting data");
        })
        
    }
})

function showHours(name, date, hours, roomId){

    const h3 = document.querySelector('.box-hours h2');
    h3.innerHTML = name + " - " + date;

    hoursArray = hours.split(',');
    console.log(hoursArray);

    const hoursDiv = document.querySelector('.hours');

    hoursArray.forEach((hour) => {
        const a = document.createElement('a');
        a.href = "/reservation/reserve?hour=" + hour + "&date=" + date + "&roomId=" + roomId;
        a.innerHTML = hour + ":00";
        hoursDiv.appendChild(a);
    });

    hoursArea = document.querySelector('.hours-area');
    hoursArea.style.display = 'flex';
}

function closeHours(){

    const hours = document.querySelectorAll('.hours a');
    
    hours.forEach((hour) => {
        hour.remove();
    })

    hoursArea = document.querySelector('.hours-area');
    hoursArea.style.display = 'none';
}

