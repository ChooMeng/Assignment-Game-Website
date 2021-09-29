function itemType(game,type){
    if (game==1){
        var AR = document.getElementById("AR");
        var SMG = document.getElementById("SMG");
        var SG = document.getElementById("SG");
        var LMG = document.getElementById("LMG");
        var SR = document.getElementById("SR");
        var HG = document.getElementById("HG");
        var typeAR = document.getElementById("typeAR");
        var typeSMG = document.getElementById("typeSMG");
        var typeSG = document.getElementById("typeSG");
        var typeLMG = document.getElementById("typeLMG");
        var typeSR = document.getElementById("typeSR");
        var typeHG = document.getElementById("typeHG");
        if(type == 1){
            AR.style.display = "block";
            SMG.style.display="none";
            SG.style.display="none";
            LMG.style.display="none";
            SR.style.display="none";
            HG.style.display="none";
            typeAR.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeSMG.style.border = '';
            typeSG.style.border = '';
            typeLMG.style.border = '';
            typeSR.style.border = '';
            typeHG.style.border = '';
            typeAR.style.backgroundColor = "#d7d870";
            typeSMG.style.backgroundColor = '';
            typeSG.style.backgroundColor = '';
            typeLMG.style.backgroundColor = '';
            typeSR.style.backgroundColor = '';
            typeHG.style.backgroundColor = '';
        }
        else if(type == 2){
            AR.style.display = "none";
            SMG.style.display="block";
            SG.style.display="none";
            LMG.style.display="none";
            SR.style.display="none";
            HG.style.display="none";
            typeAR.style.border = '';
            typeSMG.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeSG.style.border = '';
            typeLMG.style.border = '';
            typeSR.style.border = '';
            typeHG.style.border = '';
            typeAR.style.backgroundColor = '';
            typeSMG.style.backgroundColor = "#d7d870";
            typeSG.style.backgroundColor = '';
            typeLMG.style.backgroundColor = '';
            typeSR.style.backgroundColor = '';
            typeHG.style.backgroundColor = '';
        }
        else if(type == 3){
            AR.style.display ="none";
            SMG.style.display="none";
            SG.style.display="block";
            LMG.style.display="none";
            SR.style.display="none";
            HG.style.display="none";
            typeAR.style.border = '';
            typeSMG.style.border = '';
            typeSG.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeLMG.style.border = '';
            typeSR.style.border = '';
            typeHG.style.border = '';
            typeAR.style.backgroundColor = '';
            typeSMG.style.backgroundColor = '';
            typeSG.style.backgroundColor = "#d7d870";
            typeLMG.style.backgroundColor = '';
            typeSR.style.backgroundColor = '';
            typeHG.style.backgroundColor = '';
        }
        else if(type == 4){
            AR.style.display ="none";
            SMG.style.display="none";
            SG.style.display="none";
            LMG.style.display="block";
            SR.style.display="none";
            HG.style.display="none";
            typeAR.style.border = '';
            typeSMG.style.border = '';
            typeSG.style.border = '';
            typeLMG.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeSR.style.border = '';
            typeHG.style.border = '';
            typeAR.style.backgroundColor = '';
            typeSMG.style.backgroundColor = '';
            typeSG.style.backgroundColor = '';
            typeLMG.style.backgroundColor = "#d7d870";
            typeSR.style.backgroundColor = '';
            typeHG.style.backgroundColor = '';
        }
        else if(type == 5){
            AR.style.display ="none";
            SMG.style.display="none";
            SG.style.display="none";
            LMG.style.display="none";
            SR.style.display="block";
            HG.style.display="none";
            typeAR.style.border = '';
            typeSMG.style.border = '';
            typeSG.style.border = '';
            typeLMG.style.border = '';
            typeSR.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeHG.style.border = '';
            typeAR.style.backgroundColor = '';
            typeSMG.style.backgroundColor = '';
            typeSG.style.backgroundColor = '';
            typeLMG.style.backgroundColor = '';
            typeSR.style.backgroundColor = "#d7d870";
            typeHG.style.backgroundColor = '';
        }
        else if(type == 6){ 
            AR.style.display = "none";
            SMG.style.display="none";
            SG.style.display="none";
            LMG.style.display="none";
            SR.style.display="none";
            HG.style.display="block";
            typeAR.style.border = '';
            typeSMG.style.border = '';
            typeSG.style.border = '';
            typeLMG.style.border = '';
            typeSR.style.border = '';
            typeHG.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeAR.style.backgroundColor = '';
            typeSMG.style.backgroundColor = '';
            typeSG.style.backgroundColor = '';
            typeLMG.style.backgroundColor = '';
            typeSR.style.backgroundColor = '';
            typeHG.style.backgroundColor = "#d7d870";
        }
    }else{
        var Ikaros = document.getElementById("Ikaros");
        var Kronos = document.getElementById("Kronos");
        var Pegasos = document.getElementById("Pegasos");
        var Sphinx = document.getElementById("Sphinx");
        var Underworld = document.getElementById("Underworld");
        var typeIkaros = document.getElementById("typeIkaros");
        var typeKronos = document.getElementById("typeKronos");
        var typePegasos= document.getElementById("typePegasos");
        var typeSphinx = document.getElementById("typeSphinx");
        var typeUnderworld = document.getElementById("typeUnderworld");
        if(type == 1){
            Ikaros.style.display = "block";
            Kronos.style.display="none";
            Pegasos.style.display="none";
            Sphinx.style.display="none";
            Underworld.style.display="none";
            typeIkaros.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeKronos.style.border = '';
            typePegasos.style.border = '';
            typeSphinx.style.border = '';
            typeUnderworld.style.border = '';
            typeIkaros.style.backgroundColor = "#d7d870";
            typeKronos.style.backgroundColor = '';
            typePegasos.style.backgroundColor = '';
            typeSphinx.style.backgroundColor = '';
            typeUnderworld.style.backgroundColor = '';
            
        }
        else if(type == 2){
            Ikaros.style.display ="none";
            Kronos.style.display="block";
            Pegasos.style.display="none";
            Sphinx.style.display="none";
            Underworld.style.display="none";
            typeIkaros.style.border = '';
            typeKronos.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typePegasos.style.border = '';
            typeSphinx.style.border = '';
            typeUnderworld.style.border = '';
            typeIkaros.style.backgroundColor = '';
            typeKronos.style.backgroundColor = "#d7d870";
            typePegasos.style.backgroundColor = '';
            typeSphinx.style.backgroundColor = '';
            typeUnderworld.style.backgroundColor = '';
            
        }
        else if(type == 3){
            Ikaros.style.display ="none";
            Kronos.style.display="none";
            Pegasos.style.display="block";
            Sphinx.style.display="none";
            Underworld.style.display="none";
            typeIkaros.style.border = '';
            typeKronos.style.border = '';
            typePegasos.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeSphinx.style.border = '';
            typeUnderworld.style.border = '';
            typeIkaros.style.backgroundColor = '';
            typeKronos.style.backgroundColor = '';
            typePegasos.style.backgroundColor = "#d7d870";
            typeSphinx.style.backgroundColor = '';
            typeUnderworld.style.backgroundColor = '';
        }
        else if(type == 4){
            Ikaros.style.display ="none";
            Kronos.style.display="none";
            Pegasos.style.display="none";
            Sphinx.style.display="block";
            Underworld.style.display="none";
            typeIkaros.style.border = '';
            typeKronos.style.border = '';
            typePegasos.style.border = '';
            typeSphinx.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeUnderworld.style.border = '';
            typeIkaros.style.backgroundColor = '';
            typeKronos.style.backgroundColor = '';
            typePegasos.style.backgroundColor = '';
            typeSphinx.style.backgroundColor = "#d7d870";
            typeUnderworld.style.backgroundColor = '';
        }
        else if(type == 5){
            Ikaros.style.display ="none";
            Kronos.style.display="none";
            Pegasos.style.display="none";
            Sphinx.style.display="none";
            Underworld.style.display="block";
            typeIkaros.style.border = '';
            typeKronos.style.border = '';
            typePegasos.style.border = '';
            typeSphinx.style.border = '';
            typeUnderworld.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
            typeIkaros.style.backgroundColor = '';
            typeKronos.style.backgroundColor = '';
            typePegasos.style.backgroundColor = '';
            typeSphinx.style.backgroundColor = '';
            typeUnderworld.style.backgroundColor = "#d7d870";
        }
    }
}
function setColor(game){
    if (game == 1){
        var typeAR = document.getElementById("typeAR");
        typeAR.style.backgroundColor = "#d7d870";
        typeAR.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
    }else{
        var typeIkaros = document.getElementById("typeIkaros");
        typeIkaros.style.backgroundColor = "#d7d870";
        typeIkaros.style.border = '1.5px solid rgba(243, 234, 101, 0.904)';
    }
}
function searchItems(game,type){
    if (game == 1){
        var i;
        if (type == 0){
            var searchBar = document.getElementById("searchBarAR");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("AR");
        }else if (type == 1){
            var searchBar = document.getElementById("searchBarSMG");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("SMG");
        }else if (type == 2){
            var searchBar = document.getElementById("searchBarSG");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("SG");
        }else if (type == 3){
            var searchBar = document.getElementById("searchBarLMG");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("LMG");
        }else if (type == 4){
            var searchBar = document.getElementById("searchBarSR");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("SR");
        }else if (type == 5){
            var searchBar = document.getElementById("searchBarHG");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("HG");
        }
        var slot = data.getElementsByClassName("itemSlot");
    
        for (i = 0;i < slot.length;i++){
            var a = slot[i].getElementsByTagName("a")[0];
            var contents = a.getElementsByClassName("contents")[0];
            var h1 = contents.getElementsByTagName("h1")[0];
            var name = h1.getElementsByClassName("nameOfItem")[0];
            var h1Value = name.innerText.toUpperCase()
            if (h1Value.indexOf(filter)>-1){
                slot[i].style.display="block";
            }else{
                slot[i].style.display="none";
            }
        }
    }else{
        var i;
        if (type == 1){
            var searchBar = document.getElementById("searchBarIkaros");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("Ikaros");
        }else if (type == 2){
            var searchBar = document.getElementById("searchBarKronos");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("Kronos");
        }else if (type == 3){
            var searchBar = document.getElementById("searchBarPegasos");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("Pegasos");
        }else if (type == 4){
            var searchBar = document.getElementById("searchBarSphinx");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("Sphinx");
        }else if (type == 5){
            var searchBar = document.getElementById("searchBarUnderworld");
            var filter = searchBar.value.toUpperCase();
            var data = document.getElementById("Underworld");
        }
        var slot = data.getElementsByClassName("itemSlot");

        for (i = 0;i < slot.length;i++){
            var a = slot[i].getElementsByTagName("a")[0];
            var contents = a.getElementsByClassName("contents")[0];
            var h1 = contents.getElementsByTagName("h1")[0];
            var name = h1.getElementsByClassName("nameOfItem")[0];
            var h1Value = name.innerText.toUpperCase()
            if (h1Value.indexOf(filter)>-1){
                slot[i].style.display="block";
            }else{
                slot[i].style.display="none";
            }
        }
    }
    
}

//Add to Cart 
function openBox(){
    var box = document.getElementById("addBox").style.display="block";
}
function closeBox(){
    var box = document.getElementById("addBox").style.display="none";
}