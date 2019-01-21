document.addEventListener('DOMContentLoaded', function() {
    var x = document.getElementsByClassName("btnClick");
    x[0].addEventListener("click", CopyMe);
    x[0].index = 0;
    x[1].addEventListener("click", CopyMe);
    x[1].index = 1;
});

function CopyMe(evt) {
    var indexx = evt.target.index; 
    var copyText = document.getElementsByClassName("content")[indexx];
    var showText = document.getElementById("demo");
    copyText.select();
    document.execCommand("copy");
    showText.textContent = "Copied " + document.getElementsByClassName("btnClick")[indexx].name;
}