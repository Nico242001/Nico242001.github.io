var sport;
var equipement;
var link = "https://nico242001.github.io/projet2/"


function onload() {
    const params = new URLSearchParams(window.location.search);
    sport = params.get("sport");
    equipement = params.get("equipement");
   
    filters();
    cards();
    if(equipement == "shinGuards"){
        equipement = "shin guards"
    }
    var result = sport.concat(" ", equipement);
    document.getElementById("sportNameEquipement").innerHTML = result;
    document.getElementById("sportLink").innerHTML = sport;
    document.getElementById("sportLink").href = link.concat(sport);
    document.getElementById("equipementLink").innerHTML = equipement;
    document.getElementById("equipementLink").href = window.location;
    
}

function filters(){
    if(sport == "soccer"){
        document.getElementById("filterContainer").innerHTML += "<h4>Brand</h4><input type='checkbox' id='nike' name='nike' value='nike'><label for='nike'> Nike</label><br><input type='checkbox' id='adidas' name='adidas' value='adidas'><label for='adidas'> Adidas</label><br><input type='checkbox' id='puma' name='puma' value='puma'><label for='puma'> Puma</label><br><br>"
        if(equipement == "cleats"){
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='6' name='6' value='6'><label for='6'> 6</label><br><input type='checkbox' id='7' name='7' value='7'><label for='7'> 7</label><br><input type='checkbox' id='8' name='8' value='8'><label for='8'> 8</label><br><input type='checkbox' id='9' name='9' value='9'><label for='9'> 9</label><br><input type='checkbox' id='10' name='10' value='10'><label for='10'> 10</label><br><input type='checkbox' id='11' name='11' value='11'><label for='11'> 11</label><br><input type='checkbox' id='12' name='12' value='12'><label for='12'> 12</label><br><br>"
        }
        if(equipement == "balls"){
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='1' name='1' value='1'><label for='1'> 1</label><br><input type='checkbox' id='2' name='2' value='2'><label for='2'> 2</label><br><input type='checkbox' id='3' name='3' value='3'><label for='3'> 3</label><br><input type='checkbox' id='4' name='4' value='4'><label for='4'> 4</label><br><input type='checkbox' id='5' name='5' value='5'><label for='5'> 5</label><br><br>"
        }
        if(equipement == "shinGuards"){
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='S' name='S' value='S'><label for='S'> Small</label><br><input type='checkbox' id='M' name='M' value='M'><label for='M'> Medium</label><br><input type='checkbox' id='L' name='L' value='L'><label for='L'> Large</label><br><br>"
        }        
    }
    else if(sport == "hockey"){
        document.getElementById("filterContainer").innerHTML += "<h4>Brand</h4><input type='checkbox' id='ccm' name='ccm' value='ccm'><label for='ccm'> CCM</label><br><input type='checkbox' id='bauer' name='bauer' value='bauer'><label for='bauer'> Bauer</label><br><input type='checkbox' id='warrior' name='warrior' value='warrior'><label for='warrior'> Warrior</label><br><br>"
        if(equipement == "skates"){
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='6' name='6' value='6'><label for='6'> 6</label><br><input type='checkbox' id='7' name='7' value='7'><label for='7'> 7</label><br><input type='checkbox' id='8' name='8' value='8'><label for='8'> 8</label><br><input type='checkbox' id='9' name='9' value='9'><label for='9'> 9</label><br><input type='checkbox' id='10' name='10' value='10'><label for='10'> 10</label><br><input type='checkbox' id='11' name='11' value='11'><label for='11'> 11</label><br><input type='checkbox' id='12' name='12' value='12'><label for='12'> 12</label><br><br>"
        }
        if(equipement == "sticks" || equipement == "helmets"){
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='S' name='S' value='S'><label for='S'> Small</label><br><input type='checkbox' id='M' name='M' value='M'><label for='M'> Medium</label><br><input type='checkbox' id='L' name='L' value='L'><label for='L'> Large</label><br><br>"
        }    
    }
    else {
        
        if(equipement == "shoes"){
            document.getElementById("filterContainer").innerHTML += "<h4>Brand</h4><input type='checkbox' id='nike' name='nike' value='nike'><label for='nike'> Nike</label><br><input type='checkbox' id='adidas' name='adidas' value='adidas'><label for='adidas'> Adidas</label><br><input type='checkbox' id='puma' name='puma' value='puma'><label for='puma'> Puma</label><br><br>"
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='6' name='6' value='6'><label for='6'> 6</label><br><input type='checkbox' id='7' name='7' value='7'><label for='7'> 7</label><br><input type='checkbox' id='8' name='8' value='8'><label for='8'> 8</label><br><input type='checkbox' id='9' name='9' value='9'><label for='9'> 9</label><br><input type='checkbox' id='10' name='10' value='10'><label for='10'> 10</label><br><input type='checkbox' id='11' name='11' value='11'><label for='11'> 11</label><br><input type='checkbox' id='12' name='12' value='12'><label for='12'> 12</label><br><br>"
        }
        if(equipement == "balls"){
            document.getElementById("filterContainer").innerHTML += "<h4>Brand</h4><input type='checkbox' id='nike' name='nike' value='nike'><label for='nike'> Nike</label><br><input type='checkbox' id='spalding' name='spalding' value='spalding'><label for='spalding'> Spalding</label><br><input type='checkbox' id='wilson' name='wilson' value='wilson'><label for='wilson'> Wilson</label><br><br>"
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='27.5' name='27.5' value='27.5'><label for='27.5'> 27.5</label><br><input type='checkbox' id='28.5' name='28.5' value='28.5'><label for='28.5'> 28.5</label><br><input type='checkbox' id='29.5' name='29.5' value='29.5'><label for='29.5'> 29.5</label><br><br>"
        }
        if(equipement == "shirts"){
            document.getElementById("filterContainer").innerHTML += "<h4>Size</h4><input type='checkbox' id='S' name='S' value='S'><label for='S'> Small</label><br><input type='checkbox' id='M' name='M' value='M'><label for='M'> Medium</label><br><input type='checkbox' id='L' name='L' value='L'><label for='L'> Large</label><br><br>"
        }    
        
    }
}

function cards(){
    for (let i = 0; i <20 ; i++){
        document.getElementById("itemContainer").innerHTML += "<div class='p-2 mx-auto col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-7 col-xs-12'><div data-item-id='"+i+"' data-item-name='Item "+i+"' data-item-image='placeHolder.jpg' data-item-price='35' class='card' style='width:200px'><img class='card-img-top' src='placeHolder.jpg' alt='Card image'><div class='card-body text-center'><h4 class='card-title'>Item "+i+"</h4><p class='card-text'>$35.00</p><a href='https://nico242001.github.io/projet2/reviewItem?sport="+sport+"&equipement="+equipement+"&itemID="+i+"&imageLink=placeHolder.jpg' class='btn btn-primary'>Buy</a></div></div></div>"
    }
}