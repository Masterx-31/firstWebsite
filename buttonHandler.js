console.log("Hello World!");
let btn = document.getElementById('btn');
let ans = document.getElementById('odpowiedz');
let txtA = document.getElementById('textA');
let txtNL = document.getElementById('areaBTNnl');
let gradBtn = document.getElementById('gradientBTN');
let dwaZero = document.getElementById('dwaZero');
let kolorA = document.getElementById('kolorA');
let kolorB = document.getElementById('kolorB');

// document.body.style.background = linear-gradient()
btn.onclick = function() {

    let answer = document.createElement("p");
    let br = document.createElement("br");
    ans.appendChild(br);
    let text = document.createTextNode(returnCzas() + document.getElementById("Pole").value);
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
    let wartosc = document.getElementById("areaPole").value;
    addToTextBox(wartosc + "\n");
};
gradBtn.onclick = function() {
    if(dwaZero.checked == false) {
        let gradientColor = document.getElementById('gradientPole').value;
        document.body.style.background = 'linear-gradient(' + gradientColor + ') ';
        document.body.style.height = '100%';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        let debugLog = "Zmieniono gradient na " + gradientColor + " "
        addToTextBox(debugLog)
    } else {
        let gradientColor = String(kolorA.value + "," + kolorB.value);
        document.body.style.background = 'linear-gradient(' + gradientColor + ') ';
        document.body.style.height = '100%';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        let debugLog = "Zmieniono gradient na " + gradientColor + " "
        addToTextBox(debugLog)
    }
};
function addToTextBox(text) {
    txtA.value = txtA.value + returnCzas() + text + "\n";
};
function returnCzas() {
    let data = new Date();
    let lepszeMinuty = "";
    let lepszeGodziny = "";
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
    let czas = lepszeGodziny + lepszeMinuty;
    return czas;
} 