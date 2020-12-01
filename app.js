const DAY = document.querySelector('#days');
const HOURS = document.querySelector('#hours');
const MINS = document.querySelector('#minutes');
const SECS = document.querySelector('#seconds');

function getTimes() {
    let eventTime = new Date('12-25-2020').getTime();
    let currentTime = new Date().getTime()

    let differenceTime = eventTime - currentTime

    let seconds = moment.duration(differenceTime).seconds();
    let minutes = moment.duration(differenceTime).minutes();
    let hours = moment.duration(differenceTime).hours();
    let days = moment.duration(differenceTime).days();

    writeHtml(seconds, minutes, hours, days);
}

function writeHtml(seconds, minutes, hours, days) {
    DAY.textContent = days
    HOURS.textContent = hours
    MINS.textContent = minutes
    SECS.textContent = seconds
}

setInterval(() => {
    getTimes()
}, 1000)