const country = fetch('Data/countries.json').then(res => res.json()).then(data => countries_data = data);
const ideologies = fetch('Data/ideology.json').then(res => res.json()).then(data => ideologies_data = data);
const GB = fetch('Great_Brittany/Event1/localisation.json').then(res => res.json()).then(data => events_data = data);


let countries_data = {};
let ideologies_data = {};
let events_data = {};
