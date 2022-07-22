const country = fetch('Data/countries.json').then(res => res.json()).then(data => countries_data = data);
const ideologies = fetch('Data/ideology.json').then(res => res.json()).then(data => ideologies_data = data);
const GB = fetch('Great_Brittany/events.json').then(res => res.json()).then(data => events_data = data);
let countries_data = {};
let ideologies_data = {};
let events_data = {};
let month = 0;

let start_butt = document.getElementById("start_butt");
let money_butt = document.getElementById("money_butt");
let leader_butt = document.getElementById("leader_butt");
let ideology_butt = document.getElementById("ideo_butt");
let eventlog = document.getElementById("event_butt");
let next_month = document.getElementById("next_month");

start_butt.addEventListener("click", async function gh(){
    await country;
    start_butt.style.display = "none";
    next_month.style.display = "block"
    leader_butt.innerHTML = "Leader: " + countries_data[0].leader;
    for (let i = 0; i < 6; i++) {
        if (countries_data[0].ideology == ideologies_data[i].code){
            ideology_butt.innerHTML = "Ideology: " + ideologies_data[i].name;
            ideology_butt.style.color = ideologies_data[i].color;
        }
    }
});

next_month.addEventListener("click", async function gh(){
    let bottom = document.getElementById("bottom");
    let curr_month = document.getElementById("day");
    month += 1;
    curr_month.innerHTML = month;
    if (month == 2){
        eventlog.innerHTML = events_data[0].name;
        changeLeader(events_data[0].leader)  
    }
});





function changeLeader(newleader){
    leader_butt.innerHTML = "Leader: " + newleader;
}

function changeIdeo(newideo){   
}