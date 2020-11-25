console.log("Hello World!");
var btn = document.getElementById('btn');
var ans = document.getElementById('odpowiedz');
var txtA = document.getElementById('textA');
var txtNL = document.getElementById('areaBTNnl');
var gradBtn = document.getElementById('gradientBTN');

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

areaBTNnl.onclick = function() {
    var wartosc = document.getElementById("areaPole").value;
    addToTextBox(wartosc + "\n");
};
gradBtn.onclick = function() {
    var gradientColor = document.getElementById('gradientPole').value;
    document.body.style.background = 'linear-gradient(' + gradientColor + ') ';
    document.body.style.height = '100%';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    var debugLog = "Zmieniono gradient na " + gradientColor + " "
    addToTextBox(debugLog)
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