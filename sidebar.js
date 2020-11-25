var sidebarBtn = document.getElementById("toggleButton");
var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main");
var content = document.getElementById("content");

document.getElementById("sidebar").style.width = "4%"

sidebarBtn.onclick = function() {
    if(document.getElementById("sidebar").style.width == "4%") {
        content.style.visibility = "visible";
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        sidebarBtn.textContent = "<"
    }else {
        content.style.visibility = "hidden";
        sidebar.style.width = "4%";
        main.style.marginLeft = "4%";  
        sidebarBtn.textContent = ">";
    };
 
};