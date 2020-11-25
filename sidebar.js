var sidebarBtn = document.getElementById("toggleButton");
var sidebar = document.getElementById("sidebar");
var main = document.getElementById("main");
var content = document.getElementById("content");

sidebarBtn.onclick = function() {
    if(document.getElementById("sidebar").style.width == "3%") {
        content.style.visibility = "visible";
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
        sidebarBtn.textContent = "<"
    }else {
        content.style.visibility = "hidden";
        sidebar.style.width = "3%";
        main.style.marginLeft = "3%";  
        sidebarBtn.textContent = ">"
    };
 
};