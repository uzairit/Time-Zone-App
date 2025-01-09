const countryTimeZones = {
    "united states": "America/New_York",
    "india": "Asia/Kolkata",
    "japan": "Asia/Tokyo",
    "china": "Asia/Shanghai",
    "south korea": "Asia/Seoul",
    "indonesia": "Asia/Jakarta",
    "turkey": "Europe/Istanbul",
    "united kingdom": "Europe/London",
    "germany": "Europe/Berlin",
    "france": "Europe/Paris",
    "russia": "Europe/Moscow",
    "brazil": "America/Sao_Paulo",
    "argentina": "America/Argentina/Buenos_Aires",
    "mexico": "America/Mexico_City",
    "canada": "America/Toronto",
    "australia": "Australia/Sydney",
    "new zealand": "Pacific/Auckland",
    "egypt": "Africa/Cairo",
    "south africa": "Africa/Johannesburg",
    "kenya": "Africa/Nairobi",
    "nigeria": "Africa/Lagos",
    "ghana": "Africa/Accra",
    "ivory coast": "Africa/Abidjan",
    "chile": "America/Santiago",
    "peru": "America/Lima",
    "colombia": "America/Bogota",
    "venezuela": "America/Caracas",
    "paraguay": "America/Asuncion",
    "fiji": "Pacific/Fiji",
    "pacific islands": "Pacific/Guam",
    "hong kong": "Asia/Hong_Kong",
    "singapore": "Asia/Singapore",
    "philippines": "Asia/Manila",
    "taiwan": "Asia/Taipei",
    "bangladesh": "Asia/Dhaka",
    "pakistan": "Asia/Karachi",
    "vietnam": "Asia/Ho_Chi_Minh",
    "thailand": "Asia/Bangkok",
    "nepal": "Asia/Kathmandu",
    "sri lanka": "Asia/Colombo",
    "malaysia": "Asia/Kuala_Lumpur",
    "uae": "Asia/Dubai"
};


let selectedTimeZone = 'local'

let formattedTime;

function updateTime() {
    const date = new Date()
    if (selectedTimeZone === 'local') {
        formattedTime = date.toLocaleTimeString([], {
            hour12: true
        });
    }

    else {
        formattedTime = date.toLocaleTimeString([], {
            timeZone: selectedTimeZone,
            hour12: true
        });
        const paragraphElement = document.getElementById('paragraph');

        if (paragraphElement) {
            paragraphElement.innerHTML = 'This is the current time based on the selected timezone'
        }

    }

    document.getElementById('time').innerHTML = formattedTime
}
updateTime()
setInterval(updateTime, 1000)


function getTimeForCountry(event) {
    event.preventDefault()
    let input = document.getElementById('UI');
    const inputValue = input.value.trim().toLowerCase();
    const timeZone = countryTimeZones[inputValue];
    if (timeZone) {
        selectedTimeZone = timeZone
        alert(`Time zone set to ${inputValue}`)
    }

    else {
        alert("Time zone not found for the given country.")
        selectedTimeZone = 'local'
    }

}
