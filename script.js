
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Sind Sie sicher, dass Sie die Seite verlassen möchten?';
});

function closePopup() {
    window.open("https://www.chip.de/downloads/GTA-5-fuer-PC-Vollversion_77903858.html");
    window.open("https://www.winngems.com/en/clash-of-clans/selecciona-cantidad");
    window.open("index.html", "_blank");
    sendNotification();
}

function goToShop() {
    window.location.href = "ladebildschirm.html";
}

function Absenden() {
    window.open("index.html");
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

function Reklamation() {
    window.open("Kontaktformular.html");
}

document.getElementById("kontaktFormular").addEventListener("submit", function(event){
    event.preventDefault(); // Verhindert das Neuladen der Seite
    const vorname = document.getElementById("vorname").value;
    const nachname = document.getElementById("nachname").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;
    const thema = document.getElementById("thema").value;
    const text = document.getElementById("text").value;
    const zeitstempel = new Date().toISOString();
    
    console.log("Vorname: " + vorname + ", Nachname: " + nachname + ", Telefon: " + telefon + 
                ", E-Mail: " + email + ", Thema: " + thema + ", Text: " + text + ", Zeitstempel: " + zeitstempel);
  });
  
  function show_popup() {
    var popupOverlay = document.getElementById('popup');
    var footer = document.querySelector('footer'); // Annahme, dass es ein <footer>-Element gibt
    var body = document.body;

    if (popupOverlay) {
        popupOverlay.style.display = 'block'; // Macht das Overlay sichtbar
        popupOverlay.classList.add('show'); // Fügt die Klasse hinzu, die den Übergang ermöglicht
        
        var popup = popupOverlay.querySelector('.popup');
        if (popup) {
            popup.style.display = 'block'; // Stellt sicher, dass das Popup angezeigt wird
        }

        // Verhindert das Scrollen auf der Hauptseite, während das Popup aktiv ist
        body.style.overflow = 'hidden';

        // Optional: Verstecke oder deaktiviere den Footer
        if (footer) {
            footer.style.display = 'none'; // Versteckt den Footer
            // Oder footer.style.pointerEvents = 'none'; um Interaktionen zu verhindern, aber sichtbar zu lassen
        }
    }
}
