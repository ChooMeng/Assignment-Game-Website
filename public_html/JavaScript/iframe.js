var id = 9;
var slideShowTimeout = 0;
var max = 0;

// SlideShow
function maxSlide(){
    var show = document.getElementsByClassName("slideshow")[0];
    var imgShow = show.getElementsByTagName("a");
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
    slideShowTimeout = setTimeout(slideShow, 15000);
}
function currentSlide(){
    var i;
    var show = document.getElementsByClassName("slideshow")[0];
    var imgShow = show.getElementsByTagName("a");
    for (i = 0;i < imgShow.length;i++){
        if (id == i){
            imgShow[i].getElementsByTagName("img")[0].style.display="block";
        }else{
            imgShow[i].getElementsByTagName("img")[0].style.display="none";
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
    clearTimeout(slideShowTimeout);
    slideShowTimeout = setTimeout(slideShow, 15000);
}
function specificSlide(num){
    id = num;
    currentSlide();
    clearTimeout(slideShowTimeout);
    slideShowTimeout = setTimeout(slideShow, 15000);
}