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


