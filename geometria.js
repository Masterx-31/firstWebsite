var checkRB = document.getElementById("checkRB");
var aBox = document.getElementById("bokA");
var hBox = document.getElementById("bokH");
var ansBox = document.getElementById("answer");
var FieldBtn = document.getElementById("PoliczPoleT");
var clearAns = document.getElementById("clearAns");

checkRB.onclick = function() {
    if(checkRB.checked == true) {
        hBox.style.display = "none";
    } else{
        hBox.style.display = "inline-block";
    }
}
FieldBtn.onclick = function() {
if(checkRB.checked == true) {
    var FieldAns = (( aBox.value ^ 2 ) * Math.sqrt(3) ) /2;
    var fFieldAns = "Pole trójkąta o boku a = " + aBox.value + " w przybliżeniu wynosi: " + String(Math.round(FieldAns));
    addAns(fFieldAns);
} else {
    var FieldAns = (aBox.value * hBox.value) / 2
    var fFieldAns = "Pole trójkąta o boku a = " + aBox.value + " i boku h = " + hBox.value + " wynosi: " + String(FieldAns);
    addAns(fFieldAns);
}

clearAns.onclick = function() {
    ansBox.value = ""
}

}
function addAns(text) {
    ansBox.value = ansBox.value + text + "\n";
}