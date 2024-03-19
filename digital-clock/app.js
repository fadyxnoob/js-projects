function clock() {
    let secDots = document.getElementById('secDots');
    let minDots = document.getElementById('minDots');
    let hrDots = document.getElementById('hrDots');

    var date = new Date();
    var hours = date.getHours() % 12;
    hours === 0 ? 12 : hours;
    var amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var secondsDots = '';
    for (var i = 1; i < 61; i++) {
        var rotation = i * 6;
        if (i === seconds) {
            secondsDots += '<div class="dot active" style="transform: rotate(' + rotation + 'deg")></div>';

        } else {
            secondsDots += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>';

        }
    }
    var minutesDots = '';
    for (var i = 1; i < 61; i++) {
        var rotation = i * 6;
        if (i === minutes) {
            minutesDots += '<div class="dot active" style="transform: rotate(' + rotation + 'deg")></div>';

        } else {
            minutesDots += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>';

        }
    }

    var hoursDots = '';
    for (var i = 1; i < 13; i++) {
        var rotation = i * 30;
        if (i === hours) {
            hoursDots += '<div class="dot active" style="transform: rotate(' + rotation + 'deg")></div>';

        } else {
            hoursDots += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>';

        }
    }
    secDots.innerHTML = secondsDots + 
    
    '<h2>' + zero(seconds) + '<br/> <span>Seconds</span></h2>';
    minDots.innerHTML = minutesDots + '<h2>' + zero(minutes) + '<br/>  <span>Miuntes</span>' + '</h2>';

    hrDots.innerHTML = hoursDots + '<h2>' + zero(hours) + '<br/>  <span>Hours</span>' + '</h2>';
}

// Add 0 in single digit 
function zero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}
setInterval(clock, 1000);
