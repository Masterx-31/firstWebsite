let checkRB = document.getElementById("checkRB");
let aBox = document.getElementById("bokA");
let hBox = document.getElementById("bokH");
let ansBox = document.getElementById("answer");
let FieldBtn = document.getElementById("PoliczPoleT");
let clearAns = document.getElementById("clearAns");
let options = document.getElementById("figury");
let triangle = document.getElementById("trojkat");
let square = document.getElementById("kwadrat");
let recktangle = document.getElementById("prostokat");
let trapezoid = document.getElementById("trapez");
let romb = document.getElementById("romb");
let rownoleglobok = document.getElementById("rownoleglobok");
let figury = [triangle, square, recktangle, trapezoid, romb, rownoleglobok];
let kBokA = document.getElementById("KbokA");
let PbokA = document.getElementById("PbokA");
let PbokB = document.getElementById("PbokB");
let TbokA = document.getElementById("TbokA");
let TbokB = document.getElementById("TbokB");
let TbokH = document.getElementById("TbokH");


document.getElementById("PoliczPoleRB").onclick = function () {
    console.log("nac");
    let pole = document.getElementById("RBbokA").value * document.getElementById("RBbokH").value;
    addAns("Pole równoległoboku o boku a = " + document.getElementById("RBbokA").value + " i wysokości h = " + document.getElementById("RBbokH").value + " wynosi: " + pole);
}
document.getElementById("PoliczPoleK").onclick = function () {
    let pole = kBokA.value ** 2;
    addAns("Pole kwadratu o boku a = " + kBokA.value + " wynosi: " + pole);
}
document.getElementById("PoliczPoleP").onclick = function () {
    let pole = PbokA.value * PbokB.value;
    addAns("Pole prostokąta o boku a = " + PbokA.value + " i boku b = " + PbokB.value + " wynosi: " + pole);
}
document.getElementById("PoliczPoleTr").onclick = function () {
    let pole = (parseInt(TbokA.value) + parseInt(TbokB.value)) * parseInt(TbokH.value) / 2;
    addAns("Pole prostokąta o boku a = " + TbokA.value + ", boku b = " + TbokB.value + " i wysokości h = " + TbokH.value + " wynosi: " + pole);
}

options.onchange = function () {
    switch (options.value) {
        case "none":
            hideDivs("nic");
            break;
        case "tri":
            hideDivs(triangle);
            break;
        case "sq":
            hideDivs(square);
            break;
        case "rec":
            hideDivs(recktangle);
            break;
        case "trap":
            hideDivs(trapezoid);
            break;
        case "romb":
            hideDivs(romb);
            break;
        case "rowno":
            hideDivs(rownoleglobok);
            break;
        default:
            hideDivs("nic");
    }
}

checkRB.onclick = function () {
    if (checkRB.checked == true) {
        hBox.style.display = "none";
    } else {
        hBox.style.display = "inline-block";
    }
}
document.getElementById("checkPR").onclick = function () {
    if (document.getElementById("checkPR").checked == true) {
        document.getElementById("ahDiv").style.display = "none";
        document.getElementById("d1d2Div").style.display = "inline-block";
    } else {
        document.getElementById("ahDiv").style.display = "inline-block";
        document.getElementById("d1d2Div").style.display = "none";
    }
}
    document.getElementById("PoliczPoleR").onclick = function () {
        if (document.getElementById("checkPR").checked == true) {
            let pole = (document.getElementById("RbokD1").value * document.getElementById("RbokD2").value) / 2;
            addAns("Pole rąbu o przekątnej d1 = " + document.getElementById("RbokD1").value + " i przekątnej d2 = " + document.getElementById("RbokD2").value + " wynosi: " + pole);
        } else {
            let pole = document.getElementById("RbokA").value * document.getElementById("RbokH").value;
            addAns("Pole rąbu o boku a = " + document.getElementById("RbokA").value + " i wysokości h = " + document.getElementById("RbokH").value + " wynosi: " + pole);
        }
    }

FieldBtn.onclick = function () {
    if (checkRB.checked == true) {
        let FieldAns = ((aBox.value ** 2) * Math.sqrt(3)) / 2;
        let fFieldAns = "Pole trójkąta o boku a = " + aBox.value + " w przybliżeniu wynosi: " + String(Math.round(FieldAns));
        addAns(fFieldAns);
    } else {
        let FieldAns = (aBox.value * hBox.value) / 2
        let fFieldAns = "Pole trójkąta o boku a = " + aBox.value + " i wysokośći h = " + hBox.value + " wynosi: " + String(FieldAns);
        addAns(fFieldAns);
    }

    clearAns.onclick = function () {
        ansBox.value = ""
    }

}

function addAns(text) {
    ansBox.value = ansBox.value + text + "\n";
}

function hideDivs(dontHide) {
    figury.forEach(function (element) {
        if (element == dontHide) {
            element.style.display = "inline-block";
        } else {
            element.style.display = "none";
        }
    });
}