
function closePopup() {
    window.open("index.html", "_blank");
    sendNotification();
}

function goToShop() {
    window.location.href = "ladebildschirm.html";
}

function Absenden() {
    window.open("Mail.html", "_blank");
}

function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notification permission granted.");
            } else {
                console.log("Notification permission denied.");
            }
        });
    } else {
        console.log("This browser does not support notifications.");
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.addEventListener('load', function() {
    if (document.getElementById('popup')) {
        document.getElementById('popup').classList.add('show');
    }
    requestNotificationPermission();
});

function Ende(){
    window.open("Success.html");
}

