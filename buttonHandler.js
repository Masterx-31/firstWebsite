console.log("Hello World!");
var btn = document.getElementById('btn');
var ans = document.getElementById('odpowiedz');
var txtA = document.getElementById('textA');
var txtNL = document.getElementById('areaBTNnl');
var gradBtn = document.getElementById('gradientBTN');
// document.body.style.background = linear-gradient()
btn.onclick = function() {
    var data = new Date()
    var czas = data.getHours() + ":" + data.getMinutes() + ": ";
    alert("Przycisk nacisnięty z wartością " + document.getElementById("Pole").value);
    var answer = document.createElement("p");
    var br = document.createElement("br");
    ans.appendChild(br);
    var text = document.createTextNode(czas + document.getElementById("Pole").value);
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
    var data = new Date()
    var czas = data.getHours() + ":" + data.getMinutes() + ": ";
    txtA.value = txtA.value + czas + text + "\n"

};