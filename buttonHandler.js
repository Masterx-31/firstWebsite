console.log("Hello World!");
var btn = document.getElementById('btn');
var ans = document.getElementById('odpowiedz');
var txtA = document.getElementById('textA');
var txtNL = document.getElementById('areaBTNnl');
var gradBtn = document.getElementById('gradientBTN');
var dwaZero = document.getElementById('dwaZero');
var kolorA = document.getElementById('kolorA');
var kolorB = document.getElementById('kolorB');

// document.body.style.background = linear-gradient()
btn.onclick = function() {

    var answer = document.createElement("p");
    var br = document.createElement("br");
    ans.appendChild(br);
    var text = document.createTextNode(returnCzas() + document.getElementById("Pole").value);
    answer.appendChild(text);
    ans.appendChild(text);
    ans.classList.add('dodanyP');
};
dwaZero.onclick = function() {
    if(dwaZero.checked == true) {
        document.getElementById('gradientPole').style.display = "none";
        kolorA.style.display = "inline-block";
        kolorB.style.display = "inline-block";
    } else{
        document.getElementById('gradientPole').style.display = "inline-block";
        kolorA.style.display = "none";
        kolorB.style.display = "none";
    }
}

areaBTNnl.onclick = function() {
    var wartosc = document.getElementById("areaPole").value;
    addToTextBox(wartosc + "\n");
};
gradBtn.onclick = function() {
    if(dwaZero.checked == false) {
        var gradientColor = document.getElementById('gradientPole').value;
        document.body.style.background = 'linear-gradient(' + gradientColor + ') ';
        document.body.style.height = '100%';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        var debugLog = "Zmieniono gradient na " + gradientColor + " "
        addToTextBox(debugLog)
    } else {
        var gradientColor = String(kolorA.value + "," + kolorB.value);
        document.body.style.background = 'linear-gradient(' + gradientColor + ') ';
        document.body.style.height = '100%';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        var debugLog = "Zmieniono gradient na " + gradientColor + " "
        addToTextBox(debugLog)
    }
};
function addToTextBox(text) {
    txtA.value = txtA.value + returnCzas() + text + "\n";
};
function returnCzas() {
    var data = new Date();
    var lepszeMinuty = "";
    var lepszeGodziny = "";
    if(data.getMinutes < 10 ) {
        lepszeMinuty = "0" + data.getMinutes() + ": ";
    } else {
        lepszeMinuty = data.getMinutes() + ": ";
    };
    if(data.getHours() < 10) {
        lepszeGodziny = "0" + data.getHours() + ":";
    } else {
        lepszeGodziny = data.getHours() + ":";
    };
    var czas = lepszeGodziny + lepszeMinuty;
    return czas;
}