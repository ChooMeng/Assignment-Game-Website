var id = 5;
var slideShowTimeout = 0;
var max = 0;
// Zooming the image
function zoomSlide(element){
    var imgModal = document.getElementById("imgModal");
    var zoomImg = document.getElementById("zoomImg");
    imgModal.style.display ="block";
    zoomImg.src = element.src;
    pauseSlide();
}
function closeZoom(){
    var imgModal = document.getElementById("imgModal");
    imgModal.style.display = "none";
    playSlide();
}

// SlideShow
function maxSlide(){
    var show = document.getElementsByClassName("slideshow")[0];
    var imgShow = show.getElementsByTagName("img");
    max = imgShow.length;
    slideShow();
}
function slideShow(){
    if (id > max-2){
        id = 0;
    }else{
        id++;
    }
    currentSlide();
    slideShowTimeout = setTimeout(slideShow, 5000);
}
function currentSlide(){
    var i;
    var show = document.getElementsByClassName("slideshow")[0];
    var imgShow = show.getElementsByTagName("img");
    var showBar = document.getElementsByClassName("slideShowBar")[0];
    var bar = showBar.getElementsByTagName("img");
    for (i = 0;i < imgShow.length;i++){
        if (id == i){
            imgShow[i].style.display="block";
        }else{
            imgShow[i].style.display="none";
        }
    }
    for (i = 0;i < bar.length;i++){
        if (id == i){
            bar[i].className="active";
        }else{
            bar[i].classList.remove("active");
        }
    }
}
function changeSlide(num){
    id = id + num;
    if (id>max-1){
        id = 0;
    }
    else if(id < 0){
        id = max-1;
    }
    currentSlide();
    if (slideShowTimeout != "0"){
        clearTimeout(slideShowTimeout);
        slideShowTimeout = setTimeout(slideShow, 5000);
    }
}
function specificSlide(num){
    id = num;
    currentSlide();
    if (slideShowTimeout != "0"){
        clearTimeout(slideShowTimeout);
        slideShowTimeout = setTimeout(slideShow, 5000);
    }
    
}
function pauseSlide(){
    var pause = document.getElementById("pause");
    var play = document.getElementById("play");
    pause.style.display ="none";
    play.style.display="block";
    clearTimeout(slideShowTimeout);
    slideShowTimeout = 0;
}
function playSlide(){
    var pause = document.getElementById("pause");
    var play = document.getElementById("play");
    pause.style.display ="block";
    play.style.display="none";
    slideShowTimeout = setTimeout(slideShow, 5000);
}

// Change the rate display box and verification
function changeRateRange(){
    var rate = document.getElementById("rate");
    var rateValue = document.getElementById("rateValue");
    rateValue.value = rate.value;
}
function changeRate(){
    var rate = document.getElementById("rate");
    var rateValue = document.getElementById("rateValue");
    if (rateValue.value > 5){
        rateValue.value = 5;
    }else if (rateValue.value < 0){
        rateValue.value = 0;
    }
    if (rateValue.value == ""){
        rateValue.value = 0;
    }
    rate.value = rateValue.value;
}
// Alert to user for succesful submit
function succesfulSubmit(){
    alert("Succesful submit your review.")
}

// Open modal when succesful added item to shopping cart
function openBox(){
    document.getElementById("addBox").style.display="block";
}
function closeBox(){
    document.getElementById("addBox").style.display="none";
}

// Open download modal
function openDownloadBox(){
    document.getElementById("downloadBox").style.display="block";
    downloadTime = 6;
    download();
}
function closeDownloadBox(){
    downloadTime = -1;
    document.getElementById("downloadBox").style.display="none";
}
var downloadTime = 6;
// Countdown for download time
function download(){
    var timeText = document.getElementById("downloadTime");
    if (downloadTime == 0){
        timeText.value = downloadTime;
        location.href="../../downloaded.md"
        closeDownloadBox();
    }else{
        if (downloadTime != -1){
            downloadTime --;
            timeText.innerHTML = downloadTime;
            setTimeout(download, 1000);
        }
    }
}
