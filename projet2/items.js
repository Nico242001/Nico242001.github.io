var sport;
var equipement;
var link = "https://nico242001.github.io/projet2/"

function onload() {
    const params = new URLSearchParams(window.location.search);
    sport = params.get("sport");
    equipement = params.get("equipement");
    if(equipement == "shinGuards"){
        equipement = "shin guards"
    }
    var result = sport.concat(" ", equipement);
    document.getElementById("sportNameEquipement").innerHTML = result;
    document.getElementById("sportLink").innerHTML = sport;
    document.getElementById("sportLink").href = link.concat(sport);
    document.getElementById("equipementLink").innerHTML = equipement;
    document.getElementById("equipementLink").href = window.location;
    filters()
}

function filters(){
    if(sport == "soccer"){
        document.getElementById("filterContainer").innerHTML += "<h4>Brand</h4><input type='checkbox' id='vehicle1' name='vehicle1' value='Bike'><label for='vehicle1'> I have a bike</label><br><input type='checkbox' id='vehicle2' name='vehicle2' value='Car'><label for='vehicle2'> I have a car</label><br>"
    }
    if(sport == "hockey"){

    }
    if(sport == "basketball"){

    }
}