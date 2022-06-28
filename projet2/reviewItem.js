var sport;
var equipement;
var itemName
var link = "https://nico242001.github.io/projet2/"

function onload() {
    const params = new URLSearchParams(window.location.search);
    sport = params.get("sport");
    equipement = params.get("equipement");
    itemName = params.get("itemName");
    if(equipement == "shinGuards"){
        equipement = "shin guards"
    }
    var equipementLink = link.concat("items?sport=",sport,"&equipement=",equipement);
    document.getElementById("sportLink").innerHTML = sport;
    document.getElementById("sportLink").href = link.concat(sport);
    document.getElementById("equipementLink").innerHTML = equipement;
    document.getElementById("equipementLink").href = equipementLink;
    document.getElementById("itemLink").innerHTML = itemName;
    document.getElementById("itemLink").href = window.location;
}

