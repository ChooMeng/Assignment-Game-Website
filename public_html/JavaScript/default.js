//Scroll to the top button
var topButton = document.getElementById("scrollToTop");
window.onscroll = function() {detectScroll()};
function detectScroll(){
    if(document.body.scrollTop>50||document.documentElement.scrollTop > 50){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
}
function scrollFunction(){
    window.location.href="#top"
}

/* Cancel loading icon */
function cancelLoading(){
    document.getElementById("loading").classList.add("pageFadeOut");
    setTimeout(function(){document.getElementById("loading").remove();},500);
}

/* NavigationBar Hovering */
function navHover(element){
    element.parentNode.getElementsByTagName("a")[0].classList.add("pointing");
}

function navUnHover(element){
    element.parentNode.getElementsByTagName("a")[0].classList.remove("pointing");
}

function openSideNav(){
    var sideBar = document.getElementsByClassName("sideBar")[0];
    if (sideBar.style.opacity=="1"){
        sideBar.style.width="0";
        sideBar.style.opacity="0";
    }else{
        sideBar.style.width="30%";
        sideBar.style.opacity="1";
    }
}

function openGameList(){
    var gamelist = document.getElementsByClassName("sideGameMenu")[0];
    if (gamelist.style.opacity=="1"){
        gamelist.style.width="";
        gamelist.style.opacity="";
        gamelist.style.display="";
    }else{
        gamelist.style.width="75%";
        gamelist.style.opacity="1";
        gamelist.style.display="block";
    }
}

function gamenavHover(){
    document.getElementsByClassName("sideBar")[0].getElementsByTagName("a")[2].classList.add("pointing");
}

function gamenavUnHover(){
    document.getElementsByClassName("sideBar")[0].getElementsByTagName("a")[2].classList.remove("pointing");
}