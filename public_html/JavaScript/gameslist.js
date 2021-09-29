//Change the game list according to the type choosen
function changeType(type) {
    var horror = document.getElementById("horror");
    var rpg = document.getElementById("rpg");
    var fps = document.getElementById("fps");
    var typeRPG = document.getElementById("typeRPG");
    var typeFPS = document.getElementById("typeFPS");
    var typeHorror = document.getElementById("typeHorror");
    if(type == 1){
        var searchBar = document.getElementById("searchBarRpg");
        rpg.style.display = "block";
        fps.style.display="none";
        horror.style.display="none";
        typeRPG.style.backgroundColor = "#d7d870";
        typeRPG.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
        typeFPS.style.border = '';
        typeHorror.style.border = '';
        typeFPS.style.backgroundColor = '';
        typeHorror.style.backgroundColor = '';
        searchBar.value="";
        searchGame(0);
    }
    else if (type == 2){
        var searchBar = document.getElementById("searchBarFps");
        rpg.style.display = "none";
        fps.style.display="block";
        horror.style.display="none";
        typeRPG.style.backgroundColor = '';
        typeFPS.style.backgroundColor = "#d7d870";
        typeFPS.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
        typeRPG.style.border = '';
        typeHorror.style.border = '';
        typeHorror.style.backgroundColor = '';
        searchBar.value="";
        searchGame(1);
    }else{
        var searchBar = document.getElementById("searchBarHorror");
        rpg.style.display = "none";
        typeRPG.style.backgroundColor = '';
        typeFPS.style.backgroundColor = '';
        typeHorror.style.backgroundColor = "#d7d870";
        typeHorror.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
        typeRPG.style.border='';
        typeFPS.style.border='';
        fps.style.display="none";
        horror.style.display="block";
        searchBar.value="";
        searchGame(2);
    }
    
    
}
// Set color to rpg type game list button
function setColor(){
    var typeRPG = document.getElementById("typeRPG");
    typeRPG.style.backgroundColor = "#d7d870";
    typeRPG.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
}

// Game Searching
function searchGame(type){
    var i,k=0;
    if (type == 0){
        var searchBar = document.getElementById("searchBarRpg");
        var filter = searchBar.value.toUpperCase();
        var data = document.getElementById("rpg");
    }else if (type == 1){
        var searchBar = document.getElementById("searchBarFps");
        var filter = searchBar.value.toUpperCase();
        var data = document.getElementById("fps");
    }else{
        var searchBar = document.getElementById("searchBarHorror");
        var filter = searchBar.value.toUpperCase();
        var data = document.getElementById("horror");
    }
    data.getElementsByClassName("emptySlot")[0].style.display="none";
    var slot = data.getElementsByClassName("gameSlot");
    for ( i = 0;i < slot.length;i++){
        var a = slot[i].getElementsByTagName("a")[0];
        var contents = a.getElementsByClassName("contents")[0];
        var h1 = contents.getElementsByTagName("h1")[0];
        var name = h1.getElementsByClassName("nameOfGame")[0];
        var h1Value = name.innerText.toUpperCase()
        if (h1Value.indexOf(filter)>-1){
            slot[i].style.display="block";
            k++;
        }else{
            slot[i].style.display="none";
        }
    }
    if(k==0){
        data.getElementsByClassName("emptySlot")[0].style.display="block";
    }
}